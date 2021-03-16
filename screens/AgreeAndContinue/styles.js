import {StyleSheet, Dimensions} from 'react-native';
import {RFPercentage, RFValue} from 'react-native-responsive-fontsize';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  //============================== Screen Containers =======================
  mainContainer: {
    flex: 1,
    borderColor: 'red',
    borderWidth: 1,
  },
  headerContainer: {
    flex: 0.25,
    borderColor: 'green',
    borderWidth: 1,
  },
  bodyContainer: {
    flex: 0.5,
    borderWidth: 1,
    borderColor: '#000',
  },
  footerContainer: {
    flex: 0.25,
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'yellow',
  },
  //============================== Screen Containers Text Style =======================
  headerContainerTextStyle: {
    marginTop: windowHeight * 0.05,
    fontSize: RFPercentage(4),
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#42a5f5',
  },
  footerContainerTouchable: {
    backgroundColor: '#25D366',
    alignSelf: 'center',
    paddingLeft: 30,
    paddingRight: 30,
    borderRadius: 5,
    padding: 10,
  },
  footerContinerTextStyle: {
    fontSize: RFPercentage(3),
    color: '#fff',
  },
});

export default styles;
