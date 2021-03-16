import styles from './styles';
import React, {Component} from 'react';
import {Picker} from '@react-native-picker/picker';
import auth from '@react-native-firebase/auth';

import {Text, View, TouchableOpacity, Alert, TextInput} from 'react-native';

export default class index extends Component {
  state = {
    selectedCountry: '',
    countryCode: '+92',
    contactNumber: '',
    number: '',
    verificationCode: '',
    confirmResult: null,
    userId: '',
  };
  signInWithPhoneNumber = async ({navigation}) => {
    // alert(this.state.number);

    const {number} = this.state;
    const result = this.state.countryCode + number;
    // alert(result);
    const confirmation = await auth().signInWithPhoneNumber(result);
    if (confirmation._auth._authResult) {
      navigation.navigate('PasswordScreen', {
        confirmation: confirmation,
        number: this.state.number,
      });
    } else {
      alert('Internal error');
    }
    // console.log(`confirmation==========================>`, confirmation);
  };

  onPickerValueChange = (value, index) => {
    this.setState(
      {
        selectedCountry: value,
      },
      () => {
        console.log('selected Country ', this.state.selectedCountry);
      },
    );
  };
  onSelectedCountryCode = (value, index) => {
    this.setState(
      {
        countryCode: value,
      },
      () => {
        console.log('country Code', this.state.countryCode);
      },
    );
  };
  render() {
    const {navigation} = this.props;
    return (
      <View style={styles.mainContainer}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerTextStyle}>
            Verify Your Phone Number
          </Text>
        </View>
        <View style={styles.bodyContainer}>
          <View style={styles.bodyContainerTextView}>
            <Text style={styles.bodyContainerTextStyle}>
              Video app will send an sms message to verify your phone number.
            </Text>
            <Text style={styles.bodyContainerTextStyle}>
              Enter your country code and phone number.
            </Text>
          </View>
          <View style={styles.contactNumberContainer}>
            <View style={styles.contactNumberPickerStyle}>
              <Picker
                selectedValue={this.state.selectedCountry}
                onValueChange={this.onPickerValueChange}>
                <Picker.Item label="Pakistan" value="Pakistan" />
                <Picker.Item label="Afghanistan" value="Afghanistan" />
                <Picker.Item label="Albania" value="Albania" />
              </Picker>
            </View>
            <View style={styles.contactNumberPickerBottomLine}></View>

            <View style={styles.contactNumberWithCountryCode}>
              <View style={styles.countryCodePickerStyle}>
                <Picker
                  selectedValue={this.state.countryCode}
                  onValueChange={this.onSelectedCountryCode}>
                  <Picker.Item label="+92" value="+92" />
                  <Picker.Item label="+97" value="+97" />
                  <Picker.Item label="+91" value="+91" />
                </Picker>
              </View>
              <View style={styles.contactNumberTextInputStyle}>
                <TextInput
                  style={{height: 50, fontSize: 16}}
                  keyboardType="number-pad"
                  maxLength={10}
                  onChangeText={(number) => this.setState({number})}
                  //value={this.state.code}
                />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.footerContainer}>
          <TouchableOpacity
            onPress={() => this.signInWithPhoneNumber({navigation})}
            // onPress={() => navigation.navigate('TabStack')}
            style={styles.footerContainerTouchable}>
            <Text>NEXT</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
