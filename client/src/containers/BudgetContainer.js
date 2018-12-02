import React, { Component } from 'react';
import axios from 'axios';
import Budget from '../components/Budget';
import NewBudgetForm from '../components/NewBudgetForm';
import EditBudgetForm from '../components/EditBudgetForm';

class BudgetContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      budgets: [],
      editingBudgetId: null,
      isHidden: false
    }
    this.addNewBudget = this.addNewBudget.bind(this)
    this.removeBudget = this.removeBudget.bind(this)
    this.editingBudget = this.editingBudget.bind(this)
    this.editBudget = this.editBudget.bind(this)
  }

  toggleHidden() {
    this.setState({
      isHidden: !this.state.isHidden
    })
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

  addNewBudget(amount) {
     axios.post( 'http://localhost:3001/api/v1/budgets', { budget: {amount} })
     .then(response => {
         console.log('addNewBudget ', response)
         const budgets = [ ...this.state.budgets, response.data ]
         this.setState({budgets, isHidden: true})
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
          this.setState({budgets, isHidden: false})
      })
      .catch(error => console.log(error))
    }

    editingBudget(id) {
      this.setState({
        editingBudgetId: id
      })
    }

    editBudget(id, amount) {
      axios.put( '/api/v1/budgets/' + id, {
          budget: {
              amount
          }
      })
      .then(response => {
          console.log(response);
          const budgets = this.state.budgets;
          budgets[id-1] = {id,amount}
          this.setState(() => ({
              budgets,
              editingBudgetId: null,
              isHidden: true
          }))
      })
      .catch(error => console.log(error));
    }

  render() {
    return (
      <div className="budgets-container container-fluid">
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
        {!this.state.isHidden && <NewBudgetForm addNewBudget={this.addNewBudget} /> }
      </div>
      )
    }
  }

export default BudgetContainer;
