import React from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native'
import Navigator from './Routes/homeStack'
import Login from './screens/Login'
import Signup from './screens/Signup'

export default function App() {
  return (
    <Navigator />
  )
};


const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 50
  }
});