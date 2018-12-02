import React from 'react';

const NewBudgetForm = ({addNewBudget = f => f}) => {
  let amount
  const submit = e => {
      e.preventDefault()
      addNewBudget(amount.value)
      amount.value = ''
      amount.focus()
  }

  return (
    <form onSubmit={submit}>
      <input  ref={input => amount = input}
              type="integer"
              placeholder="What is your budget?" required />
      <button>Add Budget</button>
    </form>
  )
}

export default NewBudgetForm;
