import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid, ImageBackground } from 'react-native'
import { View, Container, Icon, Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Library/Images';
import axios from 'axios';
import Api from '../Services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import { NavigationActions, StackActions } from 'react-navigation';
import Fonts from '../Themes/Fonts';

class Register extends Component {
    constructor(props) {
        super(props)
        this.state = {
            authCode: '',
            register: [],
            name: '',
            email: '',
            password: '',
            confirm_password: '',
            notelepon: '',
            pass: true,
            errorMsg: '',
            icon: 'eye',
            isAuthenticated: false
        }
    }
    
    componentDidMount(){
        // this.getregister();
        // this._subscribe = this.props.navigation.addListener('didFocus', () => {
          //do you update if need
        //   this.getData(); 
        // });
      }

    //   async getData() {
    //     var Token = await AsyncStorage.getItem(Constant.TOKEN) 
    //     if (Token == null || Token == 'TOKEN' || Token == '') {
    //         null
    //     } else {
    //       this.navigateToRegister()
    //     }
    //   }

    //   getregister = () => {
    //     const ApiUrl = 'http://api-antrian.aviatapps.id/api/register';
    //     axios.post(ApiUrl)
    //         .then(response => {
    //             this.setState({ register: response.data.data })
    //         })

    // }

      handleregister = () => {
        Api.create().register({
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
            confirm_password: this.state.confirm_password
        }).then((response) => {
            alert(JSON.stringify(response))
            if (response.data.success == true) {
                this.getDataUser(
                    response.data.success,
                    response.data.message,
                )
                this.navigateToRegister()
            } else {
                this.setState({ errorMsg: response.data.message }) 
            }
        })
      }

      navigateToRegister() { 
        const navigation = this.props.navigation;
        const resetAction = StackActions.reset({
            index: 0,
            actions: [NavigationActions.navigate({ routeName: 'HomePage' })],
        });
        navigation.dispatch(resetAction) 
    }

    async getDataUser(token, token_expr) {
        console.log(token, token_expr)
        try {
            AsyncStorage.setItem(Constant.TOKEN, token)
            AsyncStorage.setItem(Constant.TOKEN_EXPR, token_expr)
        } catch {
            AsyncStorage.setItem(Constant.TOKEN, '')
            AsyncStorage.setItem(Constant.TOKEN_EXPR, '')
        }
    }


    render() {
        return (
            <View style={styles.containerStyle}>
               <ImageBackground source={Images.background} style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center', position:'absolute'}}/>
                <Text style={{ color: 'white', fontFamily: Fonts.type.medium, fontSize: 40, marginTop: 80}}>Registrasi</Text>

                {/* Username */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconAccount}/>
                    <TextInput style={styles.inputs}
                        placeholder="Username"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({name: text})}
                    />
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconEmail}/>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({email : text})}
                    />
                </View>

                 {/* No.Telepon */}
                 {/* <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconTelepon}/>
                    <TextInput style={styles.inputs}
                        placeholder="No. Telepon"
                        keyboardType={'numeric'}    
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({notelepon: text})}
                    />
                </View> */}

                {/* Password */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconPassword}/>
                    <TextInput 
                        style={styles.inputs}
                        secureTextEntry={this.state.pass}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({password: text})}
                    />
                </View>

                {/* Confirm Password */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconPassword}/>
                    <TextInput 
                        style={styles.inputs}
                        secureTextEntry={this.state.pass}
                        placeholder="Confirm Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({confirm_password: text})}
                    />
                </View>

                {/* Button Login */}
                <View style={{ width: 250, paddingHorizontal: 30, bottom: -70}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#0079EB', '#0079EB']} style={{elevation: 1, borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height:55}} 
                        onPress={() => this.handleregister()} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}> Registrasi </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ flexDirection: 'row', bottom: -75}}>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18}}>Sudah Punya Akun ? </Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18, textDecorationLine: 'underline'}} 
                    onPress={() => this.props.navigation.navigate('Login')}>Login</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
        alignItems: 'center',
        
    },
    logoStyle: {
        marginTop: 100,
        marginBottom: 40,
        alignItems: 'center',
        justifyContent: 'center'
    },
    inputContainer: {
        borderColor: '#808080',
        borderWidth: 0,
        elevation: 3,
        backgroundColor: '#FFFFFF',
        borderRadius:30,
        width:300,
        height:50,
        marginBottom:20,
        flexDirection: 'row',
        alignItems:'center',
        bottom: -80
        
    },
    inputIcon:{
        width:50,
        height:50,
        marginLeft:10,
        justifyContent: 'center',
        tintColor: '#0079EB'
    },
    inputs:{
        fontSize: 18,
        marginLeft:10,
        fontFamily: Fonts.type.regular,
        borderBottomColor: '#FFFFFF',
        flex:1,
    },
})

export default Register;