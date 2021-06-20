import React, { useState, useContext } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, useColorScheme,  } from 'react-native'
import { Icon } from 'react-native-elements'
import {useTheme} from '@react-navigation/native'
import {AuthContext} from '../store/context'
import { AntDesign } from '@expo/vector-icons';

const Avatar = ({ nav }) => {
    const [showSettings, setShowSettings] = useState(false)
    const { colors } = useTheme();
    const scheme = useColorScheme();

    // const { signOut } = React.useContext(AuthContext)
    const { logout } = useContext(AuthContext)


    const showStatusBar = () => {
        setShowSettings(!showSettings)
    }

    const Styles = StyleSheet.create({
        avatar: {
            
        },
        avatarImage: {
            width: 40,
            height: 40,
            borderRadius: 50
        },
        settings: {
            width: 150,
            height: 80,
            position: 'absolute',
            backgroundColor: scheme === 'dark' ? 'rgb(44, 44, 46)' : '#fff',
            top: 60,
            zIndex: 6,
            right: 0,
            borderRadius: 8,
        },
        logoutBtn: {
            paddingTop: 32,
            paddingLeft: 10,
        },
        btn: {
            backgroundColor: scheme === "dark" ? 'rgb(0, 122, 255)' : "rgb(10, 133, 255)" ,
            width: 130,
            paddingTop: 10,
            paddingBottom: 10,
            top: -10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 5
        }
    })

    const logoutUser = () => {
        logout()
    }

    return (
        <View style={Styles.avatar}>
            <TouchableOpacity style={{ backgroundColor: 'rgb(44, 44, 46)', borderRadius: 50, marginTop: 10, }} onPress={showStatusBar}>
                {/* <Image style={Styles.avatarImage}  source={require('../assets/bieber.jpeg')} /> */}
                <AntDesign style={{padding: 5,}} name="user" size={30} color="white" />
            </TouchableOpacity>
            {
                showSettings &&
                    <View style={Styles.settings}>
                        <TouchableOpacity onPress={() => {logoutUser(); nav.navigate('Login')}} style={Styles.logoutBtn}>
                            <View style={Styles.btn}>
                                <Text style={{color: '#fff'}}>Logout</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
            }   
        </View>
    )
}

export default Avatar

