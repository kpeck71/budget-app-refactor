import React, { Component } from 'react';
import Goal from './Goal'
import axios from 'axios'

class CompletedGoals extends Component {
  constructor(props) {
    super(props)
    this.state = {
      goals: []
    }
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
render() {
  const completedGoals = this.state.goals.filter((goal) => goal.paid === true)
  const showGoals = completedGoals.map((goal) => {
    return <Goal goal={goal} class/>
  })

  return (
  <div className="row">
    {showGoals}
  </div>
  )}
}

export default CompletedGoals;
