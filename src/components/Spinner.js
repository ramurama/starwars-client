import React from 'react';
import Spinner from 'react-native-loading-spinner-overlay';

export default props => (
  <Spinner visible={props.enable} textStyle={{ color: '#ffffff' }} />
);
