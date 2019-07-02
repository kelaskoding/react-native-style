
import React, { Component } from 'react';
import { Router, Stack, Scene } from 'react-native-router-flux';
import FormLogin from './pages/FormLogin';
import FormSignup from './pages/FormSignup';

export default class Routes extends Component{
    render(){
        return(
            <Router>
                <Stack key="root" hideNavBar="{true}">
                    <Scene key="login" component={FormLogin} title="Login" initial="true"/>
                    <Scene key="signup" component={FormSignup} title="Signup" />
                </Stack>
            </Router>
        );
    }
}