import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

class ExpenseList extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <Text>Render Expense List here</Text>
        </View>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    alignSelf: 'stretch',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});


export default ExpenseList
