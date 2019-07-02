
import React, { Component } from 'react';
import {View, StyleSheet, Text, TextInput, TouchableOpacity} from 'react-native';

export default class Signup extends Component{
    render(){
        return(
            <View style={styles.container}>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Input Fullname'
                    placeholderTextColor='#ffffff'
                    selectionColor='#ffffff'
                    />
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Input email'
                    placeholderTextColor='#ffffff'
                    selectionColor='#ffffff'
                    keyboardType='email-address'/>
                <TextInput style={styles.inputBox}
                    underlineColorAndroid='rgba(0,0,0,0)'
                    placeholder='Input Password'
                    placeholderTextColor='#ffffff'
                    selectionColor='#ffffff'
                    secureTextEntry={true}
                />
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>Signup</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#455a64'
    },
    inputBox: {
      width: 300,
      backgroundColor: 'rgba(255,255,255,0.3)',
      marginVertical: 5,
      borderRadius: 25,
      paddingHorizontal: 16,
      paddingVertical: 5,
      fontSize: 16,
      color:'#ffffff'
    },
    button: {
      marginVertical: 10,
      paddingVertical: 12,
      width: 300,
      borderRadius: 24,
      backgroundColor: '#1c313a'
    },
    buttonText: {
      fontSize: 16,
      fontWeight: '500',
      color: '#ffffff',
      textAlign: 'center'
    }
  });
  