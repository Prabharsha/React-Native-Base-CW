import {
    StyleSheet,
    View,
    Text,
    TouchableOpacity,
    TextInput,
    Platform,
    StatusBar,
    Alert,
    Image,
} from 'react-native'
import React, { useEffect, useState } from 'react'
import * as Animatable from 'react-native-animatable';
import LinearGradient from 'react-native-linear-gradient';
import { Button, IconButton, MD3Colors } from 'react-native-paper';
import { NativeBaseProvider, Box, HStack, Center, VStack, Input, TextArea } from 'native-base'
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default function AddCar({ route, navigation }) {
    const [photo, setPhoto] = useState("");


    const [date, setDate] = useState("");
    const [location, setLocation] = useState("");
    const [description, setDescription] = useState("");

    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <StatusBar backgroundColor='#964635' barStyle="light-content" />

                <View style={styles.header}>
                    <Text style={styles.text_header}>Save Vehicle Deatails</Text>
                </View>

                <Animatable.View animation="fadeInUpBig"
                    style={[styles.footer, {
                    }]}>
                    
                    <VStack space={3} alignItems="center" mt="5%">
                        <Input type="text" style={styles.input} w="80%" placeholder='Date' borderColor={'#9e4c27'} value={date} onChangeText={(e) => { setDate(e) }} />
                        <Input type="text" style={styles.input} require w="80%" placeholder='Location' borderColor={'#9e4c27'} value={location} onChangeText={(e) => { setLocation(e) }} />
                        <TextArea borderColor={'#9e4c27'} placeholder="Description" w="80%" h="20" maxW="300" fontSize={15} value={description} onChangeText={(e) => { setDescription(e) }} />
                    </VStack>

                    <Image style={styles.uploadImageContainer} source={{ uri: photo.uri }} />


                    <HStack space={6} justifyContent={'center'}>

                        <TouchableOpacity>
                            <LinearGradient
                                style={styles.uploadImgButton}
                                colors={['#FFCE36', '#E0D1A4']}
                            >
                                <Text style={[styles.textButton, {
                                    color: '#fff'
                                }]}>Upload Image</Text>
                            </LinearGradient>
                        </TouchableOpacity>


                        <TouchableOpacity>
                            <LinearGradient
                                colors={['#E26838', '#D6A795']}
                                style={styles.uploadImgButton}
                            >
                                <Text style={[styles.textButton, {
                                    color: '#fff'
                                }]}>Open Camera</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    </HStack>
                    
                    <TouchableOpacity>
                            <LinearGradient
                                colors={['#189938', '#41BD60']}
                                style={styles.saveBtn}
                            >
                                <Text style={[styles.textButton, {
                                    color: '#fff'
                                }]}>Save Vehicle</Text>
                            </LinearGradient>
                        </TouchableOpacity>

                </Animatable.View>

            </View>
        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#964635'
    },
    title: {
        color: "black",
        fontSize: 25,
        alignSelf: "center",
        marginTop: 30,
        fontWeight: '500'
    },
    header: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    subContainer:{
        width:'100%',
        height:'70%'
    },
    input:{
        fontSize:14
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 33
    },
    footer: {
        flex: Platform.OS === 'ios' ? 2 : 6,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    uploadImgButton: {
        marginTop: 10,
        marginRight: 60,
        width: '100%',
        height: 38,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
       
    },
    textButton: {
        fontSize: 17,
        fontStyle: 'normal',
    },
    uploadImageContainer: {
        width: "70%",
        height: "40%",
        borderColor: "#9e4c27",
        borderWidth: 1,
        marginTop: 15,
        marginLeft:55
    },
    saveBtn:{
        marginTop: 27,
        width: '93%',
        height: 45,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        marginLeft:13
    }
})