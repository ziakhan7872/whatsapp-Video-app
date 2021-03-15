import styles from './styles';
import React, {Component} from 'react';
import {Text, View, TextInput, Image, TouchableOpacity} from 'react-native';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: '',
      otherParam: props.route.params.otherParam,
    };
  }

  componentDidMount() {
    // console.log('this.props.otherParam', this.state.otherParam);
  }
  handlePostData = () => {
    console.log('this.state.text', this.state.text);
    console.log('this.state.otherParam', this.state.otherParam);
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.innerContainer}>
          <View style={styles.groupImageContainer}>
            <TouchableOpacity style={styles.imageContainerView}>
              <Image
                source={require('../ScreenIcons/default-user-image.png')}
                style={styles.defaultIconContainer}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.textInputContainer}>
            <TextInput
              style={{
                height: 40,
                borderBottomWidth: 2,
                borderBottomColor: '#075E54',
              }}
              placeholder="Type group subject here..."
              onChangeText={(text) => this.setState({text})}
              value={this.state.text}
            />
          </View>
          <View style={styles.groupImogiContainer}>
            <TouchableOpacity>
              <Image
                source={require('../ScreenIcons/smile.png')}
                style={styles.emojiContainer}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.groupTextContainer}>
          <Text style={styles.groupTextStyle}>
            Provide a group subject and optional group icon
          </Text>
        </View>
        <View style={styles.checkedIconContainer}>
          <TouchableOpacity onPress={() => this.handlePostData()}>
            <Image
              source={require('../ScreenIcons/checked.png')}
              style={styles.checkedIconStyle}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
