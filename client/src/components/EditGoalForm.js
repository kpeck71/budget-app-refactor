import React, { Component } from 'react';

class EditGoalForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.goal.id,
            title: this.props.goal.title,
            amount: this.props.goal.amount
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleChange = (e) => {
        this.setState({[e.target.name]: e.target.value})
    }
    handleSubmit(e){
        e.preventDefault();
        const { id, title, amount } = this.state;
        this.props.editGoal(id, title, amount);
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
                    placeholder="Excerpt..."
                    value={this.state.amount}
                    onChange={this.handleChange} />
            <button>Update Goal</button>
        </form>
        )
    }
}
export default EditGoalForm;
