import React, { useState, useEffect } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, Keyboard } from 'react-native'
import {colors} from 'react-native-elements'
import {useTheme} from '@react-navigation/native'
import {AuthContext} from '../../store/context'
import {useDataLayerValue} from '../../store'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import { ActivityIndicator } from "react-native";

const Inputs = ({ navigation }) => {
    const [ email, setEmail ] = useState('');
    const [ password, setPassword ] = useState('');
    const [userData, setUserData] = useState(null);
    const [errors, setErros] = useState(null);
    const [{ user, token }, dispatch] = useDataLayerValue();

    const { colors } = useTheme();
    // const { signIn } = React.useContext(AuthContext);

    const [loginUser, { loading }] = useMutation(LOGIN_USER, {
        update(_, result) {
            navigation.navigate('Home')
        },
        onError(error) {
            setErrors('please enter all fields')
        },
        variables: {
            email: email,
            password: password
        }
    })

    const login = () => {
        loginUser()
    }

    useEffect(() => {
        dispatch({
            type: 'LOGIN',
            user: userData
        })
    },[])
    console.log(user);
    

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
                name="email"
                autoCapitalize='none'
                value={email}
                keyboardType='email-address'
                autoCorrect={false}
                placeholder="Email"
                onChangeText={(val) => setEmail(val)}
            />

            <TextInput 
                style={Styles.loginInput} 
                name="password"
                value={password}
                autoCapitalize='none'
                placeholder="Password"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={(val) => setPassword(val)}
            />

            <View style={Styles.loginButton}>
                {loading ? 
                    <ActivityIndicator />
                    : 
                        <TouchableOpacity onPress={() => {login()} } style={Styles.LoginBtn}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: '600'
                            }}> Sign In </Text>
                        </TouchableOpacity> 
                }
            </View>
        </View>
    )
};

const LOGIN_USER = gql`
    mutation login(
        $email: String!
        $password: String!
    ) {
        login(
            email: $email
            password: $password
        ) {
            id
            email
            username
            token
            createdAt
        }
    }
`

export default Inputs