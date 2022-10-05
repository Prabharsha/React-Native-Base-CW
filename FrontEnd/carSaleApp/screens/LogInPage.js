import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, Input, Text, Box, VStack, Icon, MaterialIcons, show, Pressable, Button,Image } from 'native-base'
import { background } from 'native-base/lib/typescript/theme/styled-system'



export default function LogInPage() {
    return (
        <NativeBaseProvider>
            
            <VStack space={4} mt='80%' alignItems={'center'}>
                <Input  width="65%" variant="rounded" style={styles.textInput} size="lg" placeholder="UserName" />
                <Input  width="65%" variant="rounded" style={styles.textInput} size="lg" placeholder="Password" />

                <Button mt={"10%"} width={"55%"} style={styles.button1} isHovered="true" variant="subtle" size="lg" colorScheme="green">
                    Log In
                </Button>

                <Button size="md" variant="link" colorScheme="darkBlue">
            Forgot Password ?
          </Button>
            </VStack>

        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    textInput: {
        marginBottom: '4%',
        textAlign: 'center',
  
    },
    button1: {
        borderRadius: 25,

    }
})