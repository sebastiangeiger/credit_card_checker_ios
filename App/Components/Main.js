import React, { Component } from 'react';
import {
  AsyncStorage,
} from 'react-native'

import Login from "./Login"
import ExpenseList from "./ExpenseList"
import Api from "../Api"

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken: null,
      expenses: [],
    }
    this.setAuthToken = this.setAuthToken.bind(this);
    this.getExpenses = this.getExpenses.bind(this);
    this.readAuthTokenFromStorage()
  }

  readAuthTokenFromStorage(){
    AsyncStorage.getItem('authToken')
      .then(authToken => {
        if(authToken !== null) {
          this.setState({authToken: authToken}, this.readExpensesFromStorageAndUpdate);
        }
      })
  }

  setAuthToken(authToken){
    this.setState({authToken: authToken}, () => {
      this.getExpenses();
      AsyncStorage.setItem('authToken', authToken)
    })
  }

  readExpensesFromStorageAndUpdate(){
    if(this.state.authToken !== null){
      AsyncStorage.getItem('expenses')
        .then((expenses) => this.setState({expenses: JSON.parse(expenses)}, this.getExpenses))
    }
  }

  setExpenses(expenses){
    this.setState({expenses: expenses})
    AsyncStorage.setItem('expenses', JSON.stringify(expenses));
  }

  getExpenses(){
    console.log("getExpenses");
    if(this.state.authToken !== null){
      let api = new Api(this.state.authToken);
      api.getExpenses().then((res) =>{
        res.json().then((json) => {
          this.setExpenses(json["expenses"]);
        });
      })
    }
  }

  render(){
    if(this.state.authToken == null){
      return <Login onAuthentication={this.setAuthToken} api={new Api()} />
    } else {
      return <ExpenseList expenses={this.state.expenses}/>
    }
  }
}

export default Main
