import React, { Component } from "react";
import TransactionsList from "./TransactionsList";
import Search from "./Search";
import Sort from "./Sort";
import AddTransactionForm from "./AddTransactionForm";

class AccountContainer extends Component {
  render() {
    return (
      <div>
        <Search handleSearch={this.props.handleSearch}/>
        <AddTransactionForm addTransaction={this.props.addTransaction}/>
        <Sort sort={this.props.sort} handleSort={this.props.handleSort}/>
        <TransactionsList transactions={this.props.transactions} deleteT={this.props.deleteT}/>
      </div>
    );
  }
}

export default AccountContainer;
