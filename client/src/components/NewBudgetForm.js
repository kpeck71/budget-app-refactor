import React from 'react';

const NewBudgetForm = ({onNewBudget = f => f}) => {
  let amount
  const submit = e => {
      e.preventDefault()
      onNewBudget(amount.value)
      amount.value = ''
      amount.focus()
  }

  return (
    <form onSubmit={submit}>
      <input  ref={input => amount = input}
              type="integer"
              placeholder="Amount..." required />
      <button>Add Budget</button>
    </form>
  )
}

export default NewBudgetForm;
