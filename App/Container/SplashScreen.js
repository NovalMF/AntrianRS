import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon } from 'native-base';
import Images from '../Library/Images';

export default class SplashScreen extends Component {

    componentDidMount(){
        setTimeout (() => {
            this.props.navigation.navigate('Login')
        }, 2000);
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