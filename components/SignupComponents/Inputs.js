import React, { useContext, useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native'
import {useTheme} from '@react-navigation/native'
import {NavigationActions} from 'react-navigation'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import { ActivityIndicator } from "react-native";
import { AuthContext } from '../../store/context'

const Inputs = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState(null);
    const context = useContext(AuthContext)
    
    const [addUser, { loading }] = useMutation(REGISTER_USER, {
        update(_, { data: { register: userData } }) {
            console.log(userData)
            context.login(userData)
            navigation.navigate('Login')
        },
        onError(error) {
            setErrors('please enter all fields')
        },
        variables: {
            username: name,
            email: email,
            password: password
        }
    })

    const [user, setUser] = useState({
        name: name,
        email: email,
        password: password
    });

    const { colors } = useTheme();

    const nameHandler = (val) => {
        setName(val)
    }

    const emailHandler = (val) => {
        setEmail(val)
    }

    const passwordHandler = (val) => {
        setPassword(val)
    }

    const handleData = (e) => {
        addUser()
    };

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
                name="name"
                placeholder="Name"
                autoCapitalize='none'
                autoCorrect={false}
                value={name}
                onChangeText={(val) => setName(val)}
            />
            <TextInput 
                style={Styles.signupInput} 
                name="email"
                autoCapitalize='none'
                autoCorrect={false}
                value={email}
                onChangeText={(val) => setEmail(val)}
                placeholder="Email"
            />
            <TextInput 
                style={Styles.signupInput}
                name="password"
                autoCapitalize='none'
                autoCorrect={false}
                value={password} 
                onChangeText={(val) => setPassword(val)}
                secureTextEntry={true}
                placeholder="Password"
            />
            <View style={Styles.checkbox}>
                <CheckBox style={{width: 20, height: 20, borderColor: '#0A84FF'}} />
                <Text style={Styles.checkBoxText}> I agree with our <Text style={{color: '#0A84FF'}}>terms</Text> and <Text style={{color: '#0A84FF'}}>condition</Text> </Text>
            </View>

            <View style={Styles.signupButton}>
                {loading ? 
                    <ActivityIndicator />
                    : 
                        <TouchableOpacity onPress={() => handleData() } style={Styles.signupBtn}>
                            <Text style={{
                                color: '#fff',
                                fontSize: 18,
                                fontWeight: '600'
                            }}> Sign Up </Text>
                        </TouchableOpacity> 
                }
                
            </View>
        </View>
    )
}

const REGISTER_USER = gql`
    mutation register( 
        $username: String!
        $email: String!
        $password: String!
    ) {
        register (
            registerInput: {
                username: $username
                email: $email
                password: $password
            }
        ) {
            id
            email
            password
            token
        }
    }
`

export default Inputs