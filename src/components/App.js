import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";


const payUrl = 'http://localhost:6001/transactions'
class App extends Component {

  state={
    transactions: [],
    searchTerm: ''
  }

  componentDidMount(){
    fetch(payUrl)
    .then(res=>res.json())
    .then(transactions => this.setState({
      transactions
    }))
  }

  handleSearch=(search)=>{
    let searchTerm = search.toLowerCase()
    this.setState({
      searchTerm: searchTerm
    })
    this.filterTransaction()
  }

  filterTransaction=() =>{
    let filterTransaction=this.state.transactions.filter(trans=>{
      trans.description.toLowerCase().includes(this.state.searchTerm)
    })
    this.setState({transactions: filterTransaction})
  }

  //Make the Search Term a state
  //filter people and set all transactions to the new filtered state


  addTransaction =(transaction)=>{
    fetch(payUrl,{
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(transaction)
    }).then(res=>res.json())
    .then(newTrans => {
      let transactions = [...this.state.transactions, newTrans]
      this.setState({transactions})
    })
  }
  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer handleSearch={this.handleSearch} addTransaction={this.addTransaction} transactions={this.state.transactions} />
      </div>
    );
  }
}

export default App;
