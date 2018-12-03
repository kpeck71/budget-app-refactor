import React, { Component } from 'react';
import axios from 'axios';
import { allIdeas, getByCategory, getBetweenCost } from '../data/ideas';
import Goal from '../components/Goal'

class GoalIdeas extends Component {

  constructor(props) {
    super(props)
    this.state = {
      goalIdeas: allIdeas,
      filters: {
        type: 'all'
      },
      goals: []
    }
  }

  onClick = (event) => {
   const type = this.state.filters.type;
   let results = ''
   if (type !== 'all'){
     let results = getByCategory(type)
     this.setState({
       goalIdeas: results
     })
    }
   }

   onChangeType = (event) => {
     // let values = event.map((e) => e.value)
     let value = event.value
     this.setState({
       filters: {
         type: value
         }
       }, () => console.log(this.state.filters))
   }

   handleAdd = goal => {
     this.props.createGoal(goal);
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

    renderIdeas() {
       return this.state.goalIdeas.map((idea) =>
       <Goal goal={idea} className='warning' cardDetails="goalIdea" />
      )
    }

  render() {
    const typeOptions = [
      { value: 'charity', label: 'Charity' },
      { value: 'travel', label: 'Travel' },
      { value: 'fun', label: 'Fun Stuff' },
      { value: '0 to 25', label: '< $25' },
      { value: '50 to 75', label: '$50-75' },
      { value: '100+', label: '$100+' },
      { value: '300+', label: '$300+' },
    ]
    const typeOption = "Choose a Category"
    const amountOption= "Choose an Amount"


    return (
      <div className="GoalIdeas container-fluid">
          <button style={{marginTop: 10}} onClick={this.onClick}>Find goals</button>
        <div className="row">
          {this.renderIdeas()}
        </div>
      </div>
    );
  }
}

export default GoalIdeas;
