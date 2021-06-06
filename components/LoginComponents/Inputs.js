import React from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {colors} from 'react-native-elements'
import {useTheme} from '@react-navigation/native'
import {AuthContext} from '../../store/context'

const Inputs = ({ navigation }) => {
    const { colors } = useTheme();
    const { signIn } = React.useContext(AuthContext)

    const Styles = StyleSheet.create({ 
        loginInput: {
            paddingVertical: 15,
            fontSize: 16.5,
            borderBottomWidth: 0.5,
            borderBottomColor: 'rgb(174, 174, 178)',
            marginBottom: '5%',
            color: colors.text
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
        }
    })

    return (
        <View>
            <TextInput 
                style={Styles.loginInput} 
                placeholder="Email"
            />
            <TextInput 
                style={Styles.loginInput} 
                placeholder="Password"
                secureTextEntry={true}
            />

            <View style={Styles.loginButton}>
                <TouchableOpacity onPress={() => {signIn()}} style={Styles.LoginBtn}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '600'
                    }}> Sign In </Text>
                </TouchableOpacity>
            </View>
        </View>
    )
};

export default Inputs