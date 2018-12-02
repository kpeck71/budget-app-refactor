import  React, { Component } from 'react';
import axios from 'axios';
import PieChart from './PieChart'

class Status extends Component {

  constructor(props) {
    super(props)
    this.state = ({
      expenses: []
    })
  }

  componentDidMount() {
    axios.get('http://localhost:3001/api/v1/expenses.json')
    .then(response => {
      console.log(response)
      this.setState({
        expenses: response.data
      })
    })
    .catch(error => console.log(error))
  }

  // function filterExpenses() {
  //
  // }

render() {
const essentials = this.state.expenses.filter(expense =>  expense.category.toLowerCase() === "essentials" )
const fun = this.state.expenses.filter(expense => expense.category.toLowerCase() === "fun")
const credit = this.state.expenses.filter(expense => expense.category.toLowerCase() === "credit")
const misc = this.state.expenses.filter(expense =>  expense.category.toLowerCase() === "new" )
const essentialTotals = essentials.reduce(function(acc, cv) { return acc + parseInt(cv.amount)}, 0);
const funTotals = fun.reduce(function(acc, cv) { return acc + parseInt(cv.amount)}, 0);
const creditTotals = credit.reduce(function(acc, cv) { return acc + parseInt(cv.amount)}, 0);
const miscTotals = misc.reduce(function(acc, cv) { return acc + parseInt(cv.amount)}, 0);

const chartData = {
  labels: ['essentials', 'fun', 'credit', 'miscellaneous'],
  datasets: [
    {
      label: 'Spending by Category',
    data: [
      essentialTotals, funTotals, creditTotals, miscTotals
    ],
    backgroundColor: [
      'red', 'blue', 'green', 'yellow'
    ]
  }
  ]
}

  return (
    <div >
      <h4>Status and Chart.js work will go here</h4>
      <p>You're spending this much on the essentials: { essentialTotals }</p>
      <p>You're spending this much on fun: { funTotals }</p>
      <p>You're spending this much on credit: { creditTotals }</p>
      <p>You're spending this much on all other stuff: { miscTotals }</p>
      <PieChart chartData={chartData}/>

    </div>
  )
}
}
export default Status;
