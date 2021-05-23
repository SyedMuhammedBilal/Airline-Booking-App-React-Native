import React from 'react'
import {View, Text} from 'react-native'

const ReviewDetails = ({ navigation }) => {

    return (
        <React.Fragment>
            <Text style={{color: '#000', marginTop: 20, marginLeft: 20, fontSize: 22, fontWeight: '700', marginBottom: 10}}>
                    Review Details Screens
            </Text>
            <Text style={{marginLeft: 20}}>
                {navigation.getParam('name')}
            </Text>
            <Text style={{marginLeft: 20}}>
               {navigation.getParam('title')}
            </Text>
        </React.Fragment>
    )
}

export default ReviewDetails
