/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Main from './App/Components/Main'

class credit_card_checker_ios extends Component {
  render() {
    return (
      <Main />
    );
  }
}

AppRegistry.registerComponent('credit_card_checker_ios', () => credit_card_checker_ios);
