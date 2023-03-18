import React, { useState,useEffect,Component } from "react";
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
    TouchableOpacity,

    // CustomButton,
  } from 'react-native';
// import { RollInRight } from "react-native-reanimated";
import { NavigationContainer } from "@react-navigation/native";
// import { Component } from "react/cjs/react.production.min";

export default function Main({navigation})
{
  
    
//   const onPressHandlerScan=()=>{
//     navigation.navigate('SelectFruit')
    
//   }
//   const onPressHandlerSupport=()=>{
//     navigation.navigate('Support')
    
//   }
  const onPressHandlerRegister=()=>{
    navigation.navigate('Register')
    
  }

// navi=()=>{
//     this.props.navigation.navigate('Verify')
// }

//   const[name,setFirstName]=useState('')
//     useEffect(()=>{
//         firebase.firestore().collection('users')
//         .doc(firebase.auth().currentUser.uid).get()
//         .then((snapshot)=>{
//             if(snapshot.exists){
//                 setFirstName(snapshot.data())
//             }
//             else{
//                 console.log('User doesnot exists!')
//             }
//         })
//     }, [])


    return (

    
        <View style={styles.container}>
       
            <ImageBackground 
              source={require('../../assets/proj_background.png')} 
              style={styles.img}
            >
              
          <View style = {styles.logo}>
              <Image style={styles.stylelogo}  source = {require('../../assets/logo.png')} />
          </View>
             
              
          <TouchableOpacity style={styles.button1} 
          onPress={onPressHandlerRegister} 
          >
          {/* <Image style = {styles.logo} source = {require('../../assets/scan_img.png')} /> */}
            <Text style={styles.stylebutton1}>Register as Patient</Text>
          </TouchableOpacity>
  
          <TouchableOpacity style={styles.button3}
              
          >
          {/* <Image style = {styles.logo} source = {require('../../assets/support_img.png')} /> */}
            <Text style={styles.stylebutton3}>Verification</Text>
          </TouchableOpacity>
   
  
          </ImageBackground>    
         </View>
  
      )

}
    



  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    stylelogo:{
        top:100,
        height:'25%',
        width:'25%',
        // alignSelf:'center',
        alignItems:'center',
        left:50,
    },
    logo:{
        height:400,
        width:1250,
    },


    img:{
        // left:10,
      height:'100%',
      width:'100%'
    },
    stylebutton1:{
      color:"#ffffffff",
      fontSize:25,

      textAlign:'center'
    },

    stylebutton3:{

      color:"#ffffffff",
    
      fontSize:25,
  
    
    textAlign:'center'

    },
    button1: {
        backgroundColor:"#E81E31",
   
        alignItems: 'center',
        alignSelf:'center',
        justifyContent: 'center',
        width:"80%",
        height:"10%",
    
        marginTop:-60,
  
        borderRadius:20,
  

      
    },

    button3: {
      backgroundColor:"#E81E31",
   
      alignItems: 'center',
      alignSelf:'center',
      justifyContent: 'center',
      width:"80%",
      height:"10%",
  
      marginTop:25,

      borderRadius:20,

      
    },

    
  })