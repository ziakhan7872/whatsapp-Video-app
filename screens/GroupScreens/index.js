import styles from './styles';
import React, {Component} from 'react';
import {FlatList, View, Text} from 'react-native';

export default class index extends Component {
  state = {
    Data: [
      {
        id: '1',
        title: 'Group 1',
      },
      {
        id: '2',
        title: 'Group 2',
      },
      {
        id: '3',
        title: 'Group 3',
      },
      {
        id: '4',
        title: 'Group 4',
      },
      {
        id: '5',
        title: 'Group 5',
      },
      {
        id: '6',
        title: 'Group 6',
      },
      {
        id: '7',
        title: 'Group 7',
      },
      {
        id: '8',
        title: 'Group 8',
      },
      {
        id: '9',
        title: 'Group 9',
      },
      {
        id: '10',
        title: 'Group 10',
      },
    ],
  };
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={styles.FlatListContainer}>
          <FlatList
            data={this.state.Data}
            renderItem={({item, index}) => (
              <View style={styles.vedioListContainer}>
                <Text style={styles.vedioContainerList}>{item.title}</Text>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}
