import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import Logo from '../components/Logo';
import Signup from '../components/Signup';
import { Actions } from 'react-native-router-flux';


export default class FormSignup extends Component{
    signin(){
        Actions.pop();
    }
    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Signup/>
                <View style={styles.signupTextContent}>
                    <Text style={styles.singUpText}>Already have an account?</Text>
                    <TouchableOpacity onPress={this.signin}>
                        <Text style={styles.signupButton}> Login</Text>
                    </TouchableOpacity>
                </View>
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
    signupTextContent: {
        flexGrow: 1, 
        alignItems: 'flex-end',
        justifyContent: 'center',
        paddingVertical: 5,
        flexDirection: 'row'
    },
    signupButton: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: '500',
    },
    singUpText: {
        color: 'rgba(255,255,255,0.6)',
        fontSize: 16
    }
  });
  