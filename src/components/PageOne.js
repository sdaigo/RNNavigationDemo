// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PageOne extends Component {
  handleOnPress() {
    Actions.pageTwo({
      text: 'Hello World!'
    });
  }

  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text onPress={this.handleOnPress}>Page One</Text>
      </View>
    );
  }
}

export default PageOne;
