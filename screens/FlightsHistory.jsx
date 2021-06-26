import React, { useEffect, useState } from 'react'
import {Text, View, StyleSheet, TouchableOpacity, useColorScheme, ScrollView} from 'react-native'
import {useTheme} from '@react-navigation/native'
import MainHeading from '../Global/MainHeading'
import GradientText from '../Global/GradientText'
import {LinearGradient} from 'expo-linear-gradient'
import { AntDesign } from '@expo/vector-icons';
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'
import { ActivityIndicator } from "react-native";
import {FETCH_POSTS_QUERY} from '../graphql/graphqlQuery'


const FlightsHistory = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'


    const { loading, data } = useQuery(FETCH_POSTS_QUERY);

    const styles = StyleSheet.create({
        textContainer: {
            marginTop: 10
        },
        cardContainer: {
            marginVertical: 50
        },
        card: {
            width: 385,
            height: 64,
            borderRadius: 20,
            // backgroundColor: 'red',
            // backgroundColor: '#fff',
            shadowColor: '#fc2634',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.7,
            shadowRadius: 29,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: 30
        },
        cardContent: {
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center'
        }
    })

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={{marginLeft: 20, flex: 1}}>
                <View style={styles.textContainer}>
                    <GradientText style={{ fontSize: 30, fontWeight: '700', marginTop: 20 }} color01="#FE5762" color02="#FF6BA1">Flights history</GradientText>
                </View>

                {/* Flights */}
                {loading ? <ActivityIndicator /> : 
                    <View style={styles.cardContainer}>
                        {data && data?.getPosts?.map((post, index) => {
                            return (
                                <TouchableOpacity key={index} onPress={() => navigation.navigate('Ticket Details', {
                                    screen: 'Ticket Details',
                                    params: {
                                        ticketID: post?.id
                                    }
                                })} style={styles.card}>
                                    <LinearGradient colors={['#fc2634', '#ff4551']} start={{x: -1.1, y: -1}} end={{x: 1.5, y: -1}} style={styles.card}>
                                        <View style={styles.cardContent}>
                                            <View style={{paddingLeft: 10}}>
                                                <AntDesign name="dingding" size={34} color="white" />
                                            </View>
                                            <View style={{paddingLeft: 15}}>
                                                <Text style={{color: colors.text, fontSize: 18, fontWeight: '600'}}>{post && post?.username}</Text>
                                                <Text style={{color: colors.text}}>{post && post?.placeName}</Text>
                                            </View>
                                        </View>
                                        <View style={{paddingRight: 20}}>
                                            <Text style={{color: colors.text, fontSize: 18, fontWeight: '600'}}>${post && post?.amount}</Text>
                                        </View>
                                    </LinearGradient>
                                </TouchableOpacity>
                            )
                        })}
                    </View>
                } 
            </View>
        </ScrollView>
    )
}

export default FlightsHistory
