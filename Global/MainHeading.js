import React from 'react'
import { Text, StyleSheet } from 'react-native'

const MainHeading = ({ name }) => {
    return (
        <Text style={Styles.mainHeading}>
            {name}
        </Text>
    )
}

export default MainHeading

const Styles = StyleSheet.create({
    mainHeading: {
        color: '#000', 
        marginTop: 20, 
        fontSize: 30, 
        fontWeight: '700', 
        marginBottom: 10
    }
})