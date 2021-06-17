import React, { useState } from 'react'
import { View, Image, StyleSheet, Text, TextInput, TouchableOpacity, CheckBox } from 'react-native'
import {useTheme} from '@react-navigation/native'
import {AuthContext} from '../../store/context'
import {NavigationActions} from 'react-navigation'


const Inputs = ({navigation}) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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

    // let name, value;

    const handleData = async (e) => {
        const res = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: name,
                email: email,
                password: password
            })
        })

        const data = res.json();

         if(res.status === 422 || !data) {
             console.log('an error occured!')
         } else {
             console.log('succesfull')
            navigation.push('Login')
        }
    };

    // const { signUp } = React.useContext(AuthContext)

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
                value={name}
                onChangeText={(val) => setName(val)}
            />
            <TextInput 
                style={Styles.signupInput} 
                name="email"
                value={email}
                onChangeText={(val) => setEmail(val)}
                placeholder="Email"
            />
            <TextInput 
                style={Styles.signupInput}
                name="password"
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
                <TouchableOpacity onPress={() => {handleData(); navigation.navigate('Login')} } style={Styles.signupBtn}>
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