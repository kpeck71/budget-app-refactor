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
       'rgba(54, 162, 235, 0.6)',
       'rgba(255, 206, 86, 0.6)',
       'rgba(75, 192, 192, 0.6)',
       'rgba(153, 102, 255, 0.6)',
       'rgba(255, 159, 64, 0.6)',
       'rgba(255, 99, 132, 0.6)'
     ]
  }
  ]
}

  return (
    <div className="container">
      <div className="row">
        <div className="statusSummary col-4" >
          <p><strong>Essentials</strong>: ${ essentialTotals }</p>
          <p><strong>Fun</strong>: ${ funTotals }</p>
          <p><strong>Credit</strong>: ${ creditTotals }</p>
          <p><strong>All other stuff</strong>: ${ miscTotals }</p>
        </div>
        <PieChart chartData={chartData}/>
      </div>
    </div>
  )
}
}
export default Status;
