import React from 'react'

const Goal = ({goal, onRemoveGoal=f=>f, editingGoal=f=>f}) =>

  <div className="single-goal col-md-3 border rounded p-2 m-2 mx-5 border-info" key={goal.id}>
    <h4>{goal.title}</h4>
    <p>Amount: ${goal.amount}</p>
    <p>Category: {goal.category}</p>
    <button onClick={()=> onRemoveGoal(goal.id)}>Delete</button>
    <button onClick={()=> editingGoal(goal.id)}>Edit</button>
  </div>

export default Goal;
