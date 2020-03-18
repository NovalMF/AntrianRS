import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid, ImageBackground } from 'react-native'
import { View, Container, Icon, Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Library/Images';
import Fonts from '../Themes/Fonts';
import axios from 'axios';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: [],
            username: '',
            password: '',
            icon: 'eye-off',
            isAuthenticated: false
        
        }
    }

    componentDidMount(){
        this.getlogin();
        this._subscribe = this.props.navigation.addListener('didFocus', () => {
          //do you update if need
          this.getlogin(); 
        });
      }
        
      getlogin = () => {
        const ApiUrl = 'http://api-antrian.aviatapps.id/api/login';
        axios.post(ApiUrl)
        .then(response => {
          this.setState({ login:response.data.data })      
        })
            
      }

    render() {
        return (
           <ImageBackground source={Images.background} style={{ flex:1, position: 'relative'}}>
               <View style={{ flex:1, justifyContent:'center', alignItems:'center'}}>
               <Thumbnail square large source={Images.contohlogo}/>            
                    <View></View>
                    <View style={{padding: 80}}>
                    <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconAccount}/>
                    <TextInput style={styles.inputs}
                        placeholder="Username/Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({username: text})}
                    />
                    </View>
                        
                        <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconPassword}/>
                    <TextInput 
                        style={styles.inputs}
                        secureTextEntry={true}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(text) => this.setState({password: text})}
                    />
                    </View>

                        <View style={{height: 60, marginTop: 20, marginLeft: 180}}>
                        <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18}}  onPress={()=> this.props.navigation.navigate('')} >Lupa Password ? </Text>
                        </View>
                        
                        <TouchableOpacity 
                            style={{marginTop: -20, elevation: 1, borderRadius: 20, height: 55, width:250, alignSelf:'center', backgroundColor: '#0079eb', justifyContent:'center', alignItems:'center'}}
                            onPress={() => {
                                axios.post('http://api-antrian.aviatapps.id/api/login', {
                                    username: 'admin123',
                                    password: '123456'
                                }).then(response => {
                                    console.log(response.data);
                                }).catch(error => {
                                    console.log(error);
                                })
                                
                            }}
                            >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}>
                                Login
                            </Text>
                        </TouchableOpacity>
                        <View style={{ flexDirection: 'row', bottom: -20 , alignSelf:'center'}}>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18}}>Belum Punya Akun ? </Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18, textDecorationLine: 'underline'}} onPress={()=> this.props.navigation.navigate('Register')}>Registrasi</Text>
                </View>
                    </View>
                    <View></View>
               </View>
               </ImageBackground>
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
        marginBottom:30,
        flexDirection: 'row',
        alignItems:'center',
        bottom: -30
        
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

export default Login;