import React from 'react'
import { TouchableOpacity, Text, StyleSheet, useColorScheme } from 'react-native'
import { TapGestureHandler, State } from 'react-native-gesture-handler'
import Animated from 'react-native-reanimated'
import {colors} from 'react-native-elements'
import {useTheme} from '@react-navigation/native'

const Button = ({ navigation, gestureHandler, nextPage }) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();

    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    const styles = StyleSheet.create({
        BookTicketBtn: {
            position: 'absolute',
            right: 12, 
            top: -25,
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
        <TapGestureHandler { ...gestureHandler }>
            <Animated.View>
                <TouchableOpacity onPress={() => nextPage.navigate('Buy Now')} style={styles.BookTicketBtn}>
                    <Text style={styles.bookTicketText}>Book Now</Text>
                </TouchableOpacity>
            </Animated.View>
        </TapGestureHandler>
    )
}

export default Button
