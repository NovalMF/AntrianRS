
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet, Picker } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import axios from 'axios';
import Api from '../Services/Api';
import moment from 'moment/min/moment-with-locales'

moment.locale("id")

class History extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      history_booking: [],
      data: {}
    };
  }

  componentDidMount() {
    this.fetchBookingAntrian()
  }

  fetchBookingAntrian = async () => {
    const navParams = this.props.navigation.state.params
    const res = await Api.create().reservation(
      navParams.patient.member_id,
      {
        tgl_periksa: moment(navParams.date, 'DD-MM-YYYY').format('YYYY-MM-DD'),
        jadwal_id: navParams.schedule.jadwal_id
      }
    )

    this.setState({ data: res.data.data[0] })
  }

  render() {
    const { data } = this.state
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
        <View style={{ marginTop: 5 }} >
          {/* <View  
                    style={{ backgroundColor: 'white', width: 330, height: 250, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Text style={{ marginTop: 20, fontSize:16, alignSelf:'center'}}>Scan QR Code</Text>
                      <Image source={Images.qrcode} style={{width:250, height: 250, marginTop:-25, alignSelf: 'center'}}></Image>
                  </View> */}

          <View
            style={{ backgroundColor: 'white', width: '100%', marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20, paddingHorizontal: 10 }}>
            <Text style={{ marginTop: 20, fontSize: 16, alignSelf: 'center' }}>No. Antrian</Text>
            <Text style={styles.textQueue}>{data.no_urut}</Text>

            <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 20, marginBottom: 20, marginHorizontal: 16 }}></View>

            <View style={styles.layoutRow}>
              <View style={[styles.contentWrapper, styles.contentLeft]}>
                <Text style={styles.title}>Nama Pasien</Text>
                <Text style={styles.content}>{data.nama_lengkap}</Text>
              </View>

              <View style={styles.contentWrapper}>
                <Text style={styles.title}>Hari & Tanggal</Text>
                <Text style={styles.content}>{Object.keys(data).length ? moment(data.tgl_periksa, 'YYYY-MM-DD').format('dddd MMMM YYYY') : ''}</Text>
              </View>
            </View>

            <View style={styles.layoutRow}>
              <View style={[styles.contentWrapper, styles.contentLeft]}>
                <Text style={styles.title}>Poli</Text>
                <Text style={styles.content}>{data.poli_nama}</Text>
              </View>

              <View style={styles.contentWrapper}>
                <Text style={styles.title}>Waktu</Text>
                <Text style={styles.content}>{data.jam_periksa_mulai} - {data.jam_periksa_selesai}</Text>
              </View>
            </View>

            <View style={styles.layoutRow}>
              <View style={[styles.contentWrapper]}>
                <Text style={styles.title}>Nama Dokter</Text>
                <Text style={styles.content}>{data.dokter_nama}</Text>
              </View>
            </View>

            {/* <Text style={{ fontSize: 16, alignSelf: 'flex-start', marginLeft: 16, marginTop: 30 }}>Poli</Text>
            <Text style={{ fontSize: 16, alignSelf: 'flex-start', marginLeft: 16, marginTop: 30 }}>Nama Dokter</Text>
            <Text style={{ fontSize: 16, alignSelf: 'flex-end', marginRight: 16, marginTop: -114 }}>Hari & Tanggal</Text> */}
            {/* <Text style={{ fontSize: 16, alignSelf: 'flex-end', marginRight: 38, marginTop: 30 }}>Waktu</Text> */}
          </View>
        </View>

        {/* Button Lihat Antrian */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center' }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.props.navigation.navigate('AntrianSaya')} >
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Lihat Antrian </Text>
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
    marginLeft: 20,
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
  textQueue: {
    fontSize: 60,
    textAlign: 'center',
    color: '#0079EB',
  },
  layoutRow: {
    flexDirection: 'row',
    marginBottom: 10
  },
  contentLeft: {
    width: '60%',
    paddingRight: 5
  },
  title: {
    fontSize: 16,
    marginBottom: 5
  },
  content: {
    fontSize: 14,
    color: "#818181"
  }
})

export default History;