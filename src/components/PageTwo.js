// @flow
import React, { Component } from 'react';
import {
  View,
  Text
} from 'react-native';
import { Actions } from 'react-native-router-flux';

type Props = {

};

class PageOne extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text>Page Two</Text>
      </View>
    );
  }
}

export default PageOne;
