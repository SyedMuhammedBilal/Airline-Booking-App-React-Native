import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, ActivityIndicator } from 'react-native'
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Routes/homeStack'
import Login from './screens/Login'
import Signup from './screens/Signup'
import BuyNow from './screens/BuyNow'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';
import { AuthContext } from './store/context';
import { DataLayer } from './store/index';
import reducer, { initialState } from './store/reducer'


const Tabstack = createBottomTabNavigator();
const TabStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BuyNowStack = createStackNavigator();
const AuthStack = createStackNavigator();
const DetailStack = createStackNavigator();

const HomeStackScreen = () => (
  <HomeStack.Navigator>
    <HomeStack.Screen name="Home" options={{ 
      headerShown:  false 
    }} component={Home} />
  </HomeStack.Navigator>
)

const DetailStackScreen = () => (
  <DetailStack.Navigator>
    <DetailStack.Screen name="Details" options={{ 
      headerShown:  false 
    }} component={ReviewDetails} />
  </DetailStack.Navigator>
)

const BuyNowStackScreen = () => (
  <BuyNowStack.Navigator>
    <BuyNowStack.Screen name="Buy Now" options={{ headerShown:  false }} component={BuyNow} />
  </BuyNowStack.Navigator>
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
  const [userToken, setUserToken] = useState(null);
  const [userData, setUserData] = useState();
  const scheme = useColorScheme();

  const authContext = React.useMemo(() => ({
    signIn: () => {
      setUserToken('ajc'),
      setLoading(false);
    },
    signUp: () => {
      setUserToken('hab34'),
      setLoading(false);
    },
    signOut: () => {
      setUserToken(null),
      setLoading(false);
    }
  }), [])

  useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  },[])

  if(loading) {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <ActivityIndicator size="large" />  
      </View>
    )
  };

  return (
    <DataLayer initialState={initialState} reducer={reducer}>
      <AppearanceProvider>
        <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
            <TabStack.Navigator>
              <TabStack.Screen name="Login" options={{ headerShown:  false }} component={LoginStackScreen} />
              <TabStack.Screen name="Sign up" options={{ headerShown:  false }} component={SignupStackScreen} />
              <TabStack.Screen name="Home" options={{ headerLeft: null }} component={HomeStackScreen} />
              <TabStack.Screen name="Details" options={{ headerShown:  false }} component={DetailStackScreen} />
              <TabStack.Screen name="Buy Now" options={{headerStyle: {backgroundColor: '#000',borderBottomColor: '#000'}}} component={BuyNowStackScreen} />
            </TabStack.Navigator>
        </NavigationContainer>
      </AppearanceProvider>
    </DataLayer>
  );
};

const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 50
  }
});