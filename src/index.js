
import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import SvgUri from 'react-native-svg-uri'
//may not need to import styles here once I have other files
import styles from './style'

const Main = () => (
  <Image
  style={{
    flex: 1,

    width: undefined,
    height: undefined
  }}
  source={require('../assets/img/erin.jpg')}
  resizeMode="repeat"
>
 <Text>hiii</Text>
</Image>
)


export default Main

