import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import Images from '../Library/Images';
import AsyncStorage from '@react-native-community/async-storage';
import Constant from '../Library/constants';
import { StackActions, NavigationActions } from 'react-navigation';

export default class SplashScreen extends Component {

    componentDidMount() {
        // setTimeout (() => {
        //     this.props.navigation.navigate('Login')
        // }, 2000);
        this.getData()
    }

    async getData() {
        var Token = await AsyncStorage.getItem(Constant.TOKEN)
        console.log('Token', Token)
        if (Token == null || Token == 'TOKEN' || Token == '') {
            setTimeout(() => { this.navigateToLogin() }, 2500)
        } else {
            setTimeout(() => { this.navigateToHomepage() }, 2500)
        }
    }

    navigateToHomepage() {
        const navigation = this.props.navigation;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'HomePage' })],
        });
        navigation.dispatch(resetAction)
    }

    navigateToLogin() {
        AsyncStorage.clear(() => {
            const navigation = this.props.navigation;
            const resetAction = StackActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Login' })],
            });
            navigation.dispatch(resetAction)
        })
    }

    
    render() {
        return (
            <View style={styles.wrapper}>
                <View style={{ width: 200, height: 100, justifyContent: 'center', alignSelf: 'center' }}>
                    <Image source={Images.contohlogo} style={{ width: 80, height: 80, justifyContent: 'center', alignSelf: 'center' }} resizeMode='contain' />
                </View>
            </View>



        );
    }
}

const styles = StyleSheet.create({
    wrapper: {
        backgroundColor: 'white',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});