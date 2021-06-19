import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions, ScrollView, useColorScheme } from 'react-native'
import {useTheme} from '@react-navigation/native'

const OPTIONS = [
    'Sharjah',
    'New York',
    'Karachi',
    'Toronto',
    'Istanbul',
    'Makkah',
    'Paris'
]

const { width, height } = Dimensions.get('window');

const Index = (props) => {
    const { colors } = useTheme();
    const scheme = useColorScheme();
    const DARK_THEME = '#fff'
    const LIGHT_THEME = '#212121'

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center'
        },
        modal: {
            backgroundColor: 'rgb(28, 28, 30)',
            borderRadius: 10    
        },
        option: {
            alignItems: 'flex-start',
        },
        text: {
            margin: 20,
            fontSize: 18,
            fontWeight: 'bold',
            color: colors.text
        }
    })

    const onPressItem = (option) => {
        props.changeModalVisiblity(false);
        props.setData(option)
    }

    const option = OPTIONS.map((item, index) => {
        return (
            <TouchableOpacity
                style={styles.option}
                key={index}
                onPress={() => onPressItem(item)}
            >
                <Text style={styles.text}>
                    {item}
                </Text>
            </TouchableOpacity>
        )
    })
    

    return (
        <TouchableOpacity
            onPress={() => props.changeModalVisiblity(false)}
            style={styles.container}
        >
            <View style={[styles.modal, { width: width - 20, height: height / 2 }]}>
                <ScrollView>
                    {option}
                </ScrollView>
            </View>
        </TouchableOpacity>
    )
}

export default Index
