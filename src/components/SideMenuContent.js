import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class SideMenuContent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.upper}>
          <TouchableOpacity
            onPress={() => { Actions.refresh({key: 'sidemenu', open: value => !value }); }}>
            <Text>Close</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.content}>
          <Text>SideMenuContent</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(43, 171, 238)',
    paddingTop: 35,
    paddingLeft: 16,
    paddingRight: 16,
    paddingBottom: 26
  },
  upper: {
    flex: 1.8
  },
  content: {
    flex: 7
  }
});

export default SideMenuContent;
