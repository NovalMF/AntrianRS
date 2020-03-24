
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet, Picker, Alert } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AsyncStorage from '@react-native-community/async-storage';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import RadioForm, { RadioButton, RadioButtonInput, RadioButtonLabel } from 'react-native-simple-radio-button';
import axios from 'axios';
import Api from '../Services/Api';

var radio_props = [
  { label: 'Laki-laki', value: 0 },
  { label: 'Perempuan', value: 1 }
];

class UbahProfil extends Component {
  constructor(props) {
    super(props);
    this.state = {
      UpdateProfil: [],
      name: '',
      tempat_lahir: '',
      jenis_kelamin: '',
      tanggal_lahir: '',
      nik: '',
      alamat: '',
    };
  }

    componentDidMount(){
      this.getUpdateProfil()
      // AsyncStorage.getItem('name').then((value) => this.setState({ 'name': value }));
      // AsyncStorage.getItem('email').then((value) => this.setState({ 'email': value }));
      // AsyncStorage.getItem('noTelepon').then((value) => this.setState({ 'noTelepon': value }));
    }

    getUpdateProfil = () => {
      Api.create().UpdateProfil({
          name: this.state.name,
          jenis_kelamin: this.state.jenis_kelamin,
          tempat_lahir: this.state.tempat_lahir,
          tanggal_lahir: this.state.tanggal_lahir,
          nik: this.state.nik,
          alamat: this.state.alamat
      }).then((response) => {
          alert(JSON.stringify(response))
          if (response.data.success == true) {
              this.getDataUser(
                  response.data.success,
                  response.data.message,
              )
              this.navigateToProfilUser()
          } else {
              this.setState({ errorMsg: response.data.message }) 
          }
      })
    }

    navigateToProfilUser() { 
      const navigation = this.props.navigation;
      const resetAction = StackActions.reset({
          index: 0,
          actions: [NavigationActions.navigate({ routeName: 'ProfilUser' })],
      });
      navigation.dispatch(resetAction) 
  }
  
 render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>

        {/* Username */}
        <View>
          <Text style={{ paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Nama Lengkap</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({name: text})}
            />
          </View>

          {/* Jenis Kelamin */}
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Jenis Kelamin</Text>
          <View>
            <RadioForm
              radio_props={radio_props}
              initial={0}
              formHorizontal={true}
              labelStyle={{ marginRight: 20 }}
              animation={true}
              onPress={(value) => { this.setState({ jenis_kelamin: value }) }}
            />
          </View>

          {/* Tempat Lahir */}
          <Text style={{ paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Tempat Lahir</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({tempat_lahir: text})}
            />
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
            onDateChange={(date) => { this.setState({ tanggal_lahir: date }) }}
          />
          
           {/* NIK */}
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>NIK</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType={'numeric'}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({nik: text})}
            />
          </View>

          {/* Alamat */}
          <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Alamat</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType={'numeric'}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({alamat: text})}
            />
          </View>

          {/* No.Telepon */}
          {/* <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>No.Telepon</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType={'numeric'}
              underlineColorAndroid='transparent'
              value={this.state.noTelepon}
              onChangeText={this.setnoTelepon}
            />
          </View> */}

          {/* Email */}
          {/* <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Email</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType="email-address"
              underlineColorAndroid='transparent'
              value={this.state.email}
              onChangeText={this.setemail}
            />
          </View> */}

          {/* Password */}
          {/* <Text style={{ marginTop: 10, paddingBottom: 5,  fontFamily: Fonts.type.regular, color: 'black' }}>Password</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.inputs}
              secureTextEntry={this.state.pass}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ password: text })}
            />
          </View>
        </View> */}
  </View>

        {/* Button Simpan */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center'}}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={this.getUpdateProfil()} >
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

export default UbahProfil;