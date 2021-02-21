import 'react-native-gesture-handler'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './components/Home'
import Table from './components/table'
import Detail from './components/Detail'
import Action from './components/Action'
import CreateData from './components/CreateData'

// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';


import { createStore } from 'redux'
import { Provider } from 'react-redux'

import rootReducer from './redux/reducers'

const store=createStore(rootReducer);

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

const TableStack = createStackNavigator();
const ListStackScreen = () => {
  return (
    <TableStack.Navigator>
      <TableStack.Screen name="Table" component={Table} options={{ title: "Table", headerTitleAlign: "center" }} />
      <TableStack.Screen name="Detail" component={Detail} options={{ title: "Detail", headerTitleAlign: "center" }} />
    </TableStack.Navigator>
  )
}

const ActionStack = createStackNavigator();
const ActionStackScreen = () => {
  return (
    <ActionStack.Navigator>
      <ActionStack.Screen name="Action" component={Action} options={{title:"Action", headerTitleAlign:"center"}} />
      <ActionStack.Screen name="Detail" component={Detail} options={{title:"Detail", headerTitleAlign:"center"}}  />
    </ActionStack.Navigator>
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
      case 'Actions':
        iconName = focused
          ? 'checkmark'
          : 'checkmark-outline';
        break;
    }

    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function App() {

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={HomeStackScreen} />
            <Tab.Screen name="List" component={ListStackScreen}/>
            <Tab.Screen name="Actions" component={ActionStackScreen}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </Provider>
  );
}
