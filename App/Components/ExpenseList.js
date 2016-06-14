import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
} from 'react-native'

class ExpenseList extends Component {
  constructor(props){
    super(props);
  }

  renderRow(expense){
    return (
      <View style={styles.rowContainer}>
        <Text>{expense.merchant_name}</Text>
        <Text>{expense.time_of_sale}</Text>
        <Text>{expense.payment_method_name}</Text>
      </View>
    )
  }

  render(){
    let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    let dataSource = ds.cloneWithRows(this.props.expenses);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ListView
            style={styles.listView}
            dataSource={dataSource}
            enableEmptySections={true}
            renderRow={this.renderRow}
            />
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
    marginTop: 50,
  },
  rowContainer: {
    flex: 1,
    borderTopWidth: 1,
    borderColor: 'lightgrey',
    alignSelf: 'stretch',
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  }
});


export default ExpenseList
