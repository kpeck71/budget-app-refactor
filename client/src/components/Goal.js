import React from 'react'
import updateGoal from '../actions/actions'

const Goal = ({goal, onRemoveGoal=f=>f, editingGoal=f=>f}) =>

  <div className="single-goal col-md-3 border rounded p-2 m-2 mx-5 border-info" key={goal.id}>
    <h4>{goal.title}</h4>
    <p>Amount: ${goal.amount}</p>
    <p>Category: {goal.category}</p>
    <button class="btn btn-outline-dark" onClick={() => {this.props.updateGoal(goal.id, goal.paid)} }>{ goal.paid ? "Mark Incomplete" : "Mark Complete" } </button>

  </div>


export default Goal;
