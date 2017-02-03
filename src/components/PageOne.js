// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PageOne extends Component {
  render() {
    console.log('hello page one');
    return (
      <View style={{ margin: 128 }}>
        <Text onPress={Actions.pageTwo}>Page One</Text>
      </View>
    );
  }
}

export default PageOne;
