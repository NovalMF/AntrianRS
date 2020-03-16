

import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet, Picker, TouchableHighlight, Animated } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput, BorderlessButton } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import CollapsibleList from 'react-native-collapsible-list'
import axios from 'axios';



class AntrianSaya extends Component {
  constructor(props) {
    super(props);
    this.icons = {
      'up'    : require ('../Assets/Icon/arrowup.png'),
      'down'  : require ('../Assets/Icon/arrowdown.png')
    };
    this.state = { 
        title   : props.title,
        expand  : true, 
        email   : '',
        history_booking: [],
    
    };
  }

 toogle(){

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
  let icon = this.icons['down'];

  if(this.state.expanded) {
    icon = this.icons['up'];
  }
    return (
        <ScrollView style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
          <TouchableOpacity style={{marginTop: 20,paddingLeft: 12}} onPress={() => this.props.navigation.navigate('HomePage')}>
            <AntDesign name='left' size={25} color={'#0079EB'}></AntDesign>
          </TouchableOpacity>

          <View style={{paddingLeft:60}}>
            <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}>Antrian Saya</Text>
          </View>

          <View style={{marginTop: 5}} >
                  <TouchableOpacity  
                    style={{ backgroundColor: 'white', width: '100%', height: 90, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Text style={{ marginTop: 10, fontSize:18, marginLeft: 16,}}>Dr. Anastasia Lintang Maharani, Sp.OG</Text>
                      <Text style={{ marginTop: 3, fontSize:16, marginLeft: 16, color:'grey'}}>Poli Kebidanan dan Kandungan</Text>
                  </TouchableOpacity>
            </View>
          </ScrollView>

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

export default AntrianSaya;