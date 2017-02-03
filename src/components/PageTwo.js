// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class PageOne extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default PageOne;
