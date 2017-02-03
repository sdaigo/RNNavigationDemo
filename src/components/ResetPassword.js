// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class ResetPassword extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>Reset Password</Text>
      </View>
    );
  }
}

export default ResetPassword;
