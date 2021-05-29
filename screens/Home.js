import React, { useState } from 'react'
import {
    View, 
    Text, 
    Button, 
    StyleSheet, 
    FlatList, 
    TouchableOpacity, 
    TextInput,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView,
    SafeAreaView
} from 'react-native'
import { Icon } from 'react-native-elements'
import Avatar from '../components/Avatar.jsx'
import AvailableFlights from '../components/HomeComponents/AvailableFlights.jsx'
import Options from '../components/HomeComponents/Options.jsx'
import SearchBar from '../components/HomeComponents/SearchBar.jsx'
import NavigationBar from '../components/NavigationBar/NavigationBar.tsx'
import MainHeading from '../Global/MainHeading.js'
import { dummyData } from '../Data/Data.js'
import Carousel from '../components/HomeComponents/Carousel.js'
import SmallCards from '../components/HomeComponents/SmallCards'

import pic01 from '../assets/eme.png'
import pic02 from '../assets/qantas.png'
import pic03 from '../assets/pia.png'
import pic04 from '../assets/tukrish2.png'

const Home = ({ navigation }) => {
    const onPressHandler = () => {
        // navigation, pop, goBack
        navigation.navigate('ReviewDetails')
    }

    return (
        
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
        >
         
         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
            <View  styles={Styles.container}>
                <View style={Styles.head}>
                    <MainHeading name="Book your Flight" />
                    <Avatar />
                </View>
                <SearchBar />
                
                <Carousel data={dummyData} />

                <View style={{marginHorizontal: '5%', flex: 1, height: 100}}>
                    <MainHeading name="Available Flights" />
                </View>
                <View style={{marginTop: -125, flex: 1, height: 1000, flexGrow: 1}}>

                    <SmallCards width={200} left={184} top={135} height={170} imageWidth={105} imageHeight={105} topImg={0} leftImg={10} color01="#E80B0B" color02="#DC4F00" image={pic01} />
                    <SmallCards width={134} left={30} top={135} height={170} imageWidth={60} topImg={20} leftImg={10} imageHeight={60} color01="#000" color02="#676767" image={pic02} />
                    <SmallCards width={354} left={30} height={154} top={325} imageWidth={135} imageHeight={75} topImg={10} leftImg={10} color01="#FF6091" color02="#5127DD" image={pic04} />
                    <SmallCards width={200} left={30} height={140} top={500} imageWidth={100} imageHeight={35} topImg={30} leftImg={10} color01="#A7FFE5" color02="#00CFC3" image={pic03} />
                    <SmallCards width={134} left={250} height={140} top={500} imageWidth={105} imageHeight={105} topImg={0} leftImg={10} color01="#278EFF" color02="#6271FF" image={pic01} />
                </View>
                
                {/* <Button title="Review details" onPress={onPressHandler} /> */}
                {/* <NavigationBar /> */}
            </View>
            </ScrollView>
       
        </TouchableWithoutFeedback>
        
    )
};

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