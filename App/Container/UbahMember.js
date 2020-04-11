
import React, { Component } from 'react';
import { Text, View, Header, Left, Body, Right, Button, Title } from 'native-base';
import { StyleSheet, Picker } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import RadioForm, {  } from 'react-native-simple-radio-button';
import Modal from 'react-native-modal';
import IconBack from 'react-native-vector-icons/Ionicons';


class UbahMember extends Component {
  constructor(props) {
    super(props);
    this.state = {
      updateMember: [],
      nama_lengkap: '',
      jenis_kelamin: '',
      tempat_lahir: '',
      tanggal_lahir: '',
      nik: '',
      relasi: '',
      alamat: '',
      modalClear: false,
      gender: [
        { label: 'Laki-laki', value: 'L' },
        { label: 'Perempuan', value: 'P' }
      ],
      member_id: ''
    };
  }

//   componentDidMount() {
//     // alert(JSON.stringify(this.props.navigation.state.params.data))
//     if (this.props.navigation.state.params.isFrom == 'profil') {
//       let data = this.props.navigation.state.params.data
//       this.setState({
//         nama_lengkap: data.detail.nama_lengkap,
//         jenis_kelamin: data.detail.jenis_kelamin,
//         tanggal_lahir: data.detail.tanggal_lahir,
//         tempat_lahir: data.detail.tempat_lahir,
//         nik: data.detail.nik,
//         alamat: data.detail.alamat,
//         id_user: data.id
//       })
//     }

//   }

//   getupdateMember = () => {
//     const ApiUrl = 'http://api-antrian.aviatapps.id/api/member';
//     axios.put(ApiUrl)
//       .then(response => {
//         this.setState({ updateMember: response.data.data })
//       })

//   }

//   handleupdateProfil = async() => {
//     const ApiUrl = 'http://api-antrian.aviatapps.id/api/member/' + this.state.member_id;
//     axios.put(ApiUrl, {
//       nama: this.state.nama_lengkap,
//       jenis_kelamin: this.state.jenis_kelamin,
//       tempat_lahir: this.state.tempat_lahir,
//       tanggal_lahir: M(this.state.tanggal_lahir).format('YYYY-MM-DD'),
//       nik: this.state.nik,
//       alamat: this.state.alamat
//     }, {
//       headers: {
//         'accept': 'application/json',
//         'Authorization': 'Bearer '  + await AsyncStorage.getItem(Constant.TOKEN)
//       }
//     }).then(response => {
//       // alert(JSON.stringify(response.data))
//       if (response.data.success == true) {
//         this.props.navigation.goBack(this.props.navigation.state.params.getData())
//       } else {
//         this.setState({ errorMsg: response.data.message })
//       }
//     })

//   }

//   navigateToProfil() {
//     const navigation = this.props.navigation;
//     const resetAction = StackActions.reset({
//       index: 0,
//       actions: [NavigationActions.navigate({ routeName: 'ProfilUser' })],
//     });
//     navigation.dispatch(resetAction)
//   }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <Modal
            onBackdropPress={() => this.setState({ modalClear: false })}
            isVisible={this.state.modalClear}
        >
            <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
                <Text style={{ alignSelf: 'center', fontSize: 24 }}>Hapus Member</Text>
                <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Apakah kamu yakin akan menghapus member ?</Text>
                <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
                    <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} >
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center' }}>Ya</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ height: 40, width: 70, borderRadius: 10, backgroundColor: '#f2f2f2', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalClear: false })}>
                        <View style={{ flex: 1, justifyContent: 'center' }}>
                            <Text style={{ alignSelf: 'center' }}>Tidak</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>

        <Header noShadow style={{backgroundColor: 'white', marginTop: 30}}>
          <Left>
            <Button transparent>
              <IconBack name='ios-arrow-back' size={30} color={'#0079eb'} style={{paddingLeft:10}} onPress={() => this.props.navigation.navigate('ProfilUser')} />
            </Button>
          </Left>
          <Body>
            <Text style={{fontSize: 20}}> Ubah Member </Text>
          </Body>
          <Right>
            <Button transparent onPress={() => this.setState({ modalClear: true })}>
              <Text style={{fontSize: 14, color: '#0079eb'}}>Hapus</Text>
            </Button>
          </Right>
        </Header>
               
        {/* Nama Lengkap */}
        <View style={{paddingHorizontal: 20, marginTop: 20}}>
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
            
            {/* Hubungan Keluarga / Relasi */}
          <Text style={{ marginTop: 10, paddingBottom: 5, fontFamily: Fonts.type.regular, color: 'black' }}>Hubungan Keluarga</Text>
          <View style={styles.inputContainer}>

            <Picker
              placeholder={{ label: 'Pilih salah satu', value: null }}
              selectedValue={this.state.relasi}
              style={{ width: '90%' }}
              onValueChange={(itemValue) =>
                this.setState({ relasi: itemValue })
              }

            >
              <Picker.Item label="Ayah" value="ayah" />
              <Picker.Item label="Ibu" value="ibu" />
              <Picker.Item label="Suami" value="suami" />
              <Picker.Item label="Istri" value="istri" />
              <Picker.Item label="Anak" value="anak" />
            </Picker>
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
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center', paddingHorizontal: 20 }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.props.navigation.navigate('ProfilUser') }>
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

export default UbahMember;