import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet, impo, TouchableOpacity, TouchableHighlight } from 'react-native';
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
      pendidikan: '',
      email: '',
      mobile: '',
      jadwal_id: '',
      mulai: '',
      selesai: '',
      hari: '',
      mulai: '',
      selesai: '',
      jadwal: [],
      colorId: 0
    },
    {
      date: '01-03-2020'
    };
  }

  componentDidMount() {
    // alert(JSON.stringify(this.props.navigation.state.params.data))
    this.getJadwal(this.props.navigation.state.params.data)
    this.getprofil_dokter(this.props.navigation.getParam('dokter_id'));
  }

  getJadwal(data) {
    // alert(JSON.stringify(data.avatar))
    this.setState({ jadwal: data.jadwal, avatar: data.avatar})
    data.jadwal.map((item, index) => {
      this.setState({
        hari: item.hari_praktek == "1" ? "Senin" : item.hari_praktek == "2" ? "Selasa" : item.hari_praktek == "3" ? "Rabu" :
          item.hari_praktek == "4" ? "Kamis" : item.hari_praktek == "5" ? "Jumat" : item.hari_praktek == "6" ? "Sabtu" : "Minggu",
        mulai: item.mulai,
        selesai: item.selesai
      })
    })
  }

  getprofil_dokter = (dokter_id) => {
    const ApiUrl = `http://api-antrian.aviatapps.id/api/dokter/${dokter_id}`;
    axios.post(ApiUrl)
      .then(response => {
        // alert(JSON.stringify(response.data.data))
        this.setState({ profil_dokter: response.data.data })
      })

  }

  onPress = (id) => {
    this.setState({colorId: id});
  };

  validite(id, data){
    this.props.navigation.navigate('BookingAntrian', { member_id: id, data: data })
  }

  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>

        <ScrollView showsVerticalScrollIndicator={false} >
          {
            this.state.profil_dokter.map((data, index) => (
              <View style={{ width: '97%' }}>
                <View style={{ width: '100%', marginTop: 5, marginHorizontal: 5, borderRadius: 10, elevation: 5, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row', padding: 10, backgroundColor: 'white' }}>
                  <View style={{ width: '30%', justifyContent: 'center', alignSelf: 'center' }}>
                    <Image source={{ uri: this.state.avatar }} style={{ width: 80, height: 80 }}></Image>
                  </View>
                  <View style={{ width: '70%', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16 }}>{data.dokter_nama}</Text>
                    <Text style={{ color: '#848484' }}>{data.spesialis}</Text>
                    <Text style={{}}>{data.biografi}</Text>
                  </View>
                </View>
                {/* Biografi */}
                <Text style={{ fontSize: 18, marginVertical: 10, alignSelf: 'center' }}>Biografi</Text>
                <View style={{ width: '100%', marginTop: 5, marginHorizontal: 5, borderRadius: 10, elevation: 5, marginBottom: 10, justifyContent: 'space-between', padding: 10, backgroundColor: 'white' }}>
                  <Text>{data.pendidikan}</Text>
                  <Text>{data.email}</Text>
                  <Text>{data.mobile}</Text>
                </View>
                {/* Jadwal Praktik */}
                <Text style={{ fontSize: 18, alignSelf: 'center', marginVertical: 10 }}>Jadwal Praktik</Text>
                {this.state.jadwal.map((value, indexs) => {
                  return (
                    <View style={{ width: '100%', marginTop: 5, marginHorizontal: 5, borderRadius: 10, elevation: 5, marginBottom: 10, padding: 10, backgroundColor: 'white', flexDirection: 'row', justifyContent: 'space-between' }}>
                      <View style={{ width: '30%', justifyContent: 'center', alignSelf: 'center' }}>
                        <Text style={{ textAlign: 'center', color: '#0079eb' }}>{value.hari_praktek == "1" ? "Senin" : value.hari_praktek == "2" ? "Selasa" : value.hari_praktek == "3" ? "Rabu" :
                          value.hari_praktek == "4" ? "Kamis" : value.hari_praktek == "5" ? "Jumat" : value.hari_praktek == "6" ? "Sabtu" : "Minggu"}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', width: '60%', justifyContent: 'flex-start', left: -20 }}>
                        <TouchableOpacity
                          style={this.state.colorId === 1? styles.blue : styles.button}
                          onPress={()=>this.onPress(1)}>
                        <Text style={{}}>{value.mulai}</Text>
                        <Text style={{marginLeft: '5%'}}>{value.selesai}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })}
              </View>
            ))
          }

          {/* Pilih Tanggal */}
          <Text style={{ fontSize: 18, alignSelf: 'center', marginTop: 20 }}>Pilih Tanggal</Text>
          <View style={{ width: '100%', height: 40, marginTop: 10, paddingLeft: 20 }}>
            <DatePicker
              style={{ width: '100%' }}
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
              onDateChange={(date) => { this.setState({ date: date }) }}
            />
          </View>
        </ScrollView>
        {/* Button Booking */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center' }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.validite(data.member_id, data)} >
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
    borderRadius: 30,
    marginLeft: 16,
    width: 330,
    top: 30,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputs: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: Fonts.type.regular,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  blue: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#0079eb',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#0079eb',
    borderRadius: 10,
    width: '50%',
    height: '100%'
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#848484',
    borderRadius: 10,
    width: '50%',
    height: '100%'
  },
})

export default ProfilDokter;