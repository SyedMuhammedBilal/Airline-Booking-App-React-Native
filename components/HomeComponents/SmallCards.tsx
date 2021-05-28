import React from 'react'
import { View, StyleSheet, Image } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

const SmallCards = ({ 
  width, 
  left, 
  top, 
  height, 
  color01, 
  color02, 
  image, 
  imageWidth, 
  imageHeight, topImg, leftImg }) => {
    
  const Styles = StyleSheet.create({
    boxContainer: {
      position: 'absolute',
      width: width,
      height: height,
      left: left,
      top: top,
      // backgroundColor: '#E80B0B',
      borderRadius: 20
    },
    boxImage: {
      position: 'absolute', width: imageWidth, height: imageHeight, top: topImg, left: leftImg,
    }
  })
  return (
    <View style={{flexDirection: 'row'}}>
      <LinearGradient colors={[ color01, color02 ]} style={Styles.boxContainer}>
        <Image style={Styles.boxImage} source={image} />
      </LinearGradient>
    </View>
  )
}

export default SmallCards
