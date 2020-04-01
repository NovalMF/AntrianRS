
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet, Picker } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';



class History extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        email   : '',
        history_booking: [],
    
    };
  }

//   componentDidMount(){
//     this.getbooking_antrian();
//     this._subscribe = this.props.navigation.addListener('didFocus', () => {
//       //do you update if need
//       this.getbooking_antrian(); 
//     });
//   }
    
//   getbooking_antrian= () => {
//     const ApiUrl = 'http://api-antrian.aviatapps.id/api/dokter/DOK0004-1582';
//     axios.post(ApiUrl)
//     .then(response => {
//       this.setState({ booking_antrian:response.data.data })      
//     })
        
//   }

render() {
    return (
        <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingTop: 20}}>
          <View style={{marginTop: 5}} >
                  <View  
                    style={{ backgroundColor: 'white', width: 330, height: 250, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Text style={{ marginTop: 20, fontSize:16, alignSelf:'center'}}>Scan QR Code</Text>
                      <Image source={Images.qrcode} style={{width:250, height: 250, marginTop:-25, alignSelf: 'center'}}></Image>
                  </View>

                  <View  
                    style={{ backgroundColor: 'white', width: 330, height: 280, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Text style={{ marginTop: 20, fontSize:16, alignSelf:'center'}}>No. Antrian</Text>
                      <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 60, marginBottom: 20, marginHorizontal: 16 }}></View>
                      <Text style={{ fontSize:16, alignSelf:'flex-start', marginLeft: 16}}>Nama Pasien</Text>
                      <Text style={{ fontSize:16, alignSelf:'flex-start', marginLeft: 16, marginTop:30}}>Poli</Text>
                      <Text style={{ fontSize:16, alignSelf:'flex-start', marginLeft: 16, marginTop:30}}>Nama Dokter</Text>
                      <Text style={{ fontSize:16, alignSelf:'flex-end', marginRight: 16, marginTop:-114}}>Hari & Tanggal</Text>
                      <Text style={{ fontSize:16, alignSelf:'flex-end', marginRight: 38, marginTop:30}}>Waktu</Text>
                  </View>
            </View>

             {/* Button Lihat Antrian */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center'}}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.props.navigation.navigate('AntrianSaya')} >
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Lihat Antrian </Text>
            </TouchableOpacity>
          </LinearGradient>
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
    inputContainer: {
        borderBottomWidth: 1,
        borderBottomColor: '#eaeaea',
        borderWidth: 0,
        elevation: 0,
        backgroundColor: '#FFFFFF',
        borderRadius: 0,
        width: 350,
        height: 50,
        marginLeft: 20,
        flexDirection: 'row',
        alignItems: 'center'
  },
  inputs:{
    height: 45,
        marginLeft: 1,
        paddingLeft: 0,
        borderBottomColor: '#FAFAFA',
        flex: 1,
        fontSize: 13,
  },
  
  
  })

export default History;