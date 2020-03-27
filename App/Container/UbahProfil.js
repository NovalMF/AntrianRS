
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

  componentDidMount() {
    // alert(JSON.stringify(this.props.navigation.state.params.data))
    if (this.props.navigation.state.params.isFrom == 'profil') {
      let data = this.props.navigation.state.params.data
      this.setState({
        nama_lengkap: data.detail.nama_lengkap,
        jenis_kelamin: data.detail.jenis_kelamin,
        tanggal_lahir: data.detail.tanggal_lahir,
        tempat_lahir: data.detail.tempat_lahir,
        nik: data.detail.nik,
        alamat: data.detail.alamat,
        id_user: data.id
      })
    }

  }

  getupdateProfil = () => {
    const ApiUrl = 'http://api-antrian.aviatapps.id/api/user/update';
    axios.post(ApiUrl)
      .then(response => {
        this.setState({ updateProfil: response.data.data })
      })

  }

  handleupdateProfil = async() => {
    const ApiUrl = 'http://api-antrian.aviatapps.id/api/user/update/' + this.state.id_user;
    axios.post(ApiUrl, {
      nama: this.state.nama_lengkap,
      jenis_kelamin: this.state.jenis_kelamin,
      tempat_lahir: this.state.tempat_lahir,
      tanggal_lahir: M(this.state.tanggal_lahir).format('YYYY-MM-DD'),
      nik: this.state.nik,
      alamat: this.state.alamat
    }, {
      headers: {
        'accept': 'application/json',
        'Authorization': 'Bearer '  + await AsyncStorage.getItem(Constant.TOKEN)
      }
    }).then(response => {
      // alert(JSON.stringify(response.data))
      if (response.data.success == true) {
        this.props.navigation.goBack(this.props.navigation.state.params.getData())
      } else {
        this.setState({ errorMsg: response.data.message })
      }
    })

    // Api.create().updateProfil({
    //   nama: this.state.nama_lengkap,
    //   jenis_kelamin: this.state.jenis_kelamin,
    //   tempat_lahir: this.state.tempat_lahir,
    //   tanggal_lahir: M(this.state.tanggal_lahir).format('YYYY-MM-DD'),
    //   nik: this.state.nik,
    //   alamat: this.state.alamat
    // }).then((response) => {
    //   console.log(JSON.stringify(response))
    //   if (response.data.success == true) {
    //     this.props.navigation.goBack(this.props.getData())
    //   } else {
    //     this.setState({ errorMsg: response.data.message })
    //   }
    // })
  }

  navigateToProfil() {
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

        {/* Nama Lengkap */}
        <View>
          <Text style={{ paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Nama Lengkap</Text>
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

          {/* NIK */}
          <Text style={{ marginTop: 10, paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>NIK</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.nik}
              style={styles.inputs}
              placeholder="Ketik disini"
              keyboardType={'numeric'}
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ nik: text })}
            />
          </View>


          {/* Alamat */}
          <Text style={{ marginTop: 10, paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Alamat</Text>
          <View style={styles.inputContainer}>
            <TextInput
              value={this.state.alamat}
              style={styles.inputs}
              placeholder="Ketik disini"
              underlineColorAndroid='transparent'
              onChangeText={(text) => this.setState({ alamat: text })}
            />
          </View>
        </View>


        {/* Button Simpan */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center' }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.handleupdateProfil()}>
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