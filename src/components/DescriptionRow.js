import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { BORDER_COLOR, LABEL_COLOR, VALUE_COLOR } from '../config/colors';

export default props => (
  <View style={styles.row}>
    <View style={styles.labelView}>
      <Text style={styles.labelText}>{props.label}</Text>
    </View>
    <View style={styles.valueView}>
      <Text style={styles.valueText}>{props.value}</Text>
    </View>
  </View>
);

const styles = StyleSheet.create({
  row: {
    height: 25,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    marginBottom: 10
  },
  labelView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  valueView: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end'
  },
  labelText: {
    fontSize: 16,
    color: LABEL_COLOR
  },
  valueText: {
    fontSize: 18,
    color: VALUE_COLOR,
    fontWeight: 'bold'
  }
});
