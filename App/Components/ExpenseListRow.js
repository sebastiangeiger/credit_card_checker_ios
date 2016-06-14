import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
} from 'react-native'

class ExpenseListRow extends Component {
  render(){
    let expense = this.props.expense;
    let dayOfMonth = new Date(expense.time_of_sale).getDate();
    let amountInDollars = expense.amount_in_cents/100.0;
    return (
      <View style={styles.rowContainer}>
        <Text>{dayOfMonth}.</Text>
        <Text>{expense.merchant_name}</Text>
        <Text>{expense.payment_method_name}</Text>
        <Text>${amountInDollars}</Text>
      </View>
    )
  }
}

var styles = StyleSheet.create({
  rowContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  },
});


export default ExpenseListRow
