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



class ProfilDokter extends Component {
  constructor(props) {
    super(props);
    // [date, setDate] = useState(new Date())
    this.state = {
    profil_dokter: [],
    },
    {
        date:'01-03-2020'
    };
  }

  componentDidMount(){
    this.getprofil_dokter();
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.getprofil_dokter(); 
    });
  }
    
  getprofil_dokter= () => {
    const ApiUrl = 'http://api-antrian.aviatapps.id/api/dokter/DOK0004-1582';
    axios.post(ApiUrl)
    .then(response => {
      this.setState({ profil_dokter:response.data.data })      
    })
        
  }


  render() {
    return (
        <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
          <TouchableOpacity style={{marginTop: 20,paddingLeft: 12}} onPress={() => this.props.navigation.navigate('Jadwaldokter')}>
            <AntDesign name='left' size={25} color={'#0079EB'}></AntDesign>
          </TouchableOpacity>

          <View style={{paddingLeft:60}}>
            <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}> Profil Dokter</Text>
          </View>

          <View style={{marginTop: -10}} >
          {
                this.state.profil_dokter.map((data, index)=>(
                <View  key={index}
                    style={{ backgroundColor: 'white', width: 330, height: 180, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20 }}>
                        
                      <Image source={Images.dokterdummy1} style={{width: 70, height: 70, marginLeft:10, marginTop: 15}}></Image>
                      <Text style={{paddingLeft: 90, marginTop: -70, fontSize:16}}>{data.dokter_nama}</Text>
                      <Text style={{paddingLeft: 90, color: '#848484', marginTop: 5, width: 250}}>{data.spesialis}</Text>
                      <Text style={{paddingLeft: 90, width: 320, marginTop: 5}}>{data.biografi}</Text>
                    
                      <View style={{justifyContent:'center', alignItems:'center'}}>
                        <Text style={{fontSize: 18, marginTop:120}}>Biografi</Text>
                        
                        <View style={{ backgroundColor: 'white', width: 330, height: 130, marginTop: 10, borderRadius: 10, elevation: 5, marginBottom: 20 }} > 
                        <Text style={{paddingLeft: 10, width: 320, marginTop: 5}}>{data.pendidikan}</Text>
                        <Text style={{paddingLeft: 10, width: 320, marginTop: 5}}>{data.email}</Text>
                        </View>
                        
                        <Text style={{fontSize: 18, marginTop:-10}}>Jadwal Praktik</Text>
                        <View style={{ backgroundColor: 'white', width: 330, height: 100, marginTop: 15, borderRadius: 10, elevation: 5, marginBottom: 20 }} > 
                        <Text style={{}}>{data.jadwal}</Text>
                        <Text style={{}}>{data.mulai}</Text>
                        <Text style={{}}>{data.selesai}</Text>
                        </View>

                        <Text style={{fontSize: 18, marginTop:-5}}>Pilih Tanggal</Text>
                        <DatePicker
                            style={{width: 300}}
                            date={this.state.date}
                            mode="date"
                            placeholder="Silahkan Pilih Tanggal"
                            format="DD-MM-YYYY"
                            minDate="01-01-2017"
                            maxDate="01-01-2023"
                            confirmBtnText="OK"
                            cancelBtnText="Cancel"
                            customStyles={{
                            dateIcon: {
                                position: 'relative',
                                left:   25,
                                top: 5,
                                marginLeft: 0
                            },
                            dateInput: {
                                marginLeft: -20,
                                marginRight: -10,
                                top: 5,
                                left: 10
                            }
                            // ... You can check the source to find the other keys.
                            }}
                            onDateChange={(date) => {this.setState({date: date})}}
                        />
              
                      </View>
                
                    {/* <View 
                    style={{ backgroundColor: 'white', width: 330, height: 130, marginTop: 15, borderRadius: 10, elevation: 5, marginBottom: 20 }}>
                        <Text style={{paddingLeft: 10,}}>{data.pendidikan}</Text>
                    </View>  
                    
                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 18, marginTop:-10}}>Jadwal Praktik</Text>
                    </View>

                    <View 
                    style={{ backgroundColor: 'white', width: 330, height: 90, marginTop: 10, borderRadius: 10, elevation: 5, marginBottom: 20 }}>
                        <Text style={{paddingLeft: 10,}}>{data.jadwal}</Text>
                    </View> 

                    <View style={{justifyContent:'center', alignItems:'center'}}>
                         <Text style={{fontSize: 18, marginTop:-10}}>Pilih Tanggal</Text>
                    </View> */}
                    
                  </View>
                  
                  ))
                }
              
                       <View style={{marginTop:180}}>
                         
                        </View>

                     {/* Button Booking */}
                <View style={{ width: 360, bottom: -90, marginTop:130}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#0079EB', '#0079EB']} style={{elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height:55}} onPress={()=> this.props.navigation.navigate('BookingAntrian')} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}> Booking </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
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