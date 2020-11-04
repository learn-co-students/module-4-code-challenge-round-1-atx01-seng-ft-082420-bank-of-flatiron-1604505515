import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";
const url = 'http://localhost:6001/transactions/'

class AccountContainer extends Component {
  state = {
    transactions: [],
    inputValue: ""
  }

  componentDidMount() {
    fetch(url)
    .then(res => res.json())
    .then(transactions => this.setState({transactions: transactions}))
  }

  addTransation = transaction => {
    console.log(transaction)
    this.setState({transactions: [...this.state.transactions, transaction]})
  }

  deleteTransaction = id => {
    console.log(id)
    fetch(url + id, {
      method: 'DELETE'
    })
  }

  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm addTransation={this.addTransation}/>
        <TransactionsList transactions={this.state.transactions} deleteTransaction={this.deleteTransaction}/>
      </div>
    );
  }
}

export default AccountContainer;
