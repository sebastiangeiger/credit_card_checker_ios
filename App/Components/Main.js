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
        if(authToken !== null) { this.setState({authToken: authToken}) }
        })
      .then(this.getExpenses)
  }

  setAuthToken(authToken){
    this.setState({authToken: authToken}, () => {
      this.getExpenses();
      AsyncStorage.setItem('authToken', authToken)
    })
  }

  getExpenses(){
    if(this.state.authToken !== null){
      let api = new Api(this.state.authToken);
      api.getExpenses().then((res) =>{
        res.json().then((json) => {
          this.setState({expenses: json["expenses"]})
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
