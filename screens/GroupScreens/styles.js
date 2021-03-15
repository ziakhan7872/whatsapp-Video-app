import {StyleSheet, Dimensions} from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  FlatListContainer: {
    width: Width,
    flex: 1,
  },
  vedioListContainer: {
    borderColor: '#000',
    borderWidth: 0.2,
    height: Height * 0.1,
  },
  vedioContainerList: {
    marginLeft: 5,
    marginTop: Height * 0.04,
  },
});

export default styles;
