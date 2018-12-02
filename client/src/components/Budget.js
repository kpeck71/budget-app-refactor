import React from 'react'

const Budget = ({budget, onRemoveBudget=f=>f, editingBudget=f=>f}) =>

  <div className="single-budget row" key={budget.id}>
    <div className="budget-view col">
      <span>You have a ${budget.amount} {budget.timeframe} budget to work with. </span>
      <button class="btn-outline btn-sm" onClick={()=> onRemoveBudget(budget.id)}>Erase</button>
      <button class="btn-secondary btn-sm" onClick={()=> editingBudget(budget.id)}>Edit</button>
    </div>
  </div>

export default Budget;
