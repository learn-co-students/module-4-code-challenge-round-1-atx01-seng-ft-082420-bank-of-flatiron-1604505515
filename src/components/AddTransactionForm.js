import React, { Component } from "react";
let url = 'http://localhost:6001/transactions/'

class AddTransactionForm extends Component {
  constructor() {
    super()

    this.state = {
      date: "",
      description: "",
      category: "",
      amount: ""
    }
  }

  handleChange = (e) => {
    console.log(e.target.value, e.target.name)
    this.setState({ [e.target.name]: e.target.value })
  }

  handleSubmit = (e) => {
    // console.log("this works")
    e.preventDefault()
    const { date, description, category, amount } = this.state
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body: JSON.stringify({
        date: date,
        description: description,
        category: category,
        amount: amount
      })
    })
    .then(res => res.json())
    .then(newTransaction => this.props.addTransation(newTransaction))
  }

  render() {
    const {date, description, category, amount} = this.state
    const {handleSubmit, handleChange} = this
    return (
      <div className="ui segment">
        <form className="ui form" onSubmit={handleSubmit}>
          <div className="inline fields">
            <input type="date" name="date" onChange={handleChange} />
            <input type="text" name="description" placeholder="Description" onChange={handleChange} />
            <input type="text" name="category" placeholder="Category" onChange={handleChange} />
            <input
              type="number"
              name="amount"
              placeholder="Amount"
              step="0.01"
              onChange={handleChange}
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
