import React from 'react'

const Goal = ({goal, onRemoveGoal=f=>f, editingGoal=f=>f}) =>

  <div className="single-goal" key={goal.id}>
    <h4>#{goal.id} - {goal.title}</h4>
    <p>{goal.excerpt}</p>
    <button onClick={()=> onRemoveGoal(goal.id)}>Erase</button>
    <button onClick={()=> editingGoal(goal.id)}>Edit</button>
    <hr/>
  </div>

export default Goal;
