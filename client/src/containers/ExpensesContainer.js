import React, { Component } from 'react';
import axios from 'axios';
import Expense from '../components/Expense';
import NewExpenseForm from '../components/NewExpenseForm';
import EditExpenseForm from '../components/EditExpenseForm';

class ExpensesContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      expenses: [],
      budgets: [],
      editingExpenseId: null,
      isHidden: true
    }
    this.addNewExpense = this.addNewExpense.bind(this)
    this.removeExpense = this.removeExpense.bind(this)
    this.editingExpense = this.editingExpense.bind(this)
    this.editExpense = this.editExpense.bind(this)
  }
  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/expenses.json')
    .then(response => {
      // console.log(response)
      this.setState({
        expenses: response.data
      })
    })
    .catch(error => console.log(error))

    axios.get('http://localhost:3001/api/v1/budgets.json')
    .then(response => {
      this.setState({
        budgets: response.data
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

    calculateBudget() {
      let expenseTotal = this.state.expenses.reduce((acc, cv) => acc + parseInt(cv.amount), 0)
      let incomeTotal = this.state.budgets.reduce((acc, cv) => acc + cv.amount, 0)
      return incomeTotal - expenseTotal
    }

  render() {
    const expenseClassName = this.calculateBudget() <= 500 ? 'expense-low col-md-auto border rounded p-2 m-2 mx-5 border-alert' : 'expense-ok col-md-auto border rounded p-2 m-2 mx-5 border-primary'

    return (

      <div className="expenses-container container-fluid">

        <div className={expenseClassName}>
          You have this much left to spend: ${this.calculateBudget()}
        </div>
        {!this.state.isHidden && <NewExpenseForm onNewExpense={this.addNewExpense} /> }
        <button className="btn btn-outline-warning" onClick={this.toggleHidden.bind(this)} type="submit">New Expense</button>
        <div className="row justify-content-md-center">
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
        <br/>
      </div>
      )
    }
  }

export default ExpensesContainer;
