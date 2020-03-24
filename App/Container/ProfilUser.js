import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet, impo, TouchableOpacity } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import AsyncStorage from '@react-native-community/async-storage';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../Themes';
import Fontisto from 'react-native-vector-icons/Fontisto';
import DatePicker from 'react-native-datepicker';
import Feather from 'react-native-vector-icons/Feather';
import Modal from 'react-native-modal';
import { NavigationActions, StackActions } from 'react-navigation';
import axios from 'axios';
import Constant from '../Library/constants';
import Api from '../Services/Api';

class ProfilUser extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailUser: [],
            logout: [],
            modalLogout: false,
            name: '',
            email: '',
            noTelepon: '',
        };
    }
    componentDidMount() {
        this.getdetailUser()
        // AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
        // AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
        // AsyncStorage.getItem('noTelepon').then((value) => this.setState({ 'noTelepon': value }));
    }

    getdetailUser() {
        Api.create().getProfil().then((response) => {
            alert(JSON.stringify(response.data))
            if (response.data.success == true) {
                this.setState({
                    name: response.data.data.name,
                    email: response.data.data.email
                })
            }
        })
    }

    getlogout = () => {
        const ApiUrl = 'http://api-antrian.aviatapps.id/api/logout';
        axios.post(ApiUrl)
            .then(response => {
                this.setState({ logout: response.data.data })
            })

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
            <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between' }}>
                <Modal
                    onBackdropPress={() => this.setState({ modalLogout: false })}
                    isVisible={this.state.modalLogout}
                >
                    <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
                        <Text style={{ alignSelf: 'center', fontSize: 24 }}>Logout</Text>
                        <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Apakah kamu yakin akan keluar?</Text>
                        <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
                            <TouchableOpacity style={{ height: 50, width: 90, borderRadius: 10, backgroundColor: '#0079eb', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.navigateToLogin()}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>Ya</Text>
                                </View>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ height: 50, width: 90, borderRadius: 10, backgroundColor: '#0079eb', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalLogout: false })}>
                                <View style={{ flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ alignSelf: 'center', color: 'white' }}>Tidak</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </Modal>
            
                    <TouchableOpacity style={{marginTop: 10, flex: 1}} onPress={() => this.props.navigation.navigate('UbahProfil')} >
                <View style={{ justifyContent:'space-between',backgroundColor: 'white', width: '100%', height: 110, elevation: 3, marginBottom: 20 }}>
                      <Image source={Images.iconAccount} style={{width: 70, height: 70, marginLeft:16, top:10}}></Image>
                <Text style={{ fontFamily: Fonts.type.bold, top: -60, fontSize: 18, marginLeft: 105 }}>{this.state.name}</Text>
        <Text style={{ fontFamily: Fonts.type.bold, top: -60, fontSize: 16, marginLeft: 105, color: '#848484' }}>{this.state.noTelepon}</Text>
        <Text style={{ fontFamily: Fonts.type.bold, top: -60, fontSize: 16, marginLeft: 105, color: '#848484' }}>{this.state.email}</Text>
                      <Image source={Images.iconEdit} style={{width: 40, height: 40,alignSelf:'flex-end', top:-122, right:10}}></Image>
                </View>
                
            </TouchableOpacity>
            
                {/* Anggota Keluarga*/}
           <View>
             <View style={{flexDirection:'row', marginBottom: 12, marginLeft: 16}}>
               <Text style={{fontFamily: Fonts.type.regular, fontSize: 20, top:-330}}>Anggota Keluarga</Text>
             </View>

             <ScrollView horizontal={true} style={{flexDirection: 'row', top: -330}}>
             <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{marginLeft: 16, marginTop: 15, backgroundColor:'white', width: 180, height: 60, borderRadius: 50, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:5, borderWidth: 1, borderColor: 'white'}}  onPress={() => this.props.navigation.navigate('TambahKeluarga')} >
                 <Feather name='plus-circle' size={35} style={{color:'#0079eb', left:-60, top:7}}></Feather>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, marginLeft: 40, top: -20}}>Tambah Keluarga</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>
            </View>

                <View>

                    {/* Logout */}
                    <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 60, borderRadius: 5, marginTop: 10, paddingVertical: 5, flexDirection: 'row', paddingHorizontal: 20, elevation: 5 }} onPress={() => this.setState({ modalLogout: true })}>
                        <Fontisto name='power' size={20} style={{ alignSelf: 'center' }} color={'#0079eb'} />
                        <Text style={{ alignSelf: 'center', marginLeft: 20, fontFamily: Fonts.type.medium, fontSize: 18 }}>Logout</Text>
                    </TouchableOpacity>

                </View>
            </View>
        )

    }
}

export default ProfilUser;