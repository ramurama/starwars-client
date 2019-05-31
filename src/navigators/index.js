import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';
import Main from '../screens/Main';
import Vehicle from '../screens/Vehicle';

const mainNaVigator = createStackNavigator({
  main: {
    screen: Main,
    navigationOptions: {
      title: 'Star Vehicles'
    }
  },
  vehicle: {
    screen: Vehicle,
    navigationOptions: ({ navigation }) => ({
      title: `${navigation.state.params.title}`
    })
  }
});

export default createAppContainer(mainNaVigator);
