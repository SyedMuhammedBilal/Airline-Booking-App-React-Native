import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard, useColorScheme } from 'react-native'
import Inputs from '../components/LoginComponents/Inputs';
import {AuthContext} from '../store/context';
import {useTheme} from '@react-navigation/native'

const DarkLogo = require('../assets/AppleLogo.png');
const LightLogo = require('../assets/whiteApple.png')

const Login = ({ navigation }) => {
    const onPressHandler = () => {
        // navigation, pop, goBack
        navigation.push('Sign up')
    }

    const { colors } = useTheme();
    const scheme = useColorScheme();


    return (
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss();
        }}>
        <View>
            <View style={Styles.appleLogo}>
                <Image style={Styles.appleLogoSize} source={scheme === 'dark' ? LightLogo : DarkLogo} />
            </View>
            <View>
                <View style={Styles.heading}>
                    <Text style={{fontSize: 35, fontWeight: 'bold', color: colors.text}}> Login </Text>
                    <Text style={{marginVertical: 20, color: 'rgb(142, 142, 147)'}}> Welcome back, </Text>
                    <Text style={{marginVertical: '-3.5%' ,color: 'rgb(142, 142, 147)'}}> Sign in to continue, Have a good day</Text>

                    <View style={Styles.inputContainer}>
                        
                        <Inputs navigation={navigation} />
                        <Text style={{color: 'rgb(142, 142, 147)', marginTop: '7%', textAlign: 'center'}}> 
                            Don't have an account?
                            <TouchableOpacity onPress={onPressHandler}>
                                <Text style={{color: '#0A84FF'}}> Create an accout </Text>
                            </TouchableOpacity> 
                        </Text> 
                    </View>
                </View>
            </View>
        </View>
        </TouchableWithoutFeedback>
    )
}

export default Login

const Styles = StyleSheet.create({
    appleLogo: {
        marginTop: '35%',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#333',
        height: 0
    },
    appleLogoSize: {
        resizeMode: 'contain',
        width: 65,
    },
    heading: {
        marginVertical: '18%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        marginTop: '16%',
        width: '90%'
    },  
})