import { StyleSheet, Text, TouchableOpacity, View, FlatList, useEffect } from 'react-native'
import React, { useState } from 'react'
import { Button, IconButton, MD3Colors } from 'react-native-paper';
import { HStack, NativeBaseProvider, Input } from 'native-base';
import * as Animatable from 'react-native-animatable';


export default function LoadAllVehicles(route, navigation) {
    const [DATA, setDATA] = useState(['Kamal']);

    const [fullname, setFullName] = useState(route.params.fullname);
    const [username, setUsername] = useState(route.params.username);

    const [posts, setPosts] = useState([]);
    const [show, setShow] = React.useState(false);


    loadAll = () => {
        fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "GET",
            headers: {
                'content-type': 'application/json'
            }
        })
            .then((response) => response.json())
            .then((json) => setPosts(json));
    }

    return (
        <NativeBaseProvider style={styles.container}>

            <View style={styles.headerTop}>
                <Button icon="logout" mode="text" textColor='#fff' style={styles.logout_btn} onPress={() => { navigation.navigate("Login"); }} >
                    Log Out
                </Button>
                <Text style={styles.title} onPress={loadAll()}>YOUR COLLECTION</Text>

                <HStack space={5} style={styles.hstack}>
                    <View style={styles.search}>
                        <Input type={Text} color="white" size="md" w="100%" py="0" InputRightElement={<Button size="xs" rounded="none" type="Button" w="1/6" h="full" onPress={() => { searchCars(); }}>
                            {show ? "Search" : "Search"}
                        </Button>} placeholderTextColor={'white'} placeholder="Search Here" />
                    </View>

                    <Button icon="car" mode="contained-tonal" textColor='#0A0A0A' buttonColor='#c0edfc' style={styles.uploadImage_btn} onPress={() => { navigation.navigate("AddCar", { username }); }} >
                        Add Vehicle
                    </Button>

                </HStack>

            </View>


            <Animatable.View
                animation="fadeInUpBig"
                duration={1500}
                style={styles.footer}>
                <FlatList
                    data={posts}
                    renderItem={({ item }) =>
                        <TouchableOpacity style={{ borderWidth: 1, marginBottom: '5%', padding: 5, marginTop: 10 }} onPress={() => { console.log("hello"); }}>
                            <Text style={{ marginBottom: 10, fontWeight: 'bold', color: 'black' }} >{item.title}</Text>
                            <Text style={{ marginBottom: 10, color: 'black' }} >{item.body}</Text>
                        </TouchableOpacity>
                    }
                />
            </Animatable.View>


        </NativeBaseProvider>
    )
}

const styles = StyleSheet.create({
    uploadImage_btn: {
        position: 'relative',
        bottom: 12,
        height: 40,
        width: '32%',
        marginLeft: 80,
        marginTop: '1%',
        borderRadius: 100,
        left: 160
    },
    headerTop:{
        backgroundColor: '#964635'
    },
    container: {
        flex: 1,
        backgroundColor: '#964635'
    },
    hstack: {
        marginTop: 30,
        height: "5%",
        width: "100%",
        backgroundColor: '#964635'
    },
    title: {
        color: "#fff",
        fontSize: 30,
        alignSelf: "center",
        marginTop: 15,
        fontWeight: '400',
        letterSpacing: 1
    },
    search: {
        position: "absolute",
        left: 10,
        top: -10,
        height: 70,
        width: "60%",
        
    },
    logout_btn: {
        position: 'relative',
        top: 6,
        height: 40,
        width: '30%',
        marginLeft: 115,
        borderRadius: 100,
        left: 160
    },
    footer: {
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    }
})