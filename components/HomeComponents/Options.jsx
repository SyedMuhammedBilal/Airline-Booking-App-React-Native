import React from 'react'
import {View, StyleSheet} from 'react-native'

const Options = () => {
    return (
        <View style={Styles.optionsContainer}>
            <View style={Styles.option}>

            </View>
        </View>
    )
}

export default Options

const Styles = StyleSheet.create({
    optionsContainer: {
        marginVertical: '5%'
    },
    option: {
        width: 20
    }
})