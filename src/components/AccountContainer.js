import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
 
  componentDidMount() {
    fetch("http://localhost:6001/transactions")
    .then((res) => res.json())
    .then((data)=> {
      this.setState({
        transactions: data,
      });
    });
  };

  displaytransaction = (transaction) => {
    console.log(transaction)
    this.setState({
      displaytransaction: this.state.transactions, transaction
    })
  }
  render() {
    return (
      <div>
        <Search />
        <AddTransactionForm />
        <TransactionsList transactions={this.props.transactions} />
      </div>
    );
  }
}

export default AccountContainer;
