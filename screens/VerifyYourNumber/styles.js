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
    flex: 0.1,
  },
  bodyContainer: {
    flex: 0.7,
  },
  footerContainer: {
    flex: 0.2,
    justifyContent: 'center',
  },
  //============================= Screen Container Text Style====================
  headerContainerTextStyle: {
    alignSelf: 'center',
    marginTop: windowHeight * 0.03,
    color: '#42a5f5',
    fontSize: RFPercentage(3),
    fontWeight: 'bold',
  },
  footerContainerTouchable: {
    alignSelf: 'center',
    backgroundColor: '#25D366',
    padding: 10,
    borderRadius: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
  bodyContainerTextView: {
    flex: 0.3,
  },
  contactNumberContainer: {
    flex: 0.7,
  },
  bodyContainerTextStyle: {
    textAlign: 'center',
    marginHorizontal: windowWidth * 0.1,
  },
  contactNumberPickerStyle: {
    width: windowWidth * 0.6,
    marginLeft: 120,
  },
  contactNumberPickerBottomLine: {
    borderBottomColor: 'green',
    borderBottomWidth: 2,
    marginHorizontal: windowWidth * 0.1,
  },
  contactNumberWithCountryCode: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  countryCodePickerStyle: {
    width: 70,
    marginLeft: 30,
    borderBottomWidth: 2,
    borderBottomColor: 'green',
  },
  contactNumberTextInputStyle: {
    justifyContent: 'center',
    width: 220,
    borderBottomWidth: 2,
    borderBottomColor: 'green',
    marginLeft: 10,
    marginRight: 40,
  },
});

export default styles;
