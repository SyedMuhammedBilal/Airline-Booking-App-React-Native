import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Text } from 'react-native'
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Routes/homeStack'
import Login from './screens/Login'
import Signup from './screens/Signup'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
// import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Home from './screens/Home';

const Tabstack = createBottomTabNavigator();
const TabStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();
const HomeStack = createStackNavigator();
const AuthStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" options={{ 
      headerShown:  false 
    }} component={Home} />
  </HomeStack.Navigator>
)

const LoginStackScreen = () => (
  <LoginStack.Navigator>
    <LoginStack.Screen name="Login" options={{ headerShown:  false }} component={Login} />
  </LoginStack.Navigator>
);

const SignupStackScreen = () => (
  <SignupStack.Navigator>
    <SignupStack.Screen name="Signup" options={{ headerShown:  false }} component={Signup} />
  </SignupStack.Navigator>
)

export default function App() {
  const [loading, setLoading] = useState(true);
  const [userToken, setUserToken] = useState('ndnwdw222455');
  const scheme = useColorScheme();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])

  if(loading) {
    <Text>Loading</Text>
  }

  return (
    <AppearanceProvider>
      <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
        {userToken ? (
          <TabStack.Navigator>
            <TabStack.Screen name="Home" options={{ headerLeft: null }} component={HomeStackScreen} />
          </TabStack.Navigator>
        ): (
          <AuthStack.Navigator>
            <AuthStack.Screen name="Login" options={{ headerShown:  false }} component={LoginStackScreen} />
            <AuthStack.Screen name="Sign up" options={{ headerShown:  false }} component={SignupStackScreen} />
          </AuthStack.Navigator>
        )}
        
      </NavigationContainer>
    </AppearanceProvider>
  )
};

const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 50
  }
});

// return (
//   // <AppearanceProvider>
//   //   <Navigator theme={scheme === "dark" ? DarkTheme : DefaultTheme} />
//   // </AppearanceProvider>
// )