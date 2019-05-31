import React from 'react';
import { View, StyleSheet } from 'react-native';
import { CONTAINER_BG } from '../config/colors';

export default props => (
  <View style={[styles.container, props.style]}>{props.children}</View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CONTAINER_BG,
    alignItems: 'center',
    padding: 10
  }
});
