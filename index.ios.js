/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  NavigatorIOS,
} from 'react-native';

import Main from './App/Components/Main'

class credit_card_checker_ios extends Component {
  render() {
    return (
      <NavigatorIOS
        style={{flex: 1}}
        initialRoute={{
          component: Main,
          title: 'Credit Card Checker',
          passProps: { },
        }}
      />
    );
  }
}

AppRegistry.registerComponent('credit_card_checker_ios', () => credit_card_checker_ios);
