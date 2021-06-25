import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, CheckBox, useColorScheme } from 'react-native'
import Inputs from '../components/SignupComponents/Inputs';
import {AuthContext} from '../store/context.js';
import {useTheme} from '@react-navigation/native'

const DarkLogo = require('../assets/AppleLogo.png');
const LightLogo = require('../assets/whiteApple.png')

const Signup = ({ navigation }) => {
    const onPressHandler = () => {
        // navigation, pop, goBack
        navigation.push('Home')
    }
    const scheme = useColorScheme();
    const { colors } = useTheme();

    return (
        <View>
            <View style={Styles.appleLogo}>
                <Image style={Styles.appleLogoSize} source={scheme === 'dark' ? LightLogo : DarkLogo} />
            </View>
            <View>
                <View style={Styles.heading}>
                    <Text style={{fontSize: 35, fontWeight: 'bold', color: colors.text}}> Create account </Text>
                    <Text style={{marginTop: 20, color: 'rgb(142, 142, 147)', marginBottom: 5}}> Create your account to continue using app,</Text>
                    <Text style={{color: 'rgb(142, 142, 147)'}}> Have a good day </Text>
                    

                    <View style={Styles.inputContainer}>
                        <Inputs navigation={navigation} />
                        
                        <View>
                            <Text style={{color: 'rgb(142, 142, 147)', marginTop: '6%', textAlign: 'center',}}> 
                                Already have an account?
                                <TouchableOpacity onPress={() => navigation.push("Login")} style={{textAlign: 'center', marginTop: 0,}}>
                                    <Text style={{color: '#0A84FF'}}> Sign In </Text>
                                </TouchableOpacity> 
                            </Text> 
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default Signup

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
        marginTop: '22%',
        width: '90%'
    },  
    checkbox: {
        flexDirection: 'row',
        marginTop: '05%'
    },
    checkBoxText: {
        marginHorizontal: 5,
        color: 'rgb(142, 142, 147)'
    },
    signupInput: {
        paddingVertical: 15,
        fontSize: 16.5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgb(174, 174, 178)',
        marginBottom: '5%'
    },
    signupButton: {
        marginTop: '30%',
    },
    signupBtn: {
        backgroundColor: '#0A84FF',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:10,
        paddingTop: 15,
        paddingBottom: 15,
        borderRadius: 15,
        borderWidth: 1,
        borderColor: '#fff'
    }
})
