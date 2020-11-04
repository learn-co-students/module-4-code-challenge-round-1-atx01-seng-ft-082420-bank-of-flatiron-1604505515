import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
const URL = 'http://localhost:6001/transactions'

class App extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      search: ''
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(res => res.json())
    .then(transactions => this.setState({transactions}))
  }

  handleSearch = (input) => {
    let search = input.toLowerCase()
    this.setState({search})
  }

  addTransaction = (transaction) => {
   transaction.amount = parseFloat(transaction.amount).toFixed(2)
   fetch(URL , {
     method: 'POST',
     headers: {
       'Content-Type':'application/json',
       'Accepts':'application/json'
     },
     body:JSON.stringify(transaction)
   })
   .then(res => res.json())
   .then(newT => this.setState({transactions: [...this.state.transactions, newT]}))
  }

  render() {
    const transactions = this.state.transactions.filter(t => t.description.toLowerCase().includes(this.state.search))
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={transactions} addTransaction={this.addTransaction} handleSearch={this.handleSearch}/>
      </div>
    );
  }
}

export default App;
