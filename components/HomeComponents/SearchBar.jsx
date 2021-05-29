import React from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { Icon } from 'react-native-elements'
import {useTheme} from '@react-navigation/native'

const SearchBar = () => {
    const { colors } = useTheme();

    const Styles = StyleSheet.create({
        searchComponent: {
            marginHorizontal: '5%',
            backgroundColor: '#fff',
            paddingTop: 10,
            paddingBottom: 10,
            borderRadius: 10,
            flexDirection: 'row'
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
                    color="grey"
                />
                <TextInput 
                    placeholder="Search"
                    style={Styles.searchInput}
                />
            </View>
    )
}

export default SearchBar