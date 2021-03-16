import styles from './styles';
import React, {Component} from 'react';
import {Text, View, TouchableOpacity, TextInput} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verifynumber: '',
      confirmation: props.route.params.confirmation,
      number: props.route.params.number,
    };
  }

  confirmCode = async ({navigation}) => {
    const {confirmation, verifynumber} = this.state;
    try {
      await confirmation.confirm(verifynumber);
      navigation.navigate('TabStack');
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerTextStyle}>
            PLEASE ENTER YOUR CODE
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <TextInput
            style={styles.textInputStyle}
            keyboardType="number-pad"
            onChangeText={(verifynumber) => this.setState({verifynumber})}
          />
          <View style={styles.footerContainer}>
            <TouchableOpacity
              onPress={() => this.confirmCode({navigation})}
              style={styles.footerContainerTouchable}>
              <Text>NEXT</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}
