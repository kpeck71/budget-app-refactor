import React from 'react';

const NewGoalForm = ({onNewGoal = f => f}) => {
  let title, amount
  const submit = e => {
      e.preventDefault()
      onNewGoal(title.value, amount.value)
      title.value = ''
      amount.value = ''
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
      <button>Add Goal</button>
    </form>
  )
}

export default NewGoalForm;
