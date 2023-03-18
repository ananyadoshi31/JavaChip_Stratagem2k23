import { CurrentRenderContext, DrawerActions, DrawerRouter, NavigationContainer } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import {
    StyleSheet,
    Text,
    View,
    Image,
    Alert,
    TextInput,
    ImageBackground,
    Button,
    Pressable,
    // CustomButton,
} from 'react-native';
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
// import { firebase } from '../../config';
// import { useFonts } from 'expo-font';
// import * as firebase from 'firebase';
import * as ImagePicker from 'expo-image-picker';
import { auth, db, storage } from '../../config';
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";

export default function Register({ navigation }) {
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState(null);
    const [picture, setPicture] = useState(null);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        console.log(result);

        if (!result.canceled) {
            setImage(result.uri);
        }
    };
    useEffect(() => {
        const uploadImage = async () => {
            const blobImage = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function () {
                    resolve(xhr.response);
                };
                xhr.oneerror = function () {
                    reject(new TypeError("Network request failed"));
                };
                xhr.responseType = "blob"
                xhr.open("GET", image, true);
                xhr.send(null);
            });
            const metadata = {
                contentType: 'image/jpeg'
            };

            const storageRef = ref(storage, 'Images/' + Date.now());
            const uploadTask = uploadBytesResumable(storageRef, blobImage, metadata);

            // Listen for state changes, errors, and completion of the upload.
            uploadTask.on('state_changed',
                (snapshot) => {
                    // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
                    const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
                    console.log('Upload is ' + progress + '% done');
                    switch (snapshot.state) {
                        case 'paused':
                            console.log('Upload is paused');
                            break;
                        case 'running':
                            console.log('Upload is running');
                            break;
                    }
                },
                (error) => {
                    // A full list of error codes is available at
                    // https://firebase.google.com/docs/storage/web/handle-errors
                    switch (error.code) {
                        case 'storage/unauthorized':
                            // User doesn't have permission to access the object
                            break;
                        case 'storage/canceled':
                            // User canceled the upload
                            break;

                        // ...

                        case 'storage/unknown':
                            // Unknown error occurred, inspect error.serverResponse
                            break;
                    }
                },
                () => {
                    // Upload completed successfully, now we can get the download URL
                    getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                        console.log('File available at', downloadURL);
                    });
                }
            );


        }
        if (image != null) {
            uploadImage();
            setImage(null);
        }
    }, [image])


    // const [text1, setText1] = useState('')
    // const [text2, setText2] = useState('')

    // const AddData=()=>{
    //     const db =getDatabase();

    //     set(ref(db, 'users/'+text1),{
    //         Application_Number:text1,
    //         Query:text2,
    //     });
    //     setText1('')
    //     setText2('')
    // }

    return (


        <ScrollView
            style={styles.container}
        >
            {/* <View style={styles.image_view}> */}
            <Image style={styles.login_logo} source={require('../../assets/user.png')} />
            {/* </View> */}
            <Text style={{ fontSize: 35, left: 125, top: 90 }}>
                Register
            </Text>
            <View style={styles.inner}>
                <View style={styles.innerinner}>
                    <View style={styles.innerinnerinner}>
                        <Text style={styles.textmail}>
                            Name:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            // onChangeText={(email)=>setEmail(email)}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <View style={{ paddingBottom: 20 }}>

                        </View>
                        <Text style={styles.textmail}>
                            Email:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            // onChangeText={(email)=>setEmail(email)}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <View style={{ paddingBottom: 20 }}>

                        </View>
                        <Text style={styles.textmail}>
                            Phone Number:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            // onChangeText={(email)=>setEmail(email)}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <View style={{ paddingBottom: 20 }}>

                        </View>
                        <Text style={styles.textmail}>
                            Address:
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Name"
                            // onChangeText={(email)=>setEmail(email)}
                            autoCorrect={false}
                            autoCapitalize="none"
                        />
                        <View style={{ paddingBottom: 20 }}>

                        </View>
                        <TouchableOpacity
                            style={styles.button}
                            onPress={pickImage}
                        >
                            <Text style={styles.stylebutton} z>
                                Upload Image
                            </Text>
                        </TouchableOpacity>

                        <View style={{ paddingBottom: 20 }}>

                        </View>
                        <TouchableOpacity
                            style={styles.button1}
                        >
                            <Text style={styles.stylebutton}>
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ScrollView>

    )
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        backgroundColor: "#ffffff",
    },
    inner: {
        backgroundColor: "#111111",
        height: 958,
        width: '100%',
        borderRadius: 40,
        top: 150,
    },
    innerinnerinner: {
        backgroundColor: '#ffffff',
        height: 954,
        top: 50,
        width: '100%',
        borderRadius: 40,
    },
    image_view: {
        height: 700,
        width: 600,
        // paddingRight:250,
        backgroundColor: '#00b',

        // alignSelf:"center",
    },
    text1: {
        color: "#000000",
        backgroundColor: '#00b',
        // fontFamily:'Sarabun',
        textAlign: 'center',
        top: 45,
        left: 110,
    },
    innerinner: {
        backgroundColor: '#FE0000',
        height: 954,
        top: 50,
        width: '100%',
        borderRadius: 40,
    },
    text: {
        fontSize: 28,
        color: '#000000',
        // fontFamily:'Sarabun',
        textAlign: 'center',
        top: 10,
    },
    login_logo: {
        width: 140,
        height: 160,
        // paddingBottom:40,
        left: 120,
        top: 71,
        // backgroundColor:"#00b",
        // marginBottom:50,
        // alignItems:'center',
        // top:255
        // alignSelf:"center",
    },
    textmail: {
        // fontFamily:'Sarabun',
        color: '#000000',
        // backgroundColor:"#00b",
        top: 30,
        left: 58,
        fontSize: 20,
        // padding:5,
    },
    input: {
        top: 30,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 15,
        marginTop: 10,
        width: '70%',
        height: 50,
        paddingLeft: 10,
        left: 55,
    },
    forget: {
        // fontFamily:'Sarabun',
        color: '#000000',
        left: 60,
        top: 35,
        fontSize: 15,
    },
    button: {
        backgroundColor: "#D9D9D9",
        borderRadius: 15,
        top: 45,
        width: 166,
        height: 48,
        left: 110,
        alignItems: 'center',

    },
    button1: {
        backgroundColor: "#2A263C",
        borderRadius: 15,
        top: 45,
        width: 146,
        height: 48,
        left: 120,
        alignItems: 'center',

    },
    stylebutton: {
        // fontFamily:'Sarabun',
        fontSize: 20,
        color: '#000000',
        // backgroundColor:'#00b'
        textAlign: 'center',
        top: 5,
    },
    stylebutton: {
        // fontFamily:'Sarabun',
        fontSize: 20,
        color: '#ffffff',
        // backgroundColor:'#00b'
        textAlign: 'center',
        top: 7,
    },
    textnew: {
        color: '#000000',
        textAlign: 'center',
        top: 70,
        // fontFamily:'Sarabun',
        textAlign: 'center',
    }
})
