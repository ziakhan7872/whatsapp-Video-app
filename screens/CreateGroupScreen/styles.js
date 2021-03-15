import {StyleSheet} from 'react-native';
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    backgroundColor: '#4591ed',
    color: 'white',
    paddingHorizontal: 15,
    paddingVertical: 15,
    fontSize: 20,
  },
  searchBar: {
    backgroundColor: '#f0eded',
    paddingHorizontal: 30,
    paddingVertical: 15,
  },
  rightArrowContainer: {
    width: 60,
    height: 60,
    right: 10,
    top: 450,
    borderRadius: 60,
    backgroundColor: '#25D366',
    justifyContent: 'center',
    position: 'absolute',
    alignSelf: 'flex-end',
  },
  rightArrowStyle: {
    width: 20,
    height: 20,
    alignSelf: 'center',
  },
  flatListContainer: {
    backgroundColor: '#fafafa',
    margin: 10,
    padding: 15,
    marginVertical: 5,
    borderRadius: 5,
    borderColor: '#000',
    borderWidth: 0.2,
  },
  singleContactSelected: {
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
    marginLeft: 30,
    backgroundColor: '#fafafa',
    borderWidth: 0.2,
    borderColor: '#000',
  },
});

export default styles;
