import React, { useEffect, useState, useContext } from 'react';
import { View } from 'react-native';
import { StyleSheet, Text, ActivityIndicator } from 'react-native'
import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import { DefaultTheme, DarkTheme } from "@react-navigation/native";
import { NavigationContainer } from '@react-navigation/native';
import Navigator from './Routes/homeStack'
import Login from './screens/Login'
import Signup from './screens/Signup'
import BuyNow from './screens/BuyNow'
import Success from './screens/Success' 
import FlightsHistory from './screens/FlightsHistory'
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
// import { AppearanceProvider, useColorScheme } from "react-native-appearance";
import ApolloClient from 'apollo-client'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { createHttpLink } from 'apollo-link-http'
import { ApolloProvider } from '@apollo/react-hooks'
import Home from './screens/Home';
import ReviewDetails from './screens/ReviewDetails';
// import { AuthContext } from './store/context';
import { DataLayer } from './store/index';
import reducer, { initialStates } from './store/reducer'
import { AuthContext, AuthProvider } from './store/context';
import { setContext } from 'apollo-link-context'
import { AsyncStorage } from 'react-native';
import TicketDetails from './screens/TicketDetails';


const httpLink = createHttpLink({
  uri: 'http://localhost:5000',
  onError: (e) => { console.log(e) },
})

const authLink = setContext(async () => {

    const token = await AsyncStorage.getItem('jwtToken');
    console.log("token => ", token)

    return {
      headers: {
        Authorization: token ? `Bearer ${token}` : ''
      }
    };
})

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
})



console.log(authLink);

const Tabstack = createBottomTabNavigator();
const TabStack = createStackNavigator();
const LoginStack = createStackNavigator();
const SignupStack = createStackNavigator();
const HomeStack = createStackNavigator();
const BuyNowStack = createStackNavigator();
const SuccessStack = createStackNavigator();
const FlightsHistoryStack = createStackNavigator();
const TicketDetailsStack = createStackNavigator();
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

const SuccessStackScreen = () => (
  <SuccessStack.Navigator>
    <SuccessStack.Screen name="Success" options={{ headerShown:  false }} component={Success} />
  </SuccessStack.Navigator>
)

const FlightsHistoryStackScreen = () => (
  <FlightsHistoryStack.Navigator>
    <FlightsHistoryStack.Screen name="Flights History" options={{ headerShown:  false }} component={FlightsHistory} />
  </FlightsHistoryStack.Navigator>
)

const TicketDetailStackScreen = () => (
  <TicketDetailsStack.Navigator>
    <TicketDetailsStack.Screen name="Ticket Details" options={{ headerShown:  false }} component={TicketDetails} />
  </TicketDetailsStack.Navigator>
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
  const { user } = useContext(AuthContext)

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
  // console.disableYellowBox = true;

  return (
    <DataLayer initialState={initialStates} reducer={reducer}>
      <AppearanceProvider>
        <ApolloProvider client={client}>
          <AuthProvider>
            <NavigationContainer theme={scheme === "dark" ? DarkTheme : DefaultTheme}>
                <TabStack.Navigator>
                  <TabStack.Screen name="Login" options={{ headerShown:  false }} component={LoginStackScreen} />
                  <TabStack.Screen name="Sign up" options={{ headerShown:  false }} component={SignupStackScreen} />
                  <TabStack.Screen name="Home" options={{ headerLeft: null }} component={HomeStackScreen} />
                  <TabStack.Screen name="Details" options={{ headerShown:  false }} component={DetailStackScreen} />
                  <TabStack.Screen name="Success" options={{ headerShown:  false }} component={SuccessStackScreen} />
                  <TabStack.Screen name="Ticket Details" component={TicketDetailStackScreen} />
                  <TabStack.Screen name="Buy Now" options={{headerStyle: {backgroundColor: '#000',borderBottomColor: '#000'}}} component={BuyNowStackScreen} />
                  <TabStack.Screen name="Flights History" component={FlightsHistoryStackScreen} />
                </TabStack.Navigator>
            </NavigationContainer>
          </AuthProvider>
        </ApolloProvider>
      </AppearanceProvider>
    </DataLayer>
  );
};

const styles = StyleSheet.create({
  topSpacing: {
    marginTop: 50
  }
});