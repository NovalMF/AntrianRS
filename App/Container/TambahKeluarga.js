
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet, Picker, Button, Dimensions } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import Modal, { ModalContent, SlideAnimation } from 'react-native-modal'
import RNPickerSelect from 'react-native-picker-select';
import RadioForm, {RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';

var radio_props = [
  {label: 'Laki-laki', value: 0},
  {label: 'Perempuan', value: 1}
];

class TambahKeluarga extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      isModalVisible: false,
        email   : '',
    
    };
  }

  openModal = () =>{
    this.setState({
    isModalVisible:true
    })
    }

  toggleModal = () =>{
    this.setState({
    isModalVisible:!this.state.isModalVisible
    })
    }

  closeModal = () =>{
    this.setState({
    isModalVisible:false
    })
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
            <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}>Tambah Keluarga</Text>
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

                {/* Hubungan Keluarga */}
              <Text style={{marginTop:10, paddingBottom:5, paddingLeft:20, fontFamily: Fonts.type.regular, color: 'black'}}>Hubungan Keluarga</Text>
                <View style={styles.inputContainer}> 

                <Picker 
                        placeholder={{label: 'Pilih salah satu', value: null}}
                        selectedValue={this.state.hubungankeluarga}
                        style={{ width: '90%', left: 3}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({hubungankeluarga: itemValue})
                          }
                    
                    >
                        <Picker.Item label="Ayah" value="ayah" />
                        <Picker.Item label="Ibu" value="ibu" />
                        <Picker.Item label="Suami" value="suami" />
                        <Picker.Item label="Istri" value="istri" />
                        <Picker.Item label="Anak Laki-laki" value="anak laki-laki" />
                        <Picker.Item label="Anak Perempuan" value="anak perempuan" />
                    
 
                    </Picker>
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
              <View>
                <RadioForm
                  radio_props={radio_props}
                  formHorizontal={true}
                  animation={true}
                  initial={0}
                  onPress={(value) => {this.setState({value:value})}}
                />
              </View>


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

                {/* Button Simpan */}
                <View style={{ width: 360, bottom: 10, marginTop:225}}>
                    <LinearGradient start={{x: 0, y: 0}} end={{x: 0.9, y: 0.5}} colors={['#0079EB', '#0079EB']} style={{elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ alignItems:'center', justifyContent:'center', height:55}} onPress={()=> this.openModal ()} >
                            <Text style={{color: 'white', fontFamily: Fonts.type.regular, fontSize: 20}}> Simpan</Text>
                        </TouchableOpacity>
                    </LinearGradient>

                    <Modal animationIn="slideInUp" animationOut="slideOutDown" onBackdropPress={()=>this.closeModal()} onSwipeComplete={()=>this.closeModal()} swipeDirection="right" isVisible={this.state.isModalVisible} style={{backgroundColor:'gray',maxHeight:Dimensions.get('window').height / 2}} isVisible={this.state.isModalVisible} style={{backgroundColor:'white'}}>
                      <View style={{ flex: 1,justifyContent:'center'}}>
                      <Text style={{textAlign:'center'}}>Anda berhasil menambahkan anggota Keluarga</Text>
                      </View>
                      <View style={{ flex: 1,justifyContent:'center',bottom:0}}>
                      <View style={{}}>
                      <TouchableOpacity style={{backgroundColor:'#0079eb',width: '100%', height: 60}} onPress={() => this.props.navigation.navigate('ProfilUser')}>
                      <Text style={{color:'white',textAlign:'center', padding:10, marginTop: 10}}>Lihat Keluarga Anda</Text>
                      </TouchableOpacity>
                      </View>
                      </View>
                      </Modal>
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
  Modal: {
    maxHeight: 100,
    justifyContent: 'center',
    textAlign: 'center'
  }
  
  
  })

export default TambahKeluarga;