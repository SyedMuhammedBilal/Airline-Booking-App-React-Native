import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native'

const Signup = ({ navigation }) => {
    const [text, setText] = useState('');

    const changeHandler = (val) => {
        setText(val)
    }

    return (
        <View>
            <View style={Styles.appleLogo}>
                <Image style={Styles.appleLogoSize} source={require('../assets/AppleLogo.png')} />
            </View>
            <View>
                <View style={Styles.heading}>
                    <Text style={{fontSize: 35, fontWeight: 'bold'}}> Create account </Text>
                    <Text style={{marginTop: 20, color: 'rgb(142, 142, 147)', marginBottom: 5}}> Create your account to continue using app,</Text>
                    <Text style={{color: 'rgb(142, 142, 147)'}}> Have a good day </Text>
                    

                    <View style={Styles.inputContainer}>
                    <TextInput 
                            style={Styles.signupInput} 
                            placeholder="Name"
                            onChangeText={changeHandler}
                        />
                        <TextInput 
                            style={Styles.signupInput} 
                            placeholder="Email"
                        />
                        <TextInput 
                            style={Styles.signupInput} 
                            placeholder="Password"
                        />
                        <View style={Styles.checkbox}>
                            <CheckBox style={{width: 20, height: 20, borderColor: '#0A84FF'}} />
                            <Text style={Styles.checkBoxText}> I agree with our <Text style={{color: '#0A84FF'}}>terms</Text> and <Text style={{color: '#0A84FF'}}>condition</Text> </Text>
                        </View>

                        <View style={Styles.signupButton}>
                            <TouchableOpacity style={Styles.signupBtn}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600'
                                }}> Sign Up </Text>
                            </TouchableOpacity>
                        </View>
                        
                        <View>
                            <Text style={{color: 'rgb(142, 142, 147)', marginTop: '6%', textAlign: 'center',}}> 
                                Already have an account?
                                <TouchableOpacity style={{textAlign: 'center', marginTop: 0}}>
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
        marginTop: '15%',
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