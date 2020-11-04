import React, { Component } from 'react';
import TransactionsList from './TransactionsList';
import Search from './Search';
import AddTransactionForm from './AddTransactionForm';

class AccountContainer extends Component {
  state = {
    transactions: [],
    searchTerm: '',
    checked: ''
  };

  componentDidMount() {
    fetch('http://localhost:6001/transactions')
      .then(res => res.json())
      .then(transactions => {
        // console.log(transactions);
        this.setState({ transactions });
      });
  }

  addNewTransaction = newTransaction => {
    // console.log('InaddNEw', newTransaction);
    fetch('http://localhost:6001/transactions', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(newTransaction)
    })
      .then(res => res.json())
      .then(transactionObj => {
        // console.log('Res from server', transactionObj);
        this.setState({
          transactions: [...this.state.transactions, transactionObj]
        });
      });
  };

  handleSearch = term => {
    let searchTerm = term.toLowerCase();
    this.setState({ searchTerm });
  };

  handleCheck = e => {
    let check = e.target.value;
    switch (check) {
      case 'Category':
        return this.setState({ checked: 'Category' });

      case 'Description':
        return this.setState({ checked: 'Description' });
      default:
        return this.state.transactions;
    }
  };

  sortTransactions = () => {
    let sort = this.state.checked;
    switch (sort) {
      case 'Category':
        return this.state.transactions.sort((a, b) => {
          return a.category.localeCompare(b.category);
        });
      case 'Description':
        return this.state.transactions.sort((a, b) => {
          return a.description.localeCompare(b.description);
        });
      default:
        return this.state.transactions;
    }
  };
  render() {
    // let sorted = this.state.transactions.sortTransactions().filter(transaction => )
    let searched = this.state.transactions.filter(transaction =>
      transaction.description.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <div>
        <Search
          handleSearch={this.handleSearch}
          handleCheck={this.handleCheck}
        />
        <AddTransactionForm addNewTransaction={this.addNewTransaction} />
        <TransactionsList transactions={searched} />
      </div>
    );
  }
}

export default AccountContainer;
