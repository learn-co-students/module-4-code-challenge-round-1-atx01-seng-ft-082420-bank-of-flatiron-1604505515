import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";
const URL = 'http://localhost:6001/transactions'

class App extends Component {
  constructor() {
    super()

    this.state = {
      transactions: [],
      search: '',
      sort: ''
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

  handleSort = (sort) => {
    this.setState({sort})
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

  deleteT = (t) => {
    fetch(`${URL}/${t.id}`, {
      method: 'DELETE'
    })
    .then(this.setState({transactions: this.state.transactions.filter(tran => tran.id !== t.id)}))
  }

  sortBy = () => {
    let transactions = this.state.transactions
    let sort = this.state.sort
    if(sort === 'category') {
      transactions = transactions.sort((a,b) => (a.category > b.category) ? 1 : ((b.category > a.category) ? -1 : 0)) 
    } else if(sort === 'description') {
      transactions = transactions.sort((a,b) => (a.description > b.description) ? 1 : ((b.description > a.description) ? -1 : 0))
    }
    return transactions
  }

  render() {
    const transactions = this.sortBy().filter(t => t.description.toLowerCase().includes(this.state.search))
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer transactions={transactions} addTransaction={this.addTransaction} handleSearch={this.handleSearch}
        deleteT={this.deleteT} sort={this.state.sort} handleSort={this.handleSort}/>
      </div>
    );
  }
}

export default App;
