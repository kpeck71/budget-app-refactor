import React, { Component } from 'react';
import axios from 'axios'
import Expense from './Expense'
import NewExpenseForm from './NewExpenseForm'
import EditExpenseForm from './EditExpenseForm'

class ExpensesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
      editingExpenseId: null
    }
    this.addNewExpense = this.addNewExpense.bind(this)
    this.removeExpense = this.removeExpense.bind(this)
    this.editingExpense = this.editingExpense.bind(this)
    this.editExpense = this.editExpense.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/expenses.json')
    .then(response => {
      console.log(response)
      this.setState({
        expenses: response.data
      })
    })
    .catch(error => console.log(error))
  }

  addNewExpense(title, amount, category) {
     axios.post( '/api/v1/expenses', { expense: {title, amount, category} })
     .then(response => {
         console.log(response)
         const expenses = [ ...this.state.expenses, response.data ]
         this.setState({expenses})
     })
     .catch(error => {
         console.log(error)
     })
   }

   removeExpense(id) {
      axios.delete( '/api/v1/expenses/' + id )
      .then(response => {
          const expenses = this.state.expenses.filter(
              expense => expense.id !== id
          )
          this.setState({expenses})
      })
      .catch(error => console.log(error))
    }

    editingExpense(id) {
      this.setState({
        editingExpenseId: id
      })
    }

    editExpense(id, title, amount, category) {
      axios.put( '/api/v1/expenses/' + id, {
          expense: {
              title,
              amount,
              category
          }
      })
      .then(response => {
          console.log(response);
          const expenses = this.state.expenses;
          expenses[id-1] = {id, title, amount, category}
          this.setState(() => ({
              expenses,
              editingExpenseId: null
          }))
      })
      .catch(error => console.log(error));
    }

  render() {
    return (
      <div className="expenses-container container-fluid">
        <div className="row">
          <h1>Expenses</h1>
        {this.state.expenses.map( expense => {
          if (this.state.editingExpenseId === expense.id ) {
            return (<EditExpenseForm
                      expense={expense}
                      key={expense.id}
                      editExpense={this.editExpense}
                    />)
          } else {
          return (<Expense
                    expense={expense}
                    key={expense.id}
                    onRemoveExpense={this.removeExpense}
                    editingExpense={this.editingExpense}
                    /> )
          }
        })}
        </div>
        <NewExpenseForm onNewExpense={this.addNewExpense} />

      </div>
      )
    }
  }

export default ExpensesContainer;
