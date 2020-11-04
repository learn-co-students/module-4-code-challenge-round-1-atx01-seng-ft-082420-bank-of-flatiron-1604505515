import React, { Component } from "react";

class AddTransactionForm extends Component {
  state = {
    id: 0,
    date: '',
    description: '',
    category: '',
    amount: ''
  }

  onSubmit = (e) => {
    e.preventDefault()
    this.props.addTransaction(this.state)
  }

  onChange = (e) => {
    let {name, value} = e.target
    this.setState({[name]: value})
  }

  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.onSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.onChange} value={this.state.date}/>
            <input type="text" name="description" onChange={this.onChange} placeholder="Description" value={this.state.description}/>
            <input type="text" name="category" onChange={this.onChange} placeholder="Category" value={this.state.category}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step={0.01}
              value={this.state.amount}
              onChange={this.onChange}
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
