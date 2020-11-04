import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
    constructor() {
      super()
    
      this.state = {
         allTransactions: [],
         search: ""
      }
    }
    
    componentDidMount = () => {
      fetch("http://localhost:6001/transactions")
      .then(res => res.json())
      .then(allTransactions => {
        this.setState({
          allTransactions
        })
      })
    }

    transactionSearch = (e) => {
      console.log(e)
      let search = e
      this.setState({
        search
      })
    }

    addNewTransaction = (newTransaction) => {
      fetch("http://localhost:6001/transactions", {
        method: "POST", 
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          date: newTransaction.date,
          description: newTransaction.description, 
          category: newTransaction.category,
          amount: newTransaction.price
        })
      })
      .then(res => res.json())
      .then(newTrans => 
        this.setState({
          // allTransactions: [...this.state.allTransactions, newTrans]
        })
      )
    }

  render() {
    let filteredTransactions = this.state.allTransactions.filter(transaction => 
      transaction.description.toLowerCase().includes(this.state.search.toLowerCase()))
    return (
      <div>
        <Search transactionSearch={this.transactionSearch}/>
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList allTransactions={filteredTransactions}/>
      </div>
    );
  }
}

export default AccountContainer;
