import React from 'react'
import { StyleSheet, View } from 'react-native'
import { NativeBaseProvider, Input, Text, Box, VStack, Icon, MaterialIcons, show, Pressable, Button, Image, Heading } from 'native-base'


export default function LogInPage() {
    return (
        <NativeBaseProvider>
            <Box style={styles.boxStyler}>
                <Box style={styles.topBox}>
                <Heading  size={'4xl'} style={styles.h1}>
                    Welcome
                </Heading>
                </Box>
                <VStack style={styles.pane1} space={3} mt='0' alignItems={'center'}>
                
                  <Input mt={10} width="70%" variant="rounded" style={styles.textInput} size="lg" placeholder="UserName" />
                    <Input width="70%" variant="rounded" style={styles.textInput} size="lg" placeholder="Password" />

                    <Button mt={"10%"} width={"55%"} style={styles.button1} size="lg">
                        <Text color={"black"} fontWeight={"bold"}>Log In
                        </Text>
                    </Button>
                </VStack>
                <Button mt={3} style={styles.linkButton} size="md" variant="ghost" colorScheme="dark" width={"40%"} >
                        <Text  color={"#273c75"} >Forgot Password ?</Text>
                    </Button>

                    <Button style={styles.linkButton}  size="md" variant="ghost" colorScheme="dark" width={"40%"}>
                        <Text   color={"#273c75"}> Don't have account ?</Text>
                    </Button>
            </Box>


        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    textInput: {
       
        textAlign: 'center',
        fontSize: 20,

    },
    h1:{
        marginTop:347,
        color:'white',
        marginLeft:145
        
       
    },
    button1: {
        borderRadius: 25,
        color: '#112D4E',
        backgroundColor: '#89f98d',
        fontWeight: 100

    },
    boxStyler: {
        backgroundColor:'white',
        flex: 1,
      
    },
    pane1: {
        marginTop:'10%',
        backgroundColor:'white'
    },
    topBox: {
        backgroundColor: '#112D4E',
        borderBottomLeftRadius:55,
        height: "50%",
        width: "100%",
    },
    linkButton:{
        alignSelf:'center',
        borderRadius:20
    }
})