import React, { Component } from 'react';

class EditExpenseForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.expense.id,
            title: this.props.expense.title,
            amount: this.props.expense.amount,
            category: this.props.expense.category
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, title, amount, category } = this.state;
        this.props.editExpense(id, title, amount, category);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="title"
                    type="text"
                    placeholder="Title..."
                    value={this.state.title}
                    onChange={this.handleChange} />
            <input  name="amount"
                    type="text"
                    placeholder="Amount..."
                    value={this.state.amount}
                    onChange={this.handleChange} />
                  <input name="category"
                    type="dropdown"
                    placeholder="Category..."
                    value={this.state.category}
                    onChange={this.handleChange} />
            <button>Update Expense</button>
        </form>
        )
    }
}
export default EditExpenseForm;
