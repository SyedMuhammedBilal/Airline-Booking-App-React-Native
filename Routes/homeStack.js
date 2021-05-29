import React from 'react'
import { createStackNavigator } from 'react-navigation-stack'   
import { createAppContainer } from 'react-navigation'
import Home from '../screens/Home'
import ReviewDetails from '../screens/ReviewDetails'
import About from '../screens/About'
import {Button} from 'react-native-elements/dist/buttons/Button'
import Login from '../screens/Login'
import Signup from '../screens/Signup'

const screens = {
    Login: {
        screen: Login,
    },
    Signup: {
        screen: Signup
    },
    Home: {
        screen: Home,
        // Navigation Options
        navigationOptions: {    
            title: null,
            headerStyle: {
                borderBottomWidth: 0,
            }
        }
    }, 
    ReviewDetails: {
        screen: ReviewDetails
    },
    About: {
        screen: About
    },
    
}

const DefaultStack = createStackNavigator(screens, {
    defaultNavigationOptions: {
        headerStyle: {
            backgroundColor: '#fff'
        }
    }
});

export default createAppContainer(DefaultStack);