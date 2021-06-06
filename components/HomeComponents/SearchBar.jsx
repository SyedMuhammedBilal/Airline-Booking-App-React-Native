import React from 'react'
import { View, TextInput, StyleSheet, useColorScheme } from 'react-native'
import { Icon } from 'react-native-elements'
import {useTheme} from '@react-navigation/native'

const SearchBar = () => {
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

    const Styles = StyleSheet.create({
        searchComponent: {
            marginHorizontal: '4%',
            backgroundColor: scheme === 'dark' ? 'rgb(72, 72, 74)' : '#fff',
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            flexDirection: 'row',
            zIndex: -1
        },
        searchInput: {
            fontSize: 16,
            width: '100%',
            color: colors.text
        }
    })
    return (
        <View style={Styles.searchComponent}>
                <Icon
                    name="search"
                    style={{marginHorizontal: '2%'}}
                    color={scheme === 'dark' ? '#fff' : 'grey'}
                />
                <TextInput 
                    placeholder="Search"
                    placeholderTextColor={scheme === "dark" ? '#fff' : 'grey'}
                    style={Styles.searchInput}
                />
            </View>
    )
}

export default SearchBar