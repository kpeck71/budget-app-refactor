import React, { Component } from 'react';
import axios from 'axios'
import Budget from './Budget'
import NewBudgetForm from './NewBudgetForm'
import EditBudgetForm from './EditBudgetForm'

class BudgetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      budgets: [],
      editingBudgetId: null
    }
    this.addNewBudget = this.addNewBudget.bind(this)
    this.removeBudget = this.removeBudget.bind(this)
    this.editingBudget = this.editingBudget.bind(this)
    this.editBudget = this.editBudget.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/budgets.json')
    .then(response => {
      console.log(response)
      this.setState({
        budgets: response.data
      })
    })
    .catch(error => console.log(error))
  }

  addNewBudget(title, amount, category) {
     axios.post( '/api/v1/budgets', { budget: {title, amount, category} })
     .then(response => {
         console.log(response)
         const budgets = [ ...this.state.budgets, response.data ]
         this.setState({budgets})
     })
     .catch(error => {
         console.log(error)
     })
   }

   removeBudget(id) {
      axios.delete( '/api/v1/budgets/' + id )
      .then(response => {
          const budgets = this.state.budgets.filter(
              budget => budget.id !== id
          )
          this.setState({budgets})
      })
      .catch(error => console.log(error))
    }

    editingBudget(id) {
      this.setState({
        editingBudgetId: id
      })
    }

    editBudget(id, title, amount, category) {
      axios.put( '/api/v1/budgets/' + id, {
          budget: {
              title,
              amount,
              category
          }
      })
      .then(response => {
          console.log(response);
          const budgets = this.state.budgets;
          budgets[id-1] = {id, title, amount, category}
          this.setState(() => ({
              budgets,
              editingBudgetId: null
          }))
      })
      .catch(error => console.log(error));
    }

  render() {
    return (
      <div className="budgets-container">
        Budget:
        {this.state.budgets.map( budget => {
          if (this.state.editingBudgetId === budget.id ) {
            return (<EditBudgetForm
                      budget={budget}
                      key={budget.id}
                      editBudget={this.editBudget}
                    />)
          } else {
          return (<Budget
                    budget={budget}
                    key={budget.id}
                    onRemoveBudget={this.removeBudget}
                    editingBudget={this.editingBudget}
                    /> )
          }
        })}
        <NewBudgetForm onNewBudget={this.addNewBudget} />
      </div>
      )
    }
  }

export default BudgetContainer;
