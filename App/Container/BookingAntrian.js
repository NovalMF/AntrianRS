
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet, Picker } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import M from 'moment';
import { Fonts } from '../Themes';
import Modal from 'react-native-modal';
import DatePicker from 'react-native-datepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';
import Api from '../Services/Api';
import Constant from '../Library/constants';
import AsyncStorage from '@react-native-community/async-storage';


class UbahProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateProfil: [],
      nama_lengkap: '',
      jenis_kelamin: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      nik: '',
      relasi: '',
      alamat: '',
      gender: [
        { label: 'Laki-laki', value: 'L' },
        { label: 'Perempuan', value: 'P' }
      ],
      id_user: ''
    };
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>

        {/* Nama Pasien */}
        <View>
          <Text style={{ paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Nama Pasien</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.nama_lengkap}
              style={styles.inputs}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ nama_lengkap: text })}
            />
          </View>

          {/* Jenis Kelamin */}
          <Text style={{ marginTop: 10, paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Jenis Kelamin</Text>
          <View>
            <RadioForm
              radio_props={this.state.gender}
              initial={0}
              formHorizontal={true}
              labelStyle={{ marginRight: 20 }}
              animation={true}
              onPress={(value) => { this.setState({ jenis_kelamin: value }) }}
            />
          </View>

          {/* Tempat Lahir */}
          <Text style={{ paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Tempat Lahir</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.tempat_lahir}
              style={styles.inputs}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ tempat_lahir: text })}
            />
          </View>

          {/* Tanggal Lahir */}
          <Text style={{ marginTop: 10, paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Tanggal Lahir</Text>
          <DatePicker
            style={{ width: '100%' }}
            date={this.state.tanggal_lahir}
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
                top: 5,
                height: 50,
              },
              dateInput: {
                borderBottomWidth: 1,
                borderWidth: 0,
                borderBottomColor: '#eaeaea',
                alignItems: "flex-start",
                marginLeft: 1,
              }
            }}
            onDateChange={(date) => { this.setState({ tanggal_lahir: date }) }}
          />

        {/* Pembayaran */}
        <Text style={{marginTop:10, paddingBottom:5, fontFamily: Fonts.type.regular, color: 'black'}}>Pembayaran</Text>
                <View style={styles.inputContainer}> 
                <Picker
                         placeholder={{label: 'Pilih Pembayaran', value: null}}
                        selectedValue={this.state.pembayaran}
                        style={{ width: '90%'}}
                        onValueChange={(itemValue, itemIndex) =>
                            this.setState({pembayaran: itemValue})
                        }     
                    >
                        <Picker.Item label="Pembayaran1" value="pembayaran1" />
                        <Picker.Item label="Pembayaran2" value="pembayaran2" />
                        <Picker.Item label="Pembayaran3" value="pembayaran3" />
                    </Picker>
                </View>

                 {/* Catatan */}
              <Text style={{marginTop: 10, paddingBottom:5, fontFamily: Fonts.type.regular, color: 'black'}}>Catatan (jika ada)</Text>
                <View style={styles.inputContainer}> 
                    <TextInput 
                        style={styles.inputs}
                        placeholder="Tulis catatan anda..."
                        underlineColorAndroid='transparent'    
                    />
                </View>
        </View>


        {/* Button Simpan */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center' }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.props.navigation.navigate('History')}>
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Lanjut</Text>
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

export default UbahProfil;