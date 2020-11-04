import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

let URL = 'http://localhost:6001/transactions'

class AccountContainer extends Component {

  state = {
    transactions: [],
    searchTerm: ""
  }

  componentDidMount(){
    fetch(URL)
    .then(res=> res.json())
    .then(transactions => {
      this.setState({
        transactions: transactions
      })
    })
  }


  addTransaction = (newTransaction) => {
    // console.log('submitteeed', newTransaction)

    fetch(URL, {
      method: 'POST',
      headers: {
        "Content-type": "application/json",
        "Accept": "application/json",
      },
      body: JSON.stringify(newTransaction),
    })
    .then(res => res.json())
    .then((newTransaction) => {
      this.setState({
        transactions: [...this.state.transactions, newTransaction]
      })
    })
  }


  handleSearch = (e) => {
    let {value} = e.target
    // console.log(value)
    this.setState({
      searchTerm: value,
      filteredTransaction: this.state.transactions.filter((transaction => transaction.description.toLowerCase().includes(this.state.searchTerm.toLowerCase())))
    })
  }

  handleSearchClick = () => {
    console.log('button clicked')
  }


  render() {
    return (
      <div>
        <Search 
          handleSearch={this.handleSearch}
          handleSearchClick={this.handleSearchClick}
        />

        <AddTransactionForm addTransaction={this.addTransaction}/>

        <TransactionsList 
          transactions={this.state.transactions}
        />

      </div>
    );
  }
}

export default AccountContainer;
