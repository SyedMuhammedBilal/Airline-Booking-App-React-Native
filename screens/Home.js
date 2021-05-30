import React, { useEffect, useState } from 'react'
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
    SafeAreaView,
    StatusBar,
    useColorScheme
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
import pic05 from '../assets/delta.png'
import {useTheme} from '@react-navigation/native'
import {color} from 'react-native-elements/dist/helpers'
import {AirlineData} from '../Data/AirlineData.js'

const Home = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = 'dark-content'
    const LIGHT_THEME = 'light-content'

    const checkThemeColor = () => {
        if(scheme === 'dark') {
         DARK_THEME   
        } else {
            LIGHT_THEME
        }
    };

    const onPressHandler = () => {
        // navigation, pop, goBack
        navigation.navigate('ReviewDetails')
    }

    const Styles = StyleSheet.create({
        container: {
            color: colors.text
        },
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

    return (
        
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
        >
         
         <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
             <StatusBar style={checkThemeColor}  />
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
                    {AirlineData.map((items) => {
                        return (
                            <SmallCards 
                                width={items.width} 
                                left={items.left} 
                                top={items.top} 
                                height={items.height} 
                                imageWidth={items.imageWidth} 
                                imageHeight={items.imageHeight} 
                                topImg={items.topImg} 
                                leftImg={items.leftImg} 
                                color01={items.color01} 
                                color02={items.color02} 
                                image={items.image} 
                            />
                        )
                    })}
                </View>
            </View>
            </ScrollView>
       
        </TouchableWithoutFeedback>
        
    )
};

export default Home
