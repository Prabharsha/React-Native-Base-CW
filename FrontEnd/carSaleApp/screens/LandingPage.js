import * as Animatable from 'react-native-animatable';
import { NativeBaseProvider } from 'native-base'
import React, { useEffect } from 'react'
import {
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Dimensions,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';




export default function landingPage({ navigation }) {
    useEffect(() =>{console.log(navigation);})
    return (
        <NativeBaseProvider>
            <View styles={styles.container}>
                <StatusBar backgroundColor='#964635' barStyle="light-content" />
            </View>
            {/* header */}
            <View style={styles.header}>
               <Animatable.Image
               animation="fadeIn"
                duration={1500}
                
               source={require('../screens/assets/png1.png')}
               style={styles.logo}
               resizeMode="center"
               />
            </View>

            {/* footer part */}
            <Animatable.View style={styles.footer}
                animation="fadeInUpBig">

                <Text style={styles.title}>
                    Welcome !
                </Text>

                <TouchableOpacity onPress={()=>{navigation.navigate("SignInPage")}} >
                <Text style={{color: 'white', marginTop:14,fontSize:17}} >Sign In With Account</Text>
            </TouchableOpacity>
                <View style={styles.button}></View>
                <TouchableOpacity onPress={()=>{navigation.navigate("SignUpPage")}}>
                    <LinearGradient
                        colors={['#189938', '#93E37F']}
                        style={styles.signIn}>
                        <Text style={styles.textSign}>
                            Getting Started
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>

            </Animatable.View>



        </NativeBaseProvider>
    )
}
const {height} = Dimensions.get("screen");
const height_logo = height * 0.4;
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#98969A'
    },
    logo: {
        marginTop:50,
        width: height_logo,
        height: height_logo
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    text_header: {
        color: '#202640',
        fontWeight: '500',
        fontSize: 50,

    },
    footer: {
        flex: 1,
        backgroundColor: '#964635',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,
        paddingVertical: 0,
        paddingHorizontal: 50,
        
    },

    signIn: {
        width: 150,
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        flexDirection: 'row'
        
    },
    text: {
        color: ' #0A0A0A',
        marginTop: 10,
        fontSize: 19

    },
    title: {
        marginTop:100,
        color: '#F6F5F2',
        fontSize: 60,
        fontWeight: '300'
    },
    button: {
        alignItems: 'flex-end',
        marginBottom: 40,
        color:' #0A0A0A'
    },
    textSign: {
        color: ' #0A0A0A',
        fontWeight: 'bold',
        fontSize:15
    }

})
