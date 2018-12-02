import React from 'react'

const Expense = ({expense, onRemoveExpense=f=>f, editingExpense=f=>f}) =>

  <div className="single-expense col-md-3 border rounded p-2 m-2 mx-5 border-warning" key={expense.id}>
    <h4>{expense.title}</h4>
    <p>{expense.amount}</p>
    <p>{expense.category}</p>
    <button class="btn-outline-primary btn-sm" onClick={()=> onRemoveExpense(expense.id)}>Erase</button>
    <button class="btn-secondary btn-sm" onClick={()=> editingExpense(expense.id)}>Edit</button>
  </div>

export default Expense;
