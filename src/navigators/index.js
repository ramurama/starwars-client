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
    navigationOptions: {
      title: 'Vehicle Details'
    }
  }
});

export default createAppContainer(mainNaVigator);
