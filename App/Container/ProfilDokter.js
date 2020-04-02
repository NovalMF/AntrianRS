import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet, impo, TouchableOpacity } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import Api from '../Services/Api';




class ProfilDokter extends Component {
  constructor(props) {
    super(props);
    // [date, setDate] = useState(new Date())
    this.state = {
    profil_dokter: [],
    dokter_nama: '',
    spesialis: '',
    avatar: '',
    biografi: '',
    pendidikan:'',
    email: '',
    mobile:'',
    jadwal_id: '',
    mulai: '',
    selesai: '',
    },
    {
        date:'01-03-2020'
    };
  }

//   componentDidMount() {
//     this.getprofil_dokter(this.props.navigation.getParam('dokter_id'));
//     this._subscribe = this.props.navigation.addListener('didFocus', () => {
//           //do you update if need
//           this.getprofil_dokter(this.props.navigation.getParam('dokter_id')); 
//         });
//       }


// getprofil_dokter(dokter_id) {
//     Api.create().getDokter(dokter_id).then((response) => {
//         // alert(JSON.stringify(response.data))
//         if (response.data.success == true) {
//             this.setState({
//                 avatar: response.data.data.avatar,
//                 dokter_nama: response.data.data.dokter_nama,
//                 spesialis: response.data.data.spesialis,
//                 biografi: response.data.data.biografi,
//                 pendidikan: response.data.data.pendidikan,
//                 email: response.data.data.email,
//                 mobile: response.data.data.mobile,
//                 jadwal_id: response.data.data.jadwal_id,
//                 mulai: response.data.data.mulai,
//                 selesai: response.data.data.selesai,
//                 profil_dokter: response.data.data
//             })
//         }
//     })
// }
  componentDidMount(){
    this.getprofil_dokter();
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.getprofil_dokter(this.props.navigation.getParam('dokter_id')); 
    });
  }
    
  getprofil_dokter= (dokter_id) => {
    const ApiUrl = `http://api-antrian.aviatapps.id/api/dokter/${dokter_id}`;
    axios.get(ApiUrl)
    .then(response => {
      this.setState({ profil_dokter:response.data.data })      
    })
        
  }


  render() {
    return (
        <View style={{backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20}}>
          
          <View style={{top: -10}} >
          {
              this.state.profil_dokter.map((data, index) => (
                <View key={index}
                    style={{ backgroundColor: 'white', width: 330, height: 180, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20 }}>
                      <Image source={{uri:this.state.avatar}} style={{width: 70, height: 70, marginLeft:10, marginTop: 15}}></Image>
                      <Text style={{paddingLeft: 90, marginTop: -70, fontSize:16}}>{data.dokter_nama}</Text>
                      <Text style={{paddingLeft: 90, color: '#848484', marginTop: 5, width: 250}}>{data.spesialis}</Text>
                      <Text style={{paddingLeft: 90, width: 320, marginTop: 5}}>{data.biografi}</Text>
                      {/* Biografi */}
                      <Text style={{fontSize: 18, marginTop:30, alignSelf:'center'}}>Biografi</Text>
                      <View style={{ backgroundColor: 'white', width: 330, height: 120, marginTop: 10, borderRadius: 10, elevation: 5, marginBottom: 20 }} > 
                        <Text style={{paddingLeft: 10, width: 320, marginTop: 5}}>{data.pendidikan}</Text>
                        <Text style={{paddingLeft: 10, width: 320, marginTop: 5}}>{data.email}</Text>
                        <Text style={{paddingLeft: 10, width: 320, marginTop: 5}}>{data.mobile}</Text>  
                      </View>
                       {/* Jadwal Praktik */}
                        <Text style={{fontSize: 18, alignSelf:'center'}}>Jadwal Praktik</Text>
                        <View style={{ backgroundColor: 'white', width: 330, height: 90, marginTop: 10, borderRadius: 10, elevation: 5, marginBottom: 20 }} > 
                        <Text style={{}}>{this.state.jadwal_id}</Text>
                        <Text style={{}}>{this.state.mulai}</Text>
                        <Text style={{}}>{this.state.selesai}</Text>
                        </View>
                  </View> 
                ))
              }
              </View> 

                        {/* Pilih Tanggal */}
                        <Text style={{fontSize: 18, top:190, alignSelf:'center'}}>Pilih Tanggal</Text>
                        <View style={{width:330, height: 40, top:110}}>
                          <DatePicker
                            style={{width: 350}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Silahkan Pilih Tanggal"
                            format="DD-MM-YYYY"
                            minDate="01-01-2017"
                            maxDate="01-01-2023"
                            confirmBtnText="OK"
                            cancelBtnText="Cancel"
                            iconSource={Images.iconKalender} 
                            customStyles={{
                            dateIcon: {
                                position: 'relative',
                                top: -5,
                                marginLeft: 0,
                                width: 50,
                                height: 50,
                            },
                            dateInput: {
                              borderWidth: 0,
                              borderBottomWidth: 1,
                              borderBottomColor: '#eaeaea',
                              alignItems: "flex-start",
                                marginLeft: -10,
                                marginRight: 20,
                                top: -5,
                                left: 10
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        /> 
                        </View>

                  {/* Button Booking */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center'}}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.props.navigation.navigate('BookingAntrian')} >
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Booking</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View> 
        </View>
        

  
    )
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#808080',
    borderWidth: 0,
    elevation: 3,
    backgroundColor: '#FFFFFF',
    borderRadius:30,
    marginLeft: 16,
    width:330,
    top: 30,
    height:50,
    flexDirection: 'row',
    alignItems:'center', 
},
inputs:{
  fontSize: 16,
  marginLeft:10,
  fontFamily: Fonts.type.regular,
  borderBottomColor: '#FFFFFF',
  flex:1,
},

})

export default ProfilDokter;