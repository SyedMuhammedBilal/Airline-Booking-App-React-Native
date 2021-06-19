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
import { AntDesign } from '@expo/vector-icons';
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
    const [user, setUser] = useState()
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
        navigation.navigate('Details')
        // console.log(user)
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
        bookButton: {
            marginTop: '55%',
            marginHorizontal: 35,
            marginBottom: 50,
            backgroundColor: 'rgb(28, 28, 30)',
            paddingBottom: 20,
            paddingHorizontal: 20,
            borderRadius: 8,
        },
        bookBtn: {
            backgroundColor: '#fc3841',
            justifyContent: 'space-around',
            // alignItems: 'center',
            borderRadius:10,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 15,
            borderWidth: 1,
            display:'flex',
            flexDirection: 'row'
        }
        // Shayansidd2002@gmail.com
    })

    return (
        
        <TouchableWithoutFeedback onPress={() => {
            Keyboard.dismiss()
        }}
        >
         
         <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
             <StatusBar style={checkThemeColor}  />
            <View  styles={Styles.container}>
                <View style={Styles.head}>
                    <MainHeading name={`Hello`} />
                    <Avatar />
                </View>
                <SearchBar />
                
                <Carousel data={dummyData} />

                <View style={{marginHorizontal: '5%', flex: 1, height: 100}}>
                    <MainHeading name="Book your Flight" />
                </View>
                <View style={{marginTop: -125, flex: 1, height: 450, flexGrow: 1}}>
                    {AirlineData.map((items) => {
                        return (
                            <TouchableOpacity onPress={onPressHandler} key={items.id}>
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
                            </TouchableOpacity>
                        )
                    })}
                    
                    
                </View>
                <View style={Styles.bookButton}>
                    <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                        <AntDesign name="enviromento" size={30} color="white" style={{paddingRight: 6}} />
                        <Text style={{fontSize: 28, fontWeight: '600', color: colors.text, paddingTop: 18, paddingBottom: 20}}> Booked Flights </Text>
                    </View>
                <TouchableOpacity style={Styles.bookBtn} onPress={() => navigation.navigate('Flights History')}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '600'
                    }}> View Booked flights </Text>
                    <AntDesign name="rightcircleo" size={24} color="white" />
                </TouchableOpacity>
            </View>
            </View>
            </ScrollView>
       
        </TouchableWithoutFeedback>
        
    )
};

export default Home
