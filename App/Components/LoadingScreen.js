import React, { Component } from 'react';
import {
  View,
  StyleSheet,
  ActivityIndicatorIOS,
} from 'react-native'

class LoadingScreen extends Component {
  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
        <ActivityIndicatorIOS
          animating={true}
          color="#111"
          size="large" />
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


export default LoadingScreen
