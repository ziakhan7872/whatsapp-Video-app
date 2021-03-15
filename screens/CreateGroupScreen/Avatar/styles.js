import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  imageContainer: {
    overflow: 'hidden',
    justifyContent: 'center',
    height: '100%',
  },
  image: {
    flex: 1,
    alignSelf: 'stretch',
    width: undefined,
    height: undefined,
  },
  placeholderContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#dddddd',
    height: '100%',
  },
  placeholderText: {
    fontWeight: '700',
    color: '#ffffff',
  },
});

export default styles;
