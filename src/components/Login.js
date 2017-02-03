// @flow
import React, { Component } from 'react';
import {
  View,
  Text,
  TouchableOpacity
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Login extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>Login page</Text>

        <TouchableOpacity
          style={{ marginTop: 50 }}
          onPress={Actions.resetPassword}>
          <Text>Forgot Password</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Login;
