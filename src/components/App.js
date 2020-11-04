import React, { Component } from "react";
import AccountContainer from "./AccountContainer";
import "../stylesheets/App.css";

class App extends Component {
  state = {
    transactions: [],
    transaction: ""
  }
  //set state with array to hold all objects
  //transaction key will be used in search bar later
  //componentdidMount 
  //fetch request (GET)
  //use fetch to update
  componentDidMount(){
  let bankURL = 'http://localhost:6001/transactions'
    fetch(bankURL)
    .then(res => res.json())
    .then(bankData => {
      this.setState({
        transactions: bankData
      })
    })
    console.log("this is a test")
  }

  render() {
    return (
      <div className="ui raised segment">
        <div className="ui segment violet inverted">
          <h2>The Royal Bank of Flatiron</h2>
        </div>
        <AccountContainer allTransactions = {this.state.transactions}/>
      </div>
      //need to pass props through account container
      //so that it can be render in the transactions list
      //setting a semantic variable is helpful for easy access to the props later
    );
  }
}

export default App;
