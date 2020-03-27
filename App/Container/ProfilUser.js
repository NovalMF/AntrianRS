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
            famDummy: [
                { nama: 'Eka', relasi: 'istri' },
                { nama: 'Ihsan', relasi: 'Anak' },
            ]
        };
    }
    componentDidMount() {
        this.getdetailUser()
    }

    getdetailUser() {
        Api.create().getProfil().then((response) => {
            // alert(JSON.stringify(response.data))
            if (response.data.success == true) {
                this.setState({
                    name: response.data.data.detail.nama_lengkap,
                    email: response.data.data.email,
                    detailUser: response.data.data
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
                <View>
                    <TouchableOpacity style={{ marginTop: 10 }} onPress={() => this.props.navigation.navigate('UbahProfil', { data: this.state.detailUser, isFrom: 'profil', getData: this.getdetailUser.bind(this) })} >
                        <View style={{ backgroundColor: 'white', width: '100%', elevation: 3, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Image source={Images.iconAccount} style={{ width: 70, height: 70 }}></Image>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'flex-start', width: '70%' }}>
                                <Text style={{ fontFamily: Fonts.type.bold, fontSize: 18, }}>{this.state.name}</Text>
                                <Text style={{ fontFamily: Fonts.type.bold, fontSize: 16, color: '#848484' }}>{this.state.email}</Text>
                            </View>
                            <View style={{ width: '10%' }}>
                                <Image source={Images.iconEdit} style={{ width: 40, height: 40 }}></Image>
                            </View>
                        </View>
                    </TouchableOpacity>

                    {/* Anggota Keluarga*/}
                    <View style={{ marginTop: 20 }}>
                        <View style={{ paddingHorizontal: 20 }}>
                            <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20 }}>Anggota Keluarga</Text>
                        </View>

                        <ScrollView horizontal={true} style={{ paddingLeft: 10 }} showsHorizontalScrollIndicator={false}>
                            {this.state.famDummy.map((item, index) => {
                                if (this.state.famDummy.length == 0) {
                                    return (
                                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ marginTop: 15, margin: 5, backgroundColor: 'white', height: 60, flexDirection: 'row', borderRadius: 30, justifyContent: 'space-between', elevation: 5, borderWidth: 1, borderColor: 'white', paddingHorizontal: 10 }} onPress={() => this.props.navigation.navigate('TambahKeluarga', { getData: this.getdetailUser.bind(this) })} >
                                                <Feather name='plus-circle' size={35} style={{ color: '#0079eb', alignSelf: 'center' }}></Feather>
                                                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, alignSelf: 'center' }}>Tambah Keluarga</Text>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                } else {
                                    return (
                                        <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                            <TouchableOpacity style={{ marginTop: 15, margin: 5, backgroundColor: 'white', height: 60, flexDirection: 'row', borderRadius: 30, justifyContent: 'space-between', elevation: 5, borderWidth: 1, borderColor: 'white', paddingHorizontal: 10 }} >
                                                <View style={{ color: '#0079eb', alignSelf: 'center', width: 30, height: 30, borderRadius: 15, borderColor: 'black', borderWidth: 1 }}></View>
                                                <View style={{ justifyContent: 'center', marginHorizontal: 10 }}>
                                                    <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, alignSelf: 'center' }}>{item.nama}</Text>
                                                    <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, alignSelf: 'center' }}>{item.relasi}</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    )
                                }
                            })}
                            <View style={{ alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                                <TouchableOpacity style={{ marginTop: 15, margin: 5, backgroundColor: 'white', height: 60, flexDirection: 'row', borderRadius: 30, justifyContent: 'space-between', elevation: 5, borderWidth: 1, borderColor: 'white', paddingHorizontal: 10, marginRight: 20 }} onPress={() => this.props.navigation.navigate('TambahKeluarga', { getData: this.getdetailUser.bind(this) })} >
                                    <Feather name='plus-circle' size={35} style={{ color: '#0079eb', alignSelf: 'center' }}></Feather>
                                    <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, alignSelf: 'center',  marginHorizontal: 10  }}>Tambah Keluarga</Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
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