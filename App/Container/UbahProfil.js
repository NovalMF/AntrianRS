
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



class UbahProfil extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        email   : '',
    
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
        <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
          <TouchableOpacity style={{marginTop: 20,paddingLeft: 12}} onPress={() => this.props.navigation.navigate('ProfilUser')}>
            <AntDesign name='left' size={25} color={'#0079EB'}></AntDesign>
          </TouchableOpacity>

          <View style={{paddingLeft:60}}>
            <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}>Ubah Profil</Text>
          </View>

          {/* <View style={{marginTop: 5}} >
            {
                this.state.booking_antrian.map((data, index)=>(
                  <View key={index} onPress={() => this.props.navigation.navigate('ProfilDokter', {dokter_id: data.dokter_id })}
                    style={{ backgroundColor: 'white', width: 330, height: 90, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Image source={{uri:data.avatar}} style={{width: 70, height: 70, marginLeft:10, marginTop: 8}}></Image>
                      <Text style={{paddingLeft: 90, marginTop: -70, fontSize:16}}>{data.dokter_nama}</Text>
                      <Text style={{paddingLeft: 90, color: '#848484'}}>{data.spesialis}</Text>
                  </View>
                  
                  
                ))
              } */}

              {/* Username */}
              <Text style={{paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>Nama Lengkap</Text>
                <View style={styles.inputContainer}> 
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Ketik disini"
                        underlineColorAndroid='transparent'    
                    />
                </View>

                 {/* Tanggal Lahir */}
              <Text style={{marginTop:10, paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>Tanggal Lahir</Text>
                    <DatePicker
                            style={{width: 300}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Pilih Tanggal"
                            format="DD-MM-YYYY"
                            minDate="01-01-1950"
                            maxDate="01-01-2030"
                            confirmBtnText="OK"
                            cancelBtnText="Cancel"
                            iconSource={Images.iconKalender} 
                            customStyles={{
                            dateIcon: {
                                position: 'relative',
                                left:   55,
                                top: 5,
                                width: 50,
                                height: 50,
                            },
                            dateInput: {
                                borderBottomWidth: 1,
                                borderWidth: 0,
                                borderBottomColor: '#eaeaea',
                                alignItems: "flex-start",
                                marginLeft: 1,
                                marginRight: -30,
                                left: 20
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
                      {/* Jenis Kelamin */}
              <Text style={{marginTop:10, paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>Jenis Kelamin</Text>

              {/* No.Telepon */}
              <Text style={{marginTop:10, paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>No.Telepon</Text>
                <View style={styles.inputContainer}> 
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Ketik disini"
                        keyboardType={'numeric'}  
                        underlineColorAndroid='transparent' 
                        onChangeText={(email) => this.setState({email})}   
                    />
                </View>

                {/* Email */}
              <Text style={{marginTop:10, paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>Email</Text>
                <View style={styles.inputContainer}> 
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Ketik disini"
                        keyboardType="email-address"
                        underlineColorAndroid='transparent' 
                        onChangeText={(email) => this.setState({email})}   
                    />
                </View>

                {/* Password */}
                <Text style={{marginTop:10, paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>Password</Text>
                <View style={styles.inputContainer}>
                    <TextInput 
                        style={styles.inputs}
                        secureTextEntry={this.state.pass}
                        placeholder="Ketik disini"
                        underlineColorAndroid='transparent'
                        onChangeText={(password) => this.setState({password})}
                    />
                </View>

                {/* Button Simpan */}
                <View style={{ width: 360, bottom: 10, marginTop:175}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#0079EB', '#0079EB']} style={{elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height:55}} onPress={()=> this.props.navigation.navigate('')} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}> Simpan</Text>
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

export default UbahProfil;