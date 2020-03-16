import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet, impo, TouchableOpacity } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import Feather from 'react-native-vector-icons/Feather';
import axios from 'axios';

class ProfilUser extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          email   : '',
          booking_antrian: [],
      
      };
    }
  
    render() {
        return (
            <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
              <TouchableOpacity style={{marginTop: 20,paddingLeft: 12}} onPress={() => this.props.navigation.navigate('HomePage')}>
                <AntDesign name='left' size={25} color={'#0079EB'}></AntDesign>
              </TouchableOpacity>
    
              <View style={{paddingLeft:60}}>
                <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}>Profil User</Text>
              </View>

            <TouchableOpacity style={{marginTop: -10}} onPress={() => this.props.navigation.navigate('UbahProfil')} >
                <View style={{ justifyContent:'space-between',backgroundColor: 'white', width: '100%', height: 110, marginTop: 5, elevation: 3, marginBottom: 20 }}>
                      <Image source={Images.iconAccount} style={{width: 70, height: 70, marginLeft:16, top:10}}></Image>
                      <Text style={{ fontFamily: Fonts.type.bold, top: -60, fontSize: 18, marginLeft: 105 }}>Budi Aja</Text>
                      <Text style={{ fontFamily: Fonts.type.bold, top: -60, fontSize: 16, marginLeft: 105, color: '#848484' }}>+6288102938746</Text>
                      <Text style={{ fontFamily: Fonts.type.bold, top: -60, fontSize: 16, marginLeft: 105, color: '#848484' }}>budiaja123@gmail.com</Text>
                      <Image source={Images.iconEdit} style={{width: 40, height: 40,alignSelf:'flex-end', top:-122, right:10}}></Image>
                </View>
                
            </TouchableOpacity>

                {/* Anggota Keluarga*/}
           <View>
             <View style={{flexDirection:'row', marginBottom: 12, marginLeft: 16}}>
               <Text style={{fontFamily: Fonts.type.regular, fontSize: 20, top:7}}>Anggota Keluarga</Text>
             </View>

             <ScrollView horizontal={true} style={{flexDirection: 'row'}}>
             <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{marginLeft: 16, marginTop: 15, backgroundColor:'white', width: 180, height: 60, borderRadius: 50, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:5, borderWidth: 1, borderColor: 'white'}}  onPress={() => this.props.navigation.navigate('TambahKeluarga')} >
                 <Feather name='plus-circle' size={35} style={{color:'#0079eb', left:-60, top:7}}></Feather>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, marginLeft: 40, top: -20}}>Tambah Keluarga</Text>
                </TouchableOpacity>
              </View>
              </ScrollView>

            </View>
            </View>
              )
    }
    }

export default ProfilUser;