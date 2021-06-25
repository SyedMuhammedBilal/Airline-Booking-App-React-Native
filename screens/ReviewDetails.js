import React, { useState } from 'react'
import {View, Text, StyleSheet, ImageBackground, ScrollView, TouchableOpacity, FlatList, useColorScheme, Image} from 'react-native'
import Pic from '../assets/E-portrait2.png'
import {useTheme} from '@react-navigation/native'
import {color} from 'react-native-elements/dist/helpers'
import {colors} from 'react-native-elements'
import {Feather} from '@expo/vector-icons'
import {GalleryData} from '../Data/GalleryData'
import Button from '../components/DetailsComponent/Button'
// import { useRoute } from '@react-navigation/native';


const ReviewDetails = ({ route ,navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    // const route = useRoute();

    const { name, slogan, coverImage, desc, price } = route.params;

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
            marginVertical: 6,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
        },
        placename: {
            color: '#fff',
            fontSize: 24,
            fontWeight: 'bold',
            paddingHorizontal: 14,
            marginBottom: 30,
            textShadowColor: 'rgba(0, 0, 0, 0.75)',
            textShadowOffset: {width: -1, height: 1},
            textShadowRadius: 10
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
                source={coverImage ? coverImage : Pic}
                style={styles.image}
                imageStyle={{borderBottomLeftRadius: 30, borderBottomRightRadius: 30}}
            >
                <Text style={styles.tagLine}>{name} </Text>
                <Text style={styles.placename}>{slogan} </Text>

                <TouchableOpacity style={{position: 'absolute', right: 20, top: 70, backgroundColor: '#fff', padding: 10, borderRadius: 40}}>
                    <Feather name="heart" size={22} color="red" />
                </TouchableOpacity>
            </ImageBackground>

            <TouchableOpacity onPress={() => navigation.navigate('Buy Now', {
                screen: 'Buy Now',
                params: {
                    ticketPrice: price
                }
            })} style={styles.BookTicketBtn}>
                <Text style={styles.bookTicketText}>Book Now</Text>
            </TouchableOpacity>

            <ScrollView style={{marginTop: '10%'}}>
                <Text style={{padding: 14, fontSize: 22, fontWeight: 'bold', color: colors.text}}>About the Place </Text>
                <Text style={{ paddingHorizontal: 14, fontSize: 14, fontWeight: 'normal', justifyContent: 'flex-start', textAlign: 'justify', lineHeight: 26, color: colors.text}}>{desc} </Text>

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
