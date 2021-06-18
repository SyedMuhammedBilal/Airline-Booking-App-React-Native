import React from 'react'
import { Text, View, StyleSheet, Dimensions, ScrollView, useColorScheme, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import {useTheme} from '@react-navigation/native'
import MainHeading from '../Global/MainHeading'

const BuyNow = () => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

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
        },
        textInput: {
            fontSize: 16,
            width: '100%',
            color: colors.text,
            paddingLeft: 10
        }
    })

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
                        <Text style={{color: colors.text, textAlign: 'center', fontSize: 15.6, letterSpacing: 0.5, paddingTop: 2,}}>Shayan Ullah</Text>
                        <Text style={{color: colors.text, fontSize: 45, letterSpacing: 0.5, paddingTop: 20, textAlign: 'center'}}>900$</Text>

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
                                style={styles.textInput}
                                placeholder="Passport number"
                            />
                        </View>
                    </View>
                    <View>
                        <Text style={{color: colors.text, paddingHorizontal: 20, paddingBottom: 10, fontSize: 16}}>Place name</Text>
                        <View style={styles.textInputContainer}>
                            <TextInput
                                autoCapitalize='none'
                                autoCorrect={false}
                                style={styles.textInput}
                                placeholder="Place name"
                            />
                        </View>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default BuyNow
