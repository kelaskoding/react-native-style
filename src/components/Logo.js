import React, { Component } from 'react';
import {Image, View, StyleSheet, Text} from 'react-native';


export default class Logo extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Image source={require('../images/icon.png')} style={{width: 70, height: 70}}/>
                <Text style={styles.logoText}>Welcome to MyApp</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
      backgroundColor: '#455a64'
    },
    logoText: {
        marginVertical: 15,
        fontSize: 18,
        color: 'rgba(255,255,255,0.7)'
    }
});