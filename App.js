import 'react-native-gesture-handler'

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { createStackNavigator } from '@react-navigation/stack'

import { SafeAreaProvider } from 'react-native-safe-area-context'

import Home from './components/Home'
import table from './components/table'
// import Details from './components/Details'
import Action from './components/Action'


// https://ionicons.com/
import Ionicons from 'react-native-vector-icons/Ionicons';


// import { createStore } from 'redux'
// import { Provider } from 'react-redux'

// import rootReducer from './redux/reducers'

// const store=createStore(rootReducer);

const Tab = createBottomTabNavigator();

const tabBarOptions = {
  activeTintColor: 'tomato',
  inactiveTintColor: 'gray',
}

const screenOptions = ({ route }) => ({
  tabBarIcon: ({ focused, color, size }) => {
    let iconName;

    switch (route.name) {
      // focus가 있으면 'home', 'home-outline'
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

    // You can return any component that you like here!
    return <Ionicons name={iconName} size={size} color={color} />;
  },
})

export default function App() {

  return (
    // <Provider store={store}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Tab.Navigator screenOptions={screenOptions} tabBarOptions={tabBarOptions}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="List" component={table}/>
            <Tab.Screen name="Actions" component={Action}/>
          </Tab.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    // </Provider>
  );
}
