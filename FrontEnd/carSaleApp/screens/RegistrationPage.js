import { NativeBaseProvider, View ,Text } from 'native-base'
import React from 'react'
import { StyleSheet } from 'react-native'


export default function RegistrationPage() {
  return (
    <NativeBaseProvider >
        <View flex={1} backgroundColor={"black"}>
        <View style={styles.container} >

        </View>
        </View>
    </NativeBaseProvider>
  )
 
}
const styles = StyleSheet.create({
  container:{
    backgroundColor:'#89f98d',
    flex: 1,
    marginTop: 0,
    paddingLeft: 10,
    color: '#05375a',
  }
})