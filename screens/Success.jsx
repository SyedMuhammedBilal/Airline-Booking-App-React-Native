import React from 'react'
import { View, Text, StyleSheet, Image, useColorScheme, TouchableOpacity } from 'react-native'
const SuccessGIF = require('../gif/animation_500_kq2s9kub.gif');
import {useTheme} from '@react-navigation/native'
import GradientText from '../Global/GradientText';
import { AntDesign } from '@expo/vector-icons';

const Success = ({ navigation }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    const styles = StyleSheet.create({
        container: {
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        },
        splashgif: {
          width: '50%',
          height: '20%',
          marginTop: -50
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
            backgroundColor: '#0A84FF',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius:10,
            paddingTop: 15,
            paddingBottom: 15,
            borderRadius: 15,
            marginHorizontal: 10,
            borderWidth: 1,
            display:'flex',
            flexDirection: 'row',
            width: 400
        }
      });

    const { container, splashgif } = styles;


    return (
        <View style={container}>
            <Image source={SuccessGIF} style={splashgif} />
            
            <View style={styles.successText}>

                {/*  */}
                <GradientText style={{ textAlign: 'center', fontSize: 35, fontWeight: '500' }} color01="#3ef4f7" color02="#0c8ffa">Congratulations</GradientText>
                <Text style={{color: colors.text, textAlign: 'center', fontSize: 18, paddingTop: 6}}>Your Ticket has been booked</Text>
            </View>

            <View style={{marginBottom: 50, marginTop: 150}}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.bookBtn}>
                    <Text style={{
                        color: '#fff',
                        fontSize: 18,
                        fontWeight: '400'
                    }}> Back to Home </Text>
                    <AntDesign name="home" size={24} color="white" style={{paddingLeft: 10}} />
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default Success
