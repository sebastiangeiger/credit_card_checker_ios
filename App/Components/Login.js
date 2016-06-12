import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  StyleSheet,
  TouchableHighlight,
} from 'react-native'

class Login extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View style={styles.mainContainer}>
        <View style={styles.container}>
          <View style={styles.formContainer}>
            <TextInput style={styles.email} placeholder="Email"
              autofocus="true" />
            <View style={styles.separator} />
            <TextInput style={styles.password} placeholder="Password"
              secureTextEntry="true"/>
          </View>
          <TouchableHighlight
            style={styles.button}
            onPress={this.handleSubmit}
            underlayColor="white">
              <Text style={styles.buttonText}>Login</Text>
          </TouchableHighlight>
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
  formContainer: {
    height: 100,
    alignSelf: 'stretch',
    borderWidth: 1,
    borderColor: 'black',
    borderRadius: 8,
    color: 'black',
  },
  separator: {
    height: 1,
    marginRight: 5,
    marginLeft: 5,
    borderWidth: 0.15,
    borderColor: 'black',
  },
  email: {
    flex: 0.5,
    padding: 4,
    marginRight: 5,
  },
  password: {
    flex: 0.5,
    padding: 4,
    marginRight: 5,
  },
  button: {
    height: 45,
    flexDirection: 'row',
    backgroundColor: 'darkgrey',
    borderColor: 'lightgrey',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    marginTop: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  rowContainer: {
    padding: 10
  },
  rowTitle: {
    color: '#48BBEC',
    fontSize: 16
  },
  rowContent: {
    fontSize: 19
  }
});


export default Login
