import React from 'react'

const Budget = ({budget, onRemoveBudget=f=>f, editingBudget=f=>f}) =>

  <div className="single-budget" key={budget.id}>
    <h4>You have a ${budget.amount} {budget.timeframe} budget to work with. </h4>
    <button onClick={()=> onRemoveBudget(budget.id)}>Erase</button>
    <button onClick={()=> editingBudget(budget.id)}>Edit</button>
    <hr/>
  </div>

export default Budget;
