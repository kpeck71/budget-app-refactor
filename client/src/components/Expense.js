import React from 'react'

const Expense = ({expense, onRemoveExpense=f=>f, editingExpense=f=>f}) =>

  <div className="single-expense" key={expense.id}>
    <h4>#{expense.id} - {expense.title}</h4>
    <p>{expense.amount}</p>
    <p>{expense.category}</p>
    <button onClick={()=> onRemoveExpense(expense.id)}>Erase</button>
    <button onClick={()=> editingExpense(expense.id)}>Edit</button>
    <hr/>
  </div>

export default Expense;
