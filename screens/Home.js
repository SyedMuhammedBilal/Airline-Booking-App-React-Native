import React, { useState } from 'react'
import {View, Text, Button, StyleSheet, FlatList, TouchableOpacity, TextInput} from 'react-native'
import { Icon } from 'react-native-elements'
import Avatar from '../components/Avatar.jsx'
import SearchBar from '../components/HomeComponents/SearchBar.jsx'
import MainHeading from '../Global/MainHeading.js'

const Home = ({ navigation }) => {
    const onPressHandler = () => {
        // navigation, pop, goBack
        navigation.navigate('ReviewDetails')
    }

    return (
        <View styles={Styles.container}>
            <View style={Styles.head}>
                <MainHeading name="Book your Flight" />
                <Avatar />
            </View>
            <SearchBar />
            <Button title="Review details" onPress={onPressHandler} />
        </View>
    )
}

export default Home

const Styles = StyleSheet.create({
    head: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: '5%',
        marginBottom: '2%'
    },
    reviewData: {
        backgroundColor: '#000'
    },
})