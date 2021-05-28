import React, { useState } from 'react'
import {TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native';
import {
    View, 
    ScrollView, 
    Image,
    StyleSheet,
    Dimensions,
    FlatList,
    Text
} from 'react-native'
import Pic from '../../assets/bieber.jpeg'
var {Windowheight, width} = Dimensions.get('window');


const AvailableFlights = () => {

    return (
        <>
            
        </>     
    )
}

export default AvailableFlights

const Styles = StyleSheet.create({
    imageContainer: {
        flexDirection: 'row',
        // flex: 1,
        backgroundColor: '#fff',
        marginTop: '5%',
        height: 200,
        borderTopColor: 'rgb(142, 142, 147)',
        borderTopWidth: 0.2
    },
    imageDisplayer: {
        width: 200,
        height: 160,
        marginVertical: '15%',
        borderRadius: 14,
        marginLeft: '10%'
    },
})