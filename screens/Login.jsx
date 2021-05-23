import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native'

const Login = () => {

    return (
        <View>
            <View style={Styles.appleLogo}>
                <Image style={Styles.appleLogoSize} source={require('../assets/AppleLogo.png')} />
            </View>
            <View>
                <View style={Styles.heading}>
                    <Text style={{fontSize: 35, fontWeight: 'bold'}}> Login </Text>
                    <Text style={{marginVertical: 20, color: 'rgb(142, 142, 147)'}}> Welcome back, </Text>
                    <Text style={{marginVertical: '-3.5%' ,color: 'rgb(142, 142, 147)'}}> Sign in to continue, Have a good day</Text>

                    <View style={Styles.inputContainer}>
                        <TextInput 
                            style={Styles.loginInput} 
                            placeholder="Email"
                        />
                        <TextInput 
                            style={Styles.loginInput} 
                            placeholder="Password"
                        />

                        <View style={Styles.loginButton}>
                            <TouchableOpacity style={Styles.LoginBtn}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600'
                                }}> Sign In </Text>
                            </TouchableOpacity>
                        </View>
                        

                        <Text style={{color: 'rgb(142, 142, 147)', marginTop: '7%', textAlign: 'center'}}> 
                            Don't have an account?
                            <TouchableOpacity>
                                <Text style={{color: '#0A84FF'}}> Create an accout </Text>
                            </TouchableOpacity> 
                        </Text> 
                    </View>
                </View>
            </View>
        </View>
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
    loginInput: {
        paddingVertical: 15,
        fontSize: 16.5,
        borderBottomWidth: 0.5,
        borderBottomColor: 'rgb(174, 174, 178)',
        marginBottom: '5%'
    },
    loginButton: {
        marginTop: '60%',
    },
    LoginBtn: {
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