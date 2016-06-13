import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native'

import Login from "./Login"
import ExpenseList from "./ExpenseList"
import api from "../Api"

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      authToken: null
    }
    this.setAuthToken = this.setAuthToken.bind(this);
  }

  setAuthToken(authToken){
    this.setState({authToken: authToken});
  }

  render(){
    if(this.state.authToken == null){
      return <Login onAuthentication={this.setAuthToken} api={api} />
    } else {
      return <ExpenseList />
    }
  }
}

export default Main
