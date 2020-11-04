import React, { Component } from "react";

class AddTransactionForm extends Component {

  state={
    date: '',
    description: '',
    category: '',
    amount: 0
  }
  handleSubmit=(e)=>{
    e.preventDefault()
    // console.log(this.state)
    this.props.addTransaction(this.state)
  }

  handleChange=(e)=>{
    // console.log('value', e.target.value, 'name', e.target.name)
    this.setState({ [e.target.name]: e.target.value})
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleSubmit}>
          <div className="inline fields">
            <input type="date" onChange={this.handleChange} name="date" />
            <input type="text" onChange={this.handleChange} name="description" placeholder="Description" />
            <input type="text" onChange={this.handleChange} name="category" placeholder="Category" />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleChange}
            />
          </div>
          <button className="ui button" type="submit">
            Add Transaction
          </button>
        </form>
      </div>
    );
  }
}

export default AddTransactionForm;
