import React, { Component } from 'react';
import {
  Text,
  View,
  StyleSheet,
  ListView,
} from 'react-native'

import ExpenseListRow from './ExpenseListRow'

class ExpenseList extends Component {

  constructor(props){
    super(props);
    var getSectionData = (dataBlob, sectionID) => {
      return dataBlob[sectionID];
    }
    var getRowData = (dataBlob, sectionID, rowID) => {
      return dataBlob[sectionID + ':' + rowID];
    }
    this.ds = new ListView.DataSource({
      getSectionData: getSectionData,
      getRowData: getRowData,
      rowHasChanged: (r1, r2) => r1 !== r2,
      sectionHeaderHasChanged: (s1, s2) => s1 !== s2
    })
  }

  _renderRow(expense){
    return (<ExpenseListRow expense={expense} />)
  }

  _renderSectionHeader(data, sectionId) {
    return (
      <View style={styles.sectionHeader}>
        <Text style={styles.sectionHeaderText}>{data}</Text>
      </View>
    );
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

  generateListDatasource(expenses) {
    let grouped = this.groupExpensesByMonth(expenses)
    let sectionIDs = []
    let rowIDs = []
    let blob = {}
    grouped.forEach((expenses, sectionID) => {
      sectionIDs.push(sectionID)
      blob[sectionID] = this.monthsToLabel(sectionID)
      let currentRowIds = [];
      expenses.forEach((expense, index) => {
        let compositeKey = sectionID.toString() + ":" + index.toString();
        blob[compositeKey] = expense
        currentRowIds.push(index);
      })
      rowIDs.push(currentRowIds);
    })
    return { blob: blob, sectionIDs: sectionIDs, rowIDs: rowIDs };
  }

  groupExpensesByMonth(expenses){
    let grouped = new Map();
    expenses.forEach(e => {
      let timeOfSale = new Date(e.time_of_sale);
      let bin = (timeOfSale.getFullYear() * 12) + timeOfSale.getMonth() + 1
      if(!grouped.has(bin)) {
        grouped.set(bin,[])
      }
      let values = grouped.get(bin);
      grouped.set(bin, values.concat(e));
    })
    return grouped;
  }

  monthsToLabel(months) {
    let years = Math.floor(months / 12)
    months = ((months - 1) % 12) + 1;
    let date = new Date(months.toString() + "/01/" + years.toString());
    let monthName = date.toLocaleString('en-us', { month: "long" })
    return monthName + " " + years.toString()
  }

  render(){
    let data = this.generateListDatasource(this.props.expenses);
    let dataSource = this.ds.cloneWithRowsAndSections(data.blob, data.sectionIDs, data.rowIDs);
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <ListView
            style={styles.listView}
            dataSource={dataSource}
            enableEmptySections={true}
            renderRow={this._renderRow}
            renderSeparator={this._renderSeparator}
            renderSectionHeader={this._renderSectionHeader}
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
    paddingTop: 64,
    backgroundColor: 'lightgrey',
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
  sectionHeader: {
    marginTop: 20,
    marginBottom: 5,
  },
  sectionHeaderText: {
    textAlign: 'center',
    color: 'darkgrey',
    fontWeight: 'bold',
  },
});


export default ExpenseList
