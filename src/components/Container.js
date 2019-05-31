import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';
import { CONTAINER_BG } from '../config/colors';

export default props => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

const SCREEN_H = Dimensions.get('screen').height;
const SCREEN_W = Dimensions.get('screen').width;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONTAINER_BG,
    alignItems: 'center',
    padding: 10,
    maxHeight: SCREEN_H,
    maxWidth: SCREEN_W
  }
});
