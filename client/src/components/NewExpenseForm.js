import React from 'react';

const NewExpenseForm = ({onNewExpense = f => f}) => {
  let title, amount, category
  const submit = e => {
      e.preventDefault()
      onNewExpense(title.value, amount.value, category.value)
      title.value = ''
      amount.value = ''
      category.value = ''
      title.focus()
  }

  return (
    <form onSubmit={submit}>
      <input  ref={input => title = input}
              type="text"
              placeholder="Title..." required />
      <input  ref={input => amount = input}
              type="integer"
              placeholder="Amount..." required />
      <input  ref={input => category = input}
        type="text"
        placeholder="Category..." required />
      <button>Add Expense</button>
    </form>
  )
}

export default NewExpenseForm;
