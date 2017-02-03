// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Launch extends Component {
  render() {
    return (
      <View style={{ margin: 128 }}>
        <Text style={{ fontSize: 20 }}>Launch Page</Text>
        <Text style={styles.pageNameText}
          onPress={Actions.login}
        >
          Login
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  pageNameText: {
    marginBottom: 20,
    marginTop: 20,
  }
});

export default Launch;
