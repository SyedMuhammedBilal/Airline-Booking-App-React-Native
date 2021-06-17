import React, { useState } from 'react'
import { Image, View, StyleSheet, TouchableOpacity, Text, useColorScheme,  } from 'react-native'
import { Icon } from 'react-native-elements'
import {useTheme} from '@react-navigation/native'
import {AuthContext} from '../store/context'
// import {BlurView} from 'expo';

const Avatar = () => {
    const [showSettings, setShowSettings] = useState(false)
    const { colors } = useTheme();
    const scheme = useColorScheme();

    // const { signOut } = React.useContext(AuthContext)

    const showStatusBar = () => {
        setShowSettings(!showSettings)
    }

    const Styles = StyleSheet.create({
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
            top: 50,
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

    return (
        <View style={Styles.avatar}>
            <TouchableOpacity onPress={showStatusBar}>
                <Image style={Styles.avatarImage}  source={require('../assets/bieber.jpeg')} />
            </TouchableOpacity>
            {
                showSettings &&
                    <View style={Styles.settings}>
                        <TouchableOpacity onPress={() => navigation.push('Login')} style={Styles.logoutBtn}>
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

