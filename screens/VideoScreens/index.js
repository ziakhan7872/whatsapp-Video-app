import React, {Component} from 'react';
import {Text, View} from 'react-native';
import ListView from './ListView/index';

export default class index extends Component {
  render() {
    return (
      <View style={{flex: 1}}>
        <ListView />
      </View>
    );
  }
}
