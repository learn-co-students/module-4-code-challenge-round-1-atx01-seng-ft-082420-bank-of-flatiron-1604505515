import React, { Component } from "react";

class AddTransactionForm extends Component {
  constructor() {
    super()
  
    this.state = {
       date: "",
       description: "",
       category: "",
       amount: 0
    }
  }

  handleOnSubmit = (e) => {
    e.preventDefault()
    console.log(this.state)
    this.props.addNewTransaction(this.state)

  }

  handleOnChange = (e) => {
    console.log(e.target.value)
    let { value, name } = e.target
    this.setState({
      [name]: value
    })
  }
  render() {
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={this.handleOnSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={this.handleOnChange}/>
            <input type="text" name="description" placeholder="Description" onChange={this.handleOnChange}/>
            <input type="text" name="category" placeholder="Category" onChange={this.handleOnChange}/>
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={this.handleOnChange}
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
