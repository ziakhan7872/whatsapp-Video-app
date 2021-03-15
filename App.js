import 'react-native-gesture-handler';
import React, {useState} from 'react';
import {
  StatusBar,
  Modal,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import GroupScreens from './screens/GroupScreens/index';
import VideoScreens from './screens/VideoScreens/index';
import CreateGroupScreen from './screens/CreateGroupScreen/index';
import SettingsScreen from './screens/SettingsScreen/index';
import CreateGroupNameScreen from './screens/CreateGroupNameScreen/index';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';

const Stack = createStackNavigator();
const Tab = createMaterialTopTabNavigator();

function TabStack() {
  return (
    <Tab.Navigator
      initialRouteName="GroupScreens"
      tabBarOptions={{
        activeTintColor: '#FFFFFF',
        inactiveTintColor: '#F8F8F8',
        style: {
          backgroundColor: '#075E54',
        },
        labelStyle: {
          textAlign: 'center',
        },
        indicatorStyle: {
          borderBottomColor: '#fafafa',
          borderBottomWidth: 2,
          width: 100,
          marginLeft: 40,
        },
      }}>
      <Tab.Screen
        name="GroupScreens"
        component={GroupScreens}
        options={{
          tabBarLabel: 'Groups',
        }}
      />
      <Tab.Screen
        name="VideoScreens"
        component={VideoScreens}
        options={{
          tabBarLabel: 'Videos',
        }}
      />
    </Tab.Navigator>
  );
}

function App({navigation}) {
  //console.log('navigation hai', navigation);
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <StatusBar animated={true} backgroundColor="#075E54" hidden={false} />

      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {backgroundColor: '#075E54'},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold'},
          }}>
          <Stack.Screen
            name="TabStack"
            component={TabStack}
            options={({navigation}) => ({
              title: 'Video App',
              headerRight: () => (
                <View style={styles.modelContainerView}>
                  <Modal
                    animationType="fade"
                    transparent={true}
                    visible={modalVisible}
                    onRequestClose={() => {
                      setModalVisible(!modalVisible);
                    }}>
                    <View
                      style={styles.modalView}
                      onPress={() => {
                        setModalVisible(!modalVisible);
                      }}>
                      <TouchableOpacity
                        style={styles.closeButtonContainer}
                        onPress={() => setModalVisible(!modalVisible)}>
                        <Image
                          source={require('./screens/ScreenIcons/cancel.png')}
                          style={styles.crossIconStyle}
                        />
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('CreateGroupScreen'),
                            setModalVisible(!modalVisible);
                        }}>
                        <Text>Create Group</Text>
                      </TouchableOpacity>
                      <TouchableOpacity
                        onPress={() => {
                          navigation.navigate('SettingsScreen'),
                            setModalVisible(!modalVisible);
                        }}
                        style={styles.settingsScreenContainer}>
                        <Text>Settings</Text>
                      </TouchableOpacity>
                    </View>
                  </Modal>
                  <TouchableWithoutFeedback
                    onPress={() => setModalVisible(true)}
                    style={styles.iconStyleContainer}>
                    <Image
                      source={require('./screens/ScreenIcons/menu.png')}
                      style={styles.rightIconStyle}
                    />
                  </TouchableWithoutFeedback>
                </View>
              ),
            })}
          />

          <Stack.Screen
            name="CreateGroupScreen"
            component={CreateGroupScreen}
            options={{
              title: (
                <View style={styles.createGroupContainer}>
                  <Text style={styles.createGroupStyle}>Create Group</Text>
                  <Text style={styles.addParticipantsStyle}>
                    Add participants
                  </Text>
                </View>
              ),
              headerStyle: {
                backgroundColor: '#075E54',
              },
              headerTitleStyle: {
                fontSize: 18,
              },
            }}
          />
          <Stack.Screen
            name="SettingsScreen"
            component={SettingsScreen}
            options={{
              title: 'Settings',
              headerTitleStyle: {
                fontSize: 16,
              },
            }}
          />
          <Stack.Screen
            name="CreateGroupNameScreen"
            component={CreateGroupNameScreen}
            options={{
              title: (
                <View style={styles.createGroupContainer}>
                  <Text style={styles.createGroupStyle}>New Group</Text>
                  <Text style={styles.addParticipantsStyle}>
                    Add participants
                  </Text>
                </View>
              ),
              headerTitleStyle: {
                fontSize: 16,
              },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  modelContainerView: {
    flex: 1,
  },
  modalView: {
    flex: 0.2,
    backgroundColor: 'white',
    alignSelf: 'flex-end',
    borderRadius: 3,
    padding: 40,
    marginRight: 3,
  },

  closeButtonContainer: {
    position: 'absolute',
    alignSelf: 'flex-end',
    marginTop: 5,
    right: 5,
  },
  closeButtontextStyle: {
    color: 'red',
    alignSelf: 'flex-end',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  iconStyleContainer: {
    width: 100,
    flex: 1,
  },
  rightIconStyle: {
    width: 20,
    height: 20,
    right: 10,
    top: 10,
  },
  settingsScreenContainer: {
    marginTop: 20,
  },
  createGroupContainer: {
    // borderWidth: 2,
    // borderColor: 'red',
  },
  createGroupStyle: {
    fontSize: 18,
    color: '#fff',
  },
  addParticipantsStyle: {
    fontSize: 12,
    color: '#fff',
    textAlign: 'center',
  },
  searchButtonContainer: {
    //alignSelf: 'flex-end',
  },
  crossIconStyle: {
    width: 15,
    height: 15,
  },
});

export default App;
