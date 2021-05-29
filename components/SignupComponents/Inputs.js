import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native'
import {useTheme} from '@react-navigation/native'

const Inputs = ({navigation}) => {
    const [text, setText] = useState('');
    const { colors } = useTheme();

    const changeHandler = (val) => {
        setText(val)
    }

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
            marginBottom: '5%',
            color: colors.text
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
        }
    })

    return (
        <View>
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
                secureTextEntry={true}
                placeholder="Password"
            />
            <View style={Styles.checkbox}>
                <CheckBox style={{width: 20, height: 20, borderColor: '#0A84FF'}} />
                <Text style={Styles.checkBoxText}> I agree with our <Text style={{color: '#0A84FF'}}>terms</Text> and <Text style={{color: '#0A84FF'}}>condition</Text> </Text>
            </View>

            <View style={Styles.signupButton}>
                <TouchableOpacity onPress={() => navigation.push('Home')} style={Styles.signupBtn}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '600'
                    }}> Sign Up </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Inputs