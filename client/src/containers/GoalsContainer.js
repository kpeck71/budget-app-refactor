import React, { Component } from 'react';
import axios from 'axios'
import Goal from '../components/Goal';
import NewGoalForm from '../components/NewGoalForm';
import EditGoalForm from '../components/EditGoalForm';
import { connect } from 'react-redux';
import * as actions from '../actions/actions';

class GoalsContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: [],
      editingGoalId: null
    }
    this.addNewGoal = this.addNewGoal.bind(this)
    this.removeGoal = this.removeGoal.bind(this)
    this.editingGoal = this.editingGoal.bind(this)
    this.editGoal = this.editGoal.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/goals.json')
    .then(response => {
      console.log(response)
      this.setState({
        goals: response.data
      })
    })
    .catch(error => console.log(error))
  }

  addNewGoal(title, amount) {
     axios.post( '/api/v1/goals', { goal: {title, amount} })
     .then(response => {
         console.log(response)
         const goals = [ ...this.state.goals, response.data ]
         this.setState({goals})
     })
     .catch(error => {
         console.log(error)
     })
   }

   removeGoal(id) {
      axios.delete( '/api/v1/goals/' + id )
      .then(response => {
          const goals = this.state.goals.filter(
              goal => goal.id !== id
          )
          this.setState({goals})
      })
      .catch(error => console.log(error))
    }

    editingGoal(id) {
      this.setState({
        editingGoalId: id
      })
    }

    editGoal(id, title, amount) {
      axios.put( '/api/v1/goals/' + id, {
          goal: {
              title,
              amount
          }
      })
      .then(response => {
          console.log(response);
          const goals = this.state.goals;
          goals[id-1] = {id, title, amount}
          this.setState(() => ({
              goals,
              editingGoalId: null
          }))
      })
      .catch(error => console.log(error));
    }

  render() {
    return (
      <div className="goals-container container-fluid">
        <div className="row">
          <h1>Goals</h1>
        {this.state.goals.map( goal => {
          if (this.state.editingGoalId === goal.id ) {
            return (<EditGoalForm
                      goal={goal}
                      key={goal.id}
                      editGoal={this.editGoal}
                    />)
          } else {
          return (<Goal
                    goal={goal}
                    key={goal.id}
                    onRemoveGoal={this.removeGoal}
                    editingGoal={this.editingGoal}
                    /> )
          }
        })}
        </div>
        <NewGoalForm onNewGoal={this.addNewGoal} />
      </div>
      )
    }
  }
const mapStateToProps = state => ({
  goals: state.goals.goals,
  loading: state.goals.loading,
  error: state.goals.error

})

export default connect (mapStateToProps, actions)(GoalsContainer);
