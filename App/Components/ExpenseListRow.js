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
    let amountInDollars = (expense.amount_in_cents/100.0).toFixed(2);
    return (
      <View style={styles.rowContainer}>
        <Text style={styles.dayOfMonth}>{dayOfMonth}.</Text>
        <View style={styles.merchantAndPaymentMethod}>
          <Text>{expense.merchant_name}</Text>
          <Text>{expense.payment_method_name}</Text>
        </View>
        <Text style={styles.amount}>${amountInDollars}</Text>
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
    flexDirection: 'row',
  },
  dayOfMonth: {
    flex: 0.25,
    fontSize: 30,
    fontWeight: "100",
  },
  merchantAndPaymentMethod: {
    flex: 1,
  },
  amount: {
    flex: 0.65,
    fontSize: 30,
    fontWeight: "100",
  },
});


export default ExpenseListRow
