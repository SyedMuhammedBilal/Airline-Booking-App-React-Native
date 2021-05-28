import React from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'

const Inputs = () => {
    return (
        <View>
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
        </View>
    )
}

export default Inputs

const Styles = StyleSheet.create({ 
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