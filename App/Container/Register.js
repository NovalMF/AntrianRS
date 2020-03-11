import React, { Component } from 'react';
import { Text, Image, TextInput, StyleSheet, TouchableOpacity, PermissionsAndroid, ImageBackground } from 'react-native'
import { View, Container, Icon, Thumbnail } from 'native-base';
import LinearGradient from 'react-native-linear-gradient'
import Images from '../Library/Images';
import Fonts from '../Themes/Fonts';

class Register extends Component {
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
               <ImageBackground source={Images.background} style={{flex: 1, width: '100%', height: '100%', justifyContent: 'center',alignItems: 'center', position:'absolute'}}/>
                <Text style={{ color: 'white', fontFamily: Fonts.type.medium, fontSize: 40, marginTop: 80}}>Registrasi</Text>

                {/* Username */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconAccount}/>
                    <TextInput style={styles.inputs}
                        placeholder="Username"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>

                {/* Email */}
                <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconEmail}/>
                    <TextInput style={styles.inputs}
                        placeholder="Email"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent'
                        onChangeText={(email) => this.setState({email})}
                    />
                </View>

                 {/* No.Telepon */}
                 <View style={styles.inputContainer}>
                    <Image style={styles.inputIcon} source={Images.iconTelepon}/>
                    <TextInput style={styles.inputs}
                        placeholder="No. Telepon"
                        keyboardType={'numeric'}    
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
                </View>

                {/* Button Login */}
                <View style={{ width: 250, paddingHorizontal: 30, bottom: -70}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#0079EB', '#0079EB']} style={{elevation: 1, borderRadius: 20, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height:55}} onPress={()=> this.props.navigation.navigate('Login')} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}> Registrasi </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{ flexDirection: 'row', bottom: -75}}>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18}}>Sudah Punya Akun ? </Text>
                    <Text style={{ color: '#FFFFFF', fontFamily: Fonts.type.regular, fontSize: 18, textDecorationLine: 'underline'}} onPress={()=> this.props.navigation.navigate('Login')}>Login</Text>
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