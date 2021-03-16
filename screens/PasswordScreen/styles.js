import {StyleSheet, Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
  //============================== Screens Container ===================
  mainContainer: {
    flex: 1,
  },

  headerContainer: {
    flex: 0.4,
    justifyContent: 'center',
  },
  bodyContainer: {
    flex: 0.3,
  },
  footerContainer: {
    // flex: 0.3,
    marginTop: 30,
    justifyContent: 'center',
  },

  //============================= Screen Container Text Style====================
  textInputStyle: {
    padding: 15,
    fontSize: 16,
    borderColor: 'green',
    borderWidth: 1,
    marginHorizontal: 20,
    borderRadius: 10,
  },
  headerContainerTextStyle: {
    alignSelf: 'center',
    fontSize: RFPercentage(3),
    color: '#039be5',
  },
  footerContainerTouchable: {
    alignSelf: 'center',
    backgroundColor: 'green',
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
  },
});

export default styles;
