import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  innerContainer: {
    flexDirection: 'row',
    backgroundColor: '#fafafa',
  },
  groupImageContainer: {
    flex: 0.2,
  },
  textInputContainer: {
    flex: 0.7,
  },
  groupImogiContainer: {
    flex: 0.1,
  },
  imageContainerView: {
    top: 5,
    width: 70,
    height: 70,
    borderRadius: 60,
  },
  defaultIconContainer: {
    width: 60,
    height: 60,
    borderRadius: 60,
    justifyContent: 'center',
  },
  emojiContainer: {
    width: 20,
    height: 20,
    marginTop: 10,
    justifyContent: 'center',
  },
  groupTextContainer: {
    width: Width,
    height: 50,
    backgroundColor: '#fafafa',
  },
  groupTextStyle: {
    color: '#bdbdbd',
    marginLeft: 40,
  },
  checkedIconContainer: {
    right: 10,
    width: 60,
    height: 60,
    borderRadius: 60,
    alignSelf: 'flex-end',
    justifyContent: 'center',
    backgroundColor: '#25D366',
    zIndex: 2,
  },
  checkedIconStyle: {
    width: 20,
    height: 20,
    zIndex: 2,
    alignItems: 'center',
    alignSelf: 'center',
  },
});

export default styles;
