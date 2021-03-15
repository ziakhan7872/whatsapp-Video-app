import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    minHeight: 44,
    height: 63,
  },
  leftElementContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 13,
    flex: 2,
  },
  rightSectionContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    flexDirection: 'row',
    marginLeft: 18,
    flex: 20,
    borderColor: '#000',
  },
  mainTitleContainer: {
    justifyContent: 'center',
    flexDirection: 'column',
    flex: 1,
  },
  titleStyle: {
    fontSize: 15,
  },
});

export default styles;
