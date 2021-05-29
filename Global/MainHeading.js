import {useTheme} from '@react-navigation/native'
import React from 'react'
import { Text, StyleSheet } from 'react-native'


const MainHeading = ({ name }) => {
    const { colors } = useTheme();

    const Styles = StyleSheet.create({
        mainHeading: {
            color: colors.text, 
            marginTop: 20, 
            fontSize: 30, 
            fontWeight: '700', 
            marginBottom: 10
        }
    })

    return (
        <Text style={Styles.mainHeading}>
            {name}
        </Text>
    )
}

export default MainHeading