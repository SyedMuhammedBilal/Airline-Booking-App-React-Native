import React from 'react'
import { Image, View, StyleSheet } from 'react-native'

const Avatar = () => {
    return (
        <View style={Styles.avatar}>
            <Image style={Styles.avatarImage} source={require('../assets/bieber.jpeg')} />
        </View>
    )
}

export default Avatar

const Styles = StyleSheet.create({
    avatarImage: {
        width: 40,
        height: 40,
        borderRadius: 50
    }
})