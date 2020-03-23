
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet, Picker } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';

var radio_props = [
  { label: 'Laki-laki', value: 0 },
  { label: 'Perempuan', value: 1 }
];

class TambahKeluarga extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hubungankeluarga: '',
      modalTambahKeluarga: false,
      tambahkeluarga: [],
      email: '',

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
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
        <Modal
          onBackdropPress={() => this.setState({ modalTambahKeluarga: false })}
          isVisible={this.state.modalTambahKeluarga}
      >
          <View style={{ height: 300, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
              <Image source={Images.keluarga} style={{width: 180, height: 180, alignSelf: 'center'}}></Image>
              <Text style={{ alignSelf: 'center', marginTop: 10, marginBottom: 20 }}>Anda berhasil menambahkan anggota keluarga</Text>
              <View style={{ flex: 1, paddingHorizontal: 40 }}>
                  <TouchableOpacity style={{alignSelf: 'center', height: 50, width: 180, borderRadius: 10, backgroundColor: '#0079eb', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.props.navigation.navigate ('ProfilUser') }>
                      <View style={{ flex: 1, justifyContent: 'center' }}>
                          <Text style={{ alignSelf: 'center', color: 'white' }}>Lihat Keluarga Anda</Text>
                      </View>
                  </TouchableOpacity>
              </View>
          </View>
      </Modal>

        {/* Username */}
        <View>
          <Text style={{ paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Nama Lengkap</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
            />
          </View>

        {/* Hubungan Keluarga */}
        <Text style={{marginTop:10, paddingBottom:5, fontFamily: Fonts.type.regular, color: 'black'}}>Hubungan Keluarga</Text>
          <View style={styles.inputContainer}> 

          <Picker 
            placeholder={{label: 'Pilih salah satu', value: null}}
            selectedValue={this.state.hubungankeluarga}
            style={{ width: '90%'}}
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
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Tanggal Lahir</Text>
          <DatePicker
            style={{ width: '100%' }}
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
                // left: 55,
                top: 5,
                // width: 50,
                height: 50,
              },
              dateInput: {
                borderBottomWidth: 1,
                borderWidth: 0,
                borderBottomColor: '#eaeaea',
                alignItems: "flex-start",
                marginLeft: 1,
                // left: 20
              }
              // ... You can check the source to find the other keys.
            }}
            onDateChange={(date) => { this.setState({ date: date }) }}
          />

          {/* Jenis Kelamin */}
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Jenis Kelamin</Text>
          <View>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelStyle={{ marginRight: 20 }}
              animation={true}
              onPress={(value) => { this.setState({ value: value }) }}
            />
          </View>

          {/* No.Telepon */}
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>No.Telepon</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType={'numeric'}
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })}
            />
          </View>

          {/* Email */}
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              onChangeText={(email) => this.setState({ email })}
            />
          </View>
        </View>


        {/* Button Simpan */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center'}}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.setState({ modalTambahKeluarga: true })}>
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Simpan</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>


    )
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    flex: 1,
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
    flexDirection: 'row',
    alignItems: 'center'
  },
  inputs: {
    height: 45,
    marginLeft: 1,
    paddingLeft: 0,
    borderBottomColor: '#FAFAFA',
    flex: 1,
    fontSize: 13,
  },


})

export default TambahKeluarga;