import React, { Component } from 'react';

class EditBudgetForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.budget.id,
            amount: this.props.budget.amount
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, amount } = this.state;
        this.props.editBudget(id, amount);
    }
    render(){
        return(
            <form onSubmit={this.handleSubmit}>
            <input  name="amount"
                    type="text"
                    placeholder="amount..."
                    value={this.state.amount}
                    onChange={this.handleChange} />
            <button>Update Budget</button>
        </form>
        )
    }
}
export default EditBudgetForm;
