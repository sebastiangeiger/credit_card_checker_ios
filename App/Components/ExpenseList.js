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

  _renderRow(expense){
    return (
      <View style={styles.rowContainer}>
        <Text>{expense.merchant_name}</Text>
        <Text>{expense.time_of_sale.toString()}</Text>
        <Text>{expense.payment_method_name}</Text>
        <Text>{expense.amount_in_cents}</Text>
      </View>
    )
  }

  _renderSeparator(sectionID, rowID, adjacentRowHighlighted) {
    var style = styles.rowSeparator;
    if (adjacentRowHighlighted) {
        style = [style, styles.rowSeparatorHide];
    }
    return (
      <View key={"SEP_" + sectionID + "_" + rowID}  style={style}/>
    );
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
            renderRow={this._renderRow}
            renderSeparator={this._renderSeparator}
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
    paddingTop: 74,
    backgroundColor: 'lightgrey',
  },
  rowContainer: {
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: 'white',
    padding: 10,
  },
  listView: {
    flex: 1,
    alignSelf: 'stretch',
  },
  rowSeparator: {
    backgroundColor: 'lightgrey',
    height: 0.5,
  },
  rowSeparatorHide: {
    opacity: 0.0,
  },
});


export default ExpenseList
