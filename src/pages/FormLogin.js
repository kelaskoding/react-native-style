import React, { Component } from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Logo from '../components/Logo';
import Login from '../components/Login';
import { Actions } from 'react-native-router-flux';


export default class FormLogin extends Component{
    signup(){
        Actions.signup();
    }

    render(){
        return(
            <View style={styles.container}>
                <Logo/>
                <Login/>
                <View style={styles.signupTextContent}>
                    <Text style={styles.singUpText}>Don't have an account yet?</Text>
                    <TouchableOpacity onPress={this.signup}>
                        <Text style={styles.signupButton}> Signup</Text>
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
  