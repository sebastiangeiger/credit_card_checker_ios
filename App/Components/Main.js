import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native'

import Login from "./Login"

class Main extends Component {
  constructor(props){
    super(props);
    this.setAuthToken = this.setAuthToken.bind(this);
  }

  setAuthToken(authToken){
    console.log("Auth token set:", authToken);
  }

  render(){
    return (
      <Login onAuthentication={this.setAuthToken} />
    )
  }
}

export default Main
