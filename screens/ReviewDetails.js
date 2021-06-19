import React, { useState } from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, FlatList, useColorScheme, Image} from 'react-native'
import Pic from '../assets/E-portrait2.png'
import {useTheme} from '@react-navigation/native'
import {color} from 'react-native-elements/dist/helpers'
import {colors} from 'react-native-elements'
import {Feather} from '@expo/vector-icons'
import {GalleryData} from '../Data/GalleryData'
import Button from '../components/DetailsComponent/Button'

const ReviewDetails = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    const checkThemeColor = () => {
        if(scheme === 'dark') {
            DARK_THEME   
        } else {
            LIGHT_THEME
        }
    };

    const styles = StyleSheet.create({
        conatiner: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        image: {
            height: 450,
            justifyContent: 'flex-end'
        },
        tagLine: {
            color: '#fff',
            fontSize: 16,
            fontWeight: 'bold',
            paddingHorizontal: 14,
            marginVertical: 6
        },
        placename: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            paddingHorizontal: 14,
            marginBottom: 30
        },
        BookTicketBtn: {
            position: 'absolute',
            right: 12, 
            top: 420,
            backgroundColor: scheme === 'dark' ? DARK_THEME : LIGHT_THEME,
            padding: 16, 
            borderRadius: 40,
            elevation: 5
        },
        bookTicketText: {
            color: scheme === 'dark' ? '#000' : '#fff',
            fontSize: 14,
        }
    })

    return (
        <View style={{flex: 1}}>
            
            <ImageBackground
                source={Pic}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                <Text style={styles.tagLine}> Discover Dubai </Text>
                <Text style={styles.placename}>Explore the scenic beauty of huge buildings </Text>

                <TouchableOpacity style={{position: 'absolute', right: 20, top: 70, backgroundColor: '#fff', padding: 10, borderRadius: 40}}>
                    <Feather name="heart" size={22} color="red" />
                </TouchableOpacity>
            </ImageBackground>

            <TouchableOpacity onPress={() => navigation.navigate('Buy Now')} style={styles.BookTicketBtn}>
                <Text style={styles.bookTicketText}>Book Now</Text>
            </TouchableOpacity>

            <ScrollView style={{marginTop: '10%'}}>
                <Text style={{padding: 14, fontSize: 22, fontWeight: 'bold', color: colors.text}}>About the Place </Text>
                <Text style={{ paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26, color: colors.text}}>Dubai is a city and emirate in the United Arab Emirates known for luxury shopping, ultramodern architecture and a lively nightlife scene. Burj Khalifa, an 830m-tall tower, dominates the skyscraper-filled skyline. At its foot lies Dubai Fountain, with jets and lights choreographed to music. On artificial islands just offshore is Atlantis, The Palm, a resort with water and marine-animal parks. </Text>

                <View>
                    <Text style={{padding: 14, fontSize: 20, fontWeight: 'bold', color: colors.text}}>Suggested Places</Text>
                    
                    <FlatList
                        data={GalleryData}
                        horizontal={true}
                        showsHorizontalScrollIndicator={false}
                        renderItem={({item}) => {
                            return (
                                <View style={{paddingBottom: 40}}>
                                    <View>
                                        <Image source={item.image} style={{ width: 150, height: 150, marginHorizontal: 10, borderRadius: 10 }} />
                                        <Feather name="map-pin" size={16} color="white" style={{marginHorizontal: 14, marginTop: 4, position: 'absolute', left: 10, bottom: 10}} />
                                        <Text style={{marginHorizontal: 14, marginTop: 4, position: 'absolute', left: 30, bottom: 10, color: '#fff', fontSize: 14}}>{item.title}</Text>
                                    </View>

                                </View>
                            )
                        }}
                    />
                </View>
            </ScrollView>
            
        </View>
    )
}

export default ReviewDetails
