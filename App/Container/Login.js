import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid } from 'react-native'
import { View, Container, Icon, Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Library/Images';
import Fonts from '../Themes/Fonts';

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email   : '',
            password: '',
            pass: true,
            icon: 'eye-off',
        }
    }
    render() {
        return (
            <View style={styles.containerStyle}>
                <Image source={Images.background} style={styles.bgImageStyle}/>
                <View style={styles.logoStyle}>
                    <Thumbnail square large source={Images.contohlogo}/>
                </View>

                {/* Username/Email */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconAccount}/>
                    <TextInput style={styles.inputs}
                        placeholder="Username/Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>

                {/* Password */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconPassword}/>
                    <TextInput 
                        style={styles.inputs}
                        secureTextEntry={this.state.pass}
                        placeholder="Password"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                    />
                    <Icon 
                        name={this.state.icon}
                        style={{ marginRight: 20}} 
                        onPress={()=> 
                            this.setState({ pass: !this.state.pass, icon: this.state.icon === 'eye' ? 'eye-off' : 'eye' })} 
                        color={'#FFFFFF'}
                    />
                </View>

                {/* Button Login */}
                <View style={{ width: 250, paddingHorizontal: 30, bottom: -90}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#0079EB', '#0079EB']} style={{elevation: 1, borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height:55}} onPress={()=> this.props.navigation.navigate('HomeNavigation')} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}> Login </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ flexDirection: 'row', bottom: -95}}>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18}}>Belum Punya Akun ? </Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18, textDecorationLine: 'underline'}} onPress={()=> this.props.navigation.navigate('Register')}>Registrasi</Text>
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
    bgImageStyle: {
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        width: '100%',
        height: '100%'
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
        bottom: -80
        
    },
    inputIcon:{
        width:50,
        height:50,
        marginLeft:15,
        justifyContent: 'center',
        tintColor: '#00CCFF'
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