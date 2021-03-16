import styles from './styles';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';

export default class index extends Component {
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerTextStyle}> Video App</Text>
        </View>
        <View style={styles.bodyContainer}></View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('AddContactNumber')}
            style={styles.footerContainerTouchable}>
            <Text style={styles.footerContinerTextStyle}>
              AGREE AND CONTINUE
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
