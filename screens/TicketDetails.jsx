import React from 'react'
import { Text, View, StyleSheet, useColorScheme, Image } from 'react-native'
import GradientText from '../Global/GradientText'
import {useTheme} from '@react-navigation/native'
import gql from 'graphql-tag'
import {useQuery} from '@apollo/react-hooks'
import { ActivityIndicator } from "react-native";

const TicketDetails = ({ navigation, route }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    const { ticketID } = route.params;

    const { data, loading } = useQuery(FETCH_POST_QUERY, {
        variables: {
            postId: ticketID    
        }
    });

    const styles = StyleSheet.create({
        textContainer: {
            marginTop: 10
        },
        ticketContainer: {
            height: '72%',
            marginTop: 50,
            width: '94%',
            backgroundColor: 'rgb(28, 28, 30)',
            borderRadius: 10,
            position: 'relative'
        },
        contentContainer: {
            paddingTop: 20
        },
        date: {
            color: colors.text,
            paddingLeft: 20,
            fontSize: 16,
            paddingBottom: 10
        },
        mainContent: {
            // backgroundColor: '#fff',
            height: '60%',
            marginTop: 40,
            marginHorizontal: 40
        },
        nonDisplay: {
            display: null
        }
    })
    
    return (
        <View style={{marginLeft: 20, flex: 1}}>
            <View style={styles.textContainer}>
                <GradientText style={{ fontSize: 30, fontWeight: '700', marginTop: 20 }} color01="#FE5762" color02="#FF6BA1">Ticket Details</GradientText>
            </View>
            {loading ? <ActivityIndicator style={{marginTop: '50%'}} /> : 
                <View style={styles.ticketContainer}>
                <View style={styles.contentContainer}>
                    <Text style={styles.date}>{data?.getPost?.createdAt.substring(0, 10)}21</Text>

                    <Text style={{ color: colors.text, fontSize: 30, fontWeight: 'bold', textAlign: 'center', paddingTop: 25 }}>Ticket Recipt</Text>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', marginHorizontal: 40, paddingTop: 15}}></View>
                    
                    <View style={styles.mainContent}>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                            <View>
                                <Text style={{color: colors.text}}>Amount</Text>
                            </View>
                            <View>
                                <Text style={{color: colors.text}}>${data?.getPost?.amount}.00</Text>
                            </View>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                            <View>
                                <Text style={{color: colors.text}}>Passport Number</Text>
                            </View>
                            <View>
                                <Text style={{color: colors.text}}>{data?.getPost?.passport}</Text>
                            </View>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                            <View>
                                <Text style={{color: colors.text}}>Place name</Text>
                            </View>
                            <View>
                                <Text style={{color: colors.text}}>{data?.getPost?.placeName}</Text>
                            </View>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                            <View>
                                <Text style={{color: colors.text}}>Passengers</Text>
                            </View>
                            <View>
                                <Text style={{color: colors.text}}>0{data?.getPost?.persons}</Text>
                            </View>
                        </View>
                        <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30}}>
                            <View>
                                <Text style={{color: colors.text}}>Username</Text>
                            </View>
                            <View>
                                <Text style={{color: colors.text}}>{data?.getPost?.username}</Text>
                            </View>
                        </View>
                    <View style={{ borderBottomWidth: 1, borderBottomColor: '#fff', paddingTop: 15}}></View>
                    <View style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 30, marginTop: 20}}>
                            <View>
                                <Text style={{color: colors.text, fontWeight: '600', letterSpacing: 1}}>Total</Text>
                            </View>
                            <View>
                                <Text style={{color: colors.text}}>${data?.getPost?.amount}.00</Text>
                            </View>
                    </View>
                    <Image style={{width: 300, height: 60, position: 'absolute', zIndex: 2, top: 350, left: 2}} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/001/199/360/non_2x/barcode-png.png' }} />

                    </View>
                </View>
            </View>
            }
            
        </View>
    )
}

const FETCH_POST_QUERY = gql`
    query($postId: ID!) {
        getPost(postId: $postId) {
            id
            username
            persons
            placeName
            passport
            amount
            createdAt
        }
    }
`

export default TicketDetails
