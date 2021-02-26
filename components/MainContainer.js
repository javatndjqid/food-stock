import 'react-native-gesture-handler'

import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import { Alert } from 'react-native'

import Home from './HomeContainer'
import Table from './tableContainer'
import Detail from './Detail'
import Check from './Check'
import CreateData from './CreateData'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useDispatch } from 'react-redux';

import messaging from '@react-native-firebase/messaging';

const Tab = createBottomTabNavigator();

const HomeStack = createStackNavigator();
const HomeStackScreen = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={Home} options={{ title: "Home", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="Detail" component={Detail} options={{ title: "Detail", headerTitleAlign: "center" }} />
      <HomeStack.Screen name="CreateData" component={CreateData} options={{ title: "CreateData", headerTitleAlign: "center" }} />
    </HomeStack.Navigator>
  )
}

const CheckStack = createStackNavigator();
const CheckStackScreen = () => {
  return (
    <CheckStack.Navigator>
      <CheckStack.Screen name="Check" component={Check} options={{title:"Check", headerTitleAlign:"center"}} />
      <CheckStack.Screen name="Detail" component={Detail} options={{title:"Detail", headerTitleAlign:"center"}}  />
    </CheckStack.Navigator>
  )
}

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = focused
          ? 'home'
          : 'home-outline';
        break;
      case 'List':
        iconName = focused
          ? 'list'
          : 'list-outline';
        break;
      case 'Check':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline';
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function App() {
  const dispatch = useDispatch();
  useEffect(()=>{
    console.log('-- MainMounted --')
    dispatch({type:"FETCH_TASKS"})
    
    messaging().getToken()
    .then(token => {
      console.log("--token--");
      console.log(token);
    }); 

    const unsubscribe = messaging().onMessage(async remoteMessage => {
      Alert.alert('A new FCM message arrived!', JSON.stringify(remoteMessage));
    });

    return unsubscribe;
  },[])

  return (    
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={Table}/>
            <Tab.Screen name="Check" component={CheckStackScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>    
  );
}
