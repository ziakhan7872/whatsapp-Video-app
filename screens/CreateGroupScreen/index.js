import styles from './styles';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const index = ({navigation}) => {
  let [data, setData] = useState([]);
  const [listcontact, setListcontact] = useState([]);
  let [myArray, setMyArray] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  //===========================Search Contacts form list================
  const search = (text) => {
    const phoneNumberRegex = /\b[\+]?[(]?[0-9]{2,6}[)]?[-\s\.]?[-\s\/\.0-9]{3,15}\b/m;
    alert('working');
  };

  //================================ For Get data from DB================
  const getData = () => {
    fetch('http://192.168.18.36:8042/AllGroups')
      .then((response) => response.json())
      .then((responseJson) => {
        setData(responseJson);
      });
  };
  //============================= Push contact no into array=============
  const getContactFromList = (item) => {
    var getcontact = listcontact.concat(item);
    setMyArray(getcontact);
  };

  //=============================createGroupName========================
  const createGroupName = () => {
    {
      myArray == false
        ? alert('Please Select one value')
        : navigation.navigate('CreateGroupNameScreen', {
            otherParam: myArray,
          });
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <TextInput
          onChangeText={search}
          placeholder="Search"
          style={styles.searchBar}
        />
        {myArray == false ? null : (
          <View style={styles.singleContactSelected}>
            <Text>{myArray[0].contact_name}</Text>
          </View>
        )}
        <FlatList
          data={data}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({item}) => (
            <View style={styles.flatListContainer}>
              <TouchableOpacity onPress={() => getContactFromList(item)}>
                <Text style={styles.title}>{item.contact_name}</Text>
                <Text style={styles.title}>{item.contact_number}</Text>
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
      <TouchableOpacity
        onPress={() => createGroupName()}
        //  onPress={() => navigation.navigate('CreateGroupNameScreen')}
        style={styles.rightArrowContainer}>
        <Image
          source={require('../ScreenIcons/right-arrow.png')}
          style={styles.rightArrowStyle}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
};
export default index;
