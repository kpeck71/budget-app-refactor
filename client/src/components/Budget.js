import React from 'react'

const Budget = ({budget, onRemoveBudget=f=>f, editingBudget=f=>f}) =>

  <div className="single-budget" key={budget.id}>
    <h4>#{budget.id} - {budget.title}</h4>
    <p>{budget.excerpt}</p>
    <button onClick={()=> onRemoveBudget(budget.id)}>Erase</button>
    <button onClick={()=> editingBudget(budget.id)}>Edit</button>
    <hr/>
  </div>

export default Budget;
