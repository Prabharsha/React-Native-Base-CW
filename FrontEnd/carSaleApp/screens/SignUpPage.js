import { NativeBaseProvider } from 'native-base'
import React, { useState } from 'react'
import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Alert,
    TextInput,
    Platform,
    StyleSheet,
    ScrollView,
    StatusBar
} from 'react-native'
import * as Animatable from 'react-native-animatable';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import LinearGradient from 'react-native-linear-gradient';


const SignUpPage = ({ navigation }) => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");


    const [data, setData] = React.useState({
        username: '',
        password: '',
        confirm_password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        confirm_secureTextEntry: true,
    });

    // const textInputChange = (val) => {
    //     if (val.length !== 0) {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: true
    //         });
    //     } else {
    //         setData({
    //             ...data,
    //             username: val,
    //             check_textInputChange: false
    //         });
    //     }
    // }
    // const handlePasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         password: val
    //     });
    // }

    // const handleConfirmPasswordChange = (val) => {
    //     setData({
    //         ...data,
    //         confirm_password: val
    //     });
    // }

    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry
        });
    }

    const updateConfirmSecureTextEntry = () => {
        setData({
            ...data,
            confirm_secureTextEntry: !data.confirm_secureTextEntry
        });
    }

    saveUser = async () => {

        if (username != "" && password != "") {
            console.log(username);
            console.log(password);
            fetch('http://localhost:4000/user', {
                method: 'POST',
                body: JSON.stringify({
                    username: username,
                    password: password
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            })
                .then((response) => response.json())
                .then((json) => {
                    if (json.status === "500") {
                        Alert.alert(json.message);
                    } else {
                        Alert.alert(json.message);
                        clearTextFields();
                    }
                })

                .catch((err) => Alert.alert(err.message));
        } else {
            Alert.alert("Please fill all the fields and try again.")
        }
    }

    const clearTextFields = () => {
        setUsername("");
        setPassword("");
        setRePassword("");
    }



    return (
        <NativeBaseProvider>
            <View style={styles.container}>
                <StatusBar backgroundColor='#964635' barStyle="light-content" />

                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.text_header}> Register Here!</Text>
                </View>
                <Animatable.View
                    animation="fadeInUpBig"
                    style={styles.footer}
                    color={'red'}
                >
                    <ScrollView>
                        <Text style={styles.text_footer} >UserName</Text>
                        <View style={styles.action}>
                            <FontAwesome
                                name="user"
                                color="white"
                                size={20}
                            />
                            <TextInput
                                value={username}
                                placeholder="Your Username"
                                placeholderTextColor={'gray'}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(e) => setUsername(e)}
                            />
                            {data.check_textInputChange ?
                                <Animatable.View
                                    animation="bounceIn"
                                >
                                    <Feather
                                        name="check-circle"
                                        color="green"
                                        size={20}
                                    />
                                </Animatable.View>
                                : null}
                        </View>
                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="gray"
                                size={20}
                            />
                            <TextInput
                                placeholder="Your Password"
                                placeholderTextColor={'gray'}
                                secureTextEntry={data.secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                            // onChangeText={(val) => handlePasswordChange(val)}
                            />
                            <TouchableOpacity
                                onPress={updateSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="grey"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>

                        <Text style={[styles.text_footer, {
                            marginTop: 35
                        }]}>Confirm Password</Text>
                        <View style={styles.action}>
                            <Feather
                                name="lock"
                                color="gray"
                                size={20}
                            />
                            <TextInput
                                value={password}
                                placeholder="Confirm Your Password"
                                placeholderTextColor={'gray'}
                                secureTextEntry={data.confirm_secureTextEntry ? true : false}
                                style={styles.textInput}
                                autoCapitalize="none"
                                onChangeText={(e) => setPassword(e)}
                            />
                            <TouchableOpacity
                                onPress={updateConfirmSecureTextEntry}
                            >
                                {data.secureTextEntry ?
                                    <Feather
                                        name="eye-off"
                                        color="grey"
                                        size={20}
                                    />
                                    :
                                    <Feather
                                        name="eye"
                                        color="gray"
                                        size={20}
                                    />
                                }
                            </TouchableOpacity>
                        </View>
                        <View style={styles.textPrivate}>
                            <Text style={styles.color_textPrivate}>
                                By signing up you agree to our
                            </Text>
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Terms of service</Text>
                            <Text style={styles.color_textPrivate}>{" "}and</Text>
                            <Text style={[styles.color_textPrivate, { fontWeight: 'bold' }]}>{" "}Privacy policy</Text>
                        </View>
                        <View style={styles.button}>
                            <TouchableOpacity
                                style={styles.signIn}
                                onPress={() => { saveUser() }}
                            >
                                <LinearGradient
                                    colors={['#189938', '#41BD60']}
                                    style={styles.signIn}
                                >
                                    <Text style={[styles.textSign, {
                                        color: '#fff'
                                    }]}>Sign Up</Text>
                                </LinearGradient>
                            </TouchableOpacity>

                            <TouchableOpacity
                                onPress={() => navigation.navigate('SignInPage')}
                                style={[styles.signIn, {
                                    borderColor: '#189938',
                                    borderWidth: 1.3,
                                    marginTop: 15
                                }]}
                            >
                                <Text style={[styles.textSign, {
                                    color: '#0A0A0Ak'
                                }]}>Sign In</Text>
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </Animatable.View>
            </View>

        </NativeBaseProvider>
    )


};

export default SignUpPage;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#964635'
    },
    header: {
        flex: 1,
        backgroundColor: '#964635',
        justifyContent: 'flex-end',
        paddingHorizontal: 20,
        paddingBottom: 50
    },
    footer: {
        flex: Platform.OS === 'ios' ? 5 : 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 33
    },
    text_footer: {
        color: 'black',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 0.9,
        borderBottomColor: ' #0A0A0A',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        color: 'green',
        cursorColor: 'gray',
        fontSize: 19,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        paddingLeft: 10,
        color: '#0A0A0A',
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'

    },
    textPrivate: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 20
    },
    color_textPrivate: {
        color: ' #0A0A0A'
    }
});
