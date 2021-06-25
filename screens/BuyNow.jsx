import React, { useState, useEffect, useContext } from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, useColorScheme, TextInput, Modal, TouchableOpacity } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native'
import MainHeading from '../Global/MainHeading'
import Index from '../components/BuyNowComponent/index';
import ApplePay from '../tones/iphone_pay.mp3'
import { Audio } from 'expo-av'
import gql from 'graphql-tag'
import {useMutation} from '@apollo/react-hooks'
import {AuthContext} from '../store/context.js';
import { ActivityIndicator } from "react-native";
import {FETCH_POSTS_QUERY} from '../graphql/graphqlQuery';
// import { ActivityIndicator } from "react-native";

const BuyNow = ({ navigation, route }) => {

    

    const { user } = useContext(AuthContext)

    const [chooseData, setChooseData] = useState('Select your place');
    const [soundObj, setSoundObj] = useState(new Audio.Sound);

    const [passportNumber, setPassportNumber] = useState('');
    const [placename, setplaceName] = useState('');
    const [price, setPrice] = useState('');
    const [person, setPersons] = useState('');
    const [errors, setErrors] = useState(null)

    const [view, setView] = useState(false);

    const { colors } = useTheme();
    const { ticketPrice } = route.params;


    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    useEffect(() => {
        async function loadSounds() {
            await soundObj.loadAsync(require('../tones/iphone_pay.mp3'))
        }
        
        loadSounds();
    }, [])

    const doPlay = () => {
        soundObj.playAsync();
    } 

    const setData = (option) => {
        setChooseData(option)
        setplaceName(chooseData)
    }

    const [ newPost, { loading } ] = useMutation(CREATE_POST_MUTATION, {
        update(proxy, result) {
            const data = proxy.readQuery({
                query: FETCH_POSTS_QUERY
            })
            data.getPosts = [result.data.createPost, ...data.getPosts];
            proxy.writeQuery({ query: FETCH_POSTS_QUERY, data })
            console.log(result)
            navigation.navigate('Success')
        },
        onError(error) {
            console.log(JSON.stringify(error, null, 2))  
            setErrors('please enter all fields')
        },
        variables: {
            passport: passportNumber,
            persons: person,
            amount: price,
            placeName: chooseData,
        }
    })

    const styles = StyleSheet.create({
        container: {
            flex: 1,
        },  
        bottomSheet: {
            position: 'absolute',
            bottom: 0,
            height: 400,
            backgroundColor: '#000',
            borderRadius: 25,
    
        },
        logo: {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 55
        },
        logoBox: {
            height: 100,
            alignItems: 'center',
            justifyContent: 'center',
            width: 100,
            borderRadius: 15,
            backgroundColor: '#fc3872',
            shadowColor: '#fc3872',
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 1,
            shadowRadius: 60,
        },
        logoText: {
            marginTop: 30
        },
        inputFields: {
            marginTop: 40
        },
        inputBox: {
            marginBottom: 20
        },
        textInputContainer: {
            marginHorizontal: '4%',
            backgroundColor: scheme === 'dark' ? 'rgb(28, 28, 30)' : '#fff',
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 10,
            flexDirection: 'row',
            zIndex: -1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        textInput: {
            fontSize: 16,
            width: '100%',
            color: colors.text,
            paddingLeft: 10
        },
        textDropDownContainer: {
            marginHorizontal: '4%',
            backgroundColor: scheme === 'dark' ? 'rgb(28, 28, 30)' : '#fff',
            paddingTop: 12,
            paddingBottom: 12,
            borderRadius: 10,
            flexDirection: 'row',
            zIndex: -1,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around'
        },
        dropDownInput: {
            fontSize: 16,
            width: '100%',
            color: 'grey',
            paddingLeft: 20,
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
            marginHorizontal: 20,
            display:'flex',
            flexDirection: 'row'
        }
    })

    const changeModalVisiblity = (bool) => {
        setView(bool);
    }

    

    const playAfterOneSecond = () => {
        setTimeout(() => {
            doPlay()
        }, 1150)
    }

    const handleData = () => {
        newPost();  
        console.log(price)
        console.log(chooseData)
        console.log(person)
        console.log(passportNumber)
    }

    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
            <View style={styles.container}>
                {/* Main heading */}
                <View style={{marginHorizontal: 15, marginTop: 15, display: 'flex', alignItems: 'center', flexDirection: 'row'}}>
                    <MainHeading name="Book your Ticket" />
                    <AntDesign name="checkcircleo" size={30} color="green" style={{paddingLeft: 15, paddingTop: 10}} />
                </View>

                {/* Main Icon */}
                <View style={styles.logo}>
                    <View style={styles.logoBox}>
                        <AntDesign name="enviromento" size={50} color="white" />
                    </View>

                    <View style={styles.logoText}>
                        <Text style={{color: colors.text, textAlign: 'center', fontWeight: '700'}}>PAYING</Text>
                        <Text style={{color: colors.text, textAlign: 'center', fontSize: 15.6, letterSpacing: 0.5, paddingTop: 2,}}>{user && user.username}</Text>
                        <Text style={{color: colors.text, fontSize: 45, letterSpacing: 0.5, paddingTop: 20, textAlign: 'center'}}>${ticketPrice}</Text>

                    </View>
                </View>

                {/* Text Inputs */}
                <View style={styles.inputFields}>
                    <View style={styles.inputBox}>
                        <Text style={{color: colors.text, paddingHorizontal: 20, paddingBottom: 10, fontSize: 16}}>Passport number</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                value={passportNumber}
                                onChangeText={(val) => setPassportNumber(val)}
                                name="passport"
                                style={styles.textInput}
                                placeholder="Passport number"
                            />
                        </View>
                    </View>
                    <View style={{paddingBottom: 20}}>
                        <Text style={{color: colors.text, paddingHorizontal: 20, paddingBottom: 10, fontSize: 16}}>Place name</Text>
                        
                        <TouchableOpacity onPress={() => changeModalVisiblity(true)} style={styles.textDropDownContainer}>
                            <Text style={styles.dropDownInput}> {chooseData} </Text>
                            <AntDesign name="downcircleo" size={22} color="white" style={{paddingRight: 30}} />
                        </TouchableOpacity>
                        <Modal
                            transparent={true}
                            animationType="slide"
                            visible={view}
                            onRequestClose={() => changeModalVisiblity(false)}
                        >
                            <Index setData={setData} changeModalVisiblity={changeModalVisiblity}  />
                        </Modal>
                        
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={{color: colors.text, paddingHorizontal: 20, paddingBottom: 10, fontSize: 16}}>Price</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                autoCapitalize='none'
                                name="price"
                                value={price}
                                onChangeText={(val) => setPrice(val)}
                                autoCorrect={false}
                                style={styles.textInput}
                                placeholder="Enter price here"
                            />
                        </View>
                    </View>
                    <View style={styles.inputBox}>
                        <Text style={{color: colors.text, paddingHorizontal: 20, paddingBottom: 10, fontSize: 16}}>Persons</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                name="persons"
                                value={person}
                                onChangeText={(val) => setPersons(val)}
                                style={styles.textInput}
                                placeholder="Persons"
                            />
                        </View>
                    </View>

                    <View style={{marginBottom: 50, marginTop: 10}}>
                        {loading ? <ActivityIndicator /> : 
                            <TouchableOpacity onPress={() => {playAfterOneSecond(); handleData()}} style={styles.bookBtn}>
                                <Text style={{
                                    color: '#fff',
                                    fontSize: 18,
                                    fontWeight: '600'
                                }}> Book your Ticket Now </Text>
                                <AntDesign name="rightcircleo" size={24} color="white" />
                            </TouchableOpacity>
                        }
                        
                    </View>
                </View>
            </View>
        </ScrollView>
    )
};

const CREATE_POST_MUTATION = gql`
    mutation createPost(
        $passport: String!
        $placeName: String!
        $amount: String!
        $persons: String!
    ){
        createPost(
            placeName: $placeName
            amount: $amount
            passport: $passport
            persons: $persons
        
          ) {
          id
          createdAt
          placeName
          createdAt
          username
          amount
          persons
          passport
        }
    }
`

export default BuyNow
