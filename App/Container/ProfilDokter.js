import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { Modal, ScrollView, Image, StyleSheet, impo, TouchableOpacity, TextInput } from 'react-native';
import Images from '../Library/Images';
import moment from 'moment/min/moment-with-locales'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { Fonts } from '../Themes';
import axios from 'axios';
import Api from '../Services/Api';

moment.locale('id')
LocaleConfig.locales['id'] = {
  monthNames: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
  monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mei', 'Jun', 'Jul', 'Agu', 'Sep', 'Okt', 'Nov', 'Dec'],
  dayNames: ['Minggu', 'Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu'],
  dayNamesShort: ['Min', 'Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab'],
  today: 'Hari ini'
};

LocaleConfig.defaultLocale = 'id';

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
      colorId: 0,
      date: "",
      selectedSchedule: {},
      showCalendar: false
    }
  }

  componentDidMount() {
    // alert(JSON.stringify(this.props.navigation.state.params.data))
    this.getJadwal(this.props.navigation.state.params.data)
    this.getprofil_dokter(this.props.navigation.getParam('dokter_id'));
  }

  getJadwal(data) {
    // alert(JSON.stringify(data.avatar))
    this.setState({ jadwal: data.jadwal, avatar: data.avatar })
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

  handleSelectedDate = date => {
    this.setState({ date, showCalendar: !this.state.showCalendar })
  }

  handleBooking = () => {
    this.props.navigation.navigate(
      'BookingAntrian',
      {
        schedule: this.state.selectedSchedule,
        date: this.state.date,
      }
    )
  }

  // validite(id, data){
  //   this.props.navigation.navigate('BookingAntrian', { member_id: id, data: data })
  // }

  render() {
    const { showCalendar, date } = this.state
    const bookingDisabled = this.state.date.length === 0 || !this.state.selectedSchedule.jadwal_id

    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={true}
          visible={showCalendar}>
          <View style={styles.modalCalendar}>
            <Calendar
              style={styles.calendar}
              current={date}
              onDayPress={day => this.handleSelectedDate(day.dateString)}
              monthFormat={'dd MMMM yyyy'}
              minDate={new Date()}
              firstDay={1}
              onPressArrowRight={addMonth => addMonth()}
              disableArrowLeft={true}
              markedDates={{
                [date]: { selected: true },
                '2020-05-24': { disabled: true }
              }}
            />
            <TouchableOpacity
              style={styles.btnCalendarClose}
              onPress={() => this.setState({ showCalendar: !showCalendar })}>
              <Text style={{ color: 'white' }}>Tutup</Text>
            </TouchableOpacity>
          </View>
        </Modal>

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollViewContainer}>
          {
            this.state.profil_dokter.map((data, index) => (
              <View style={{ width: '100%' }}>
                <View style={{ width: '100%', marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 10, justifyContent: 'space-between', flexDirection: 'row', padding: 10, backgroundColor: 'white' }}>
                  <View style={{ width: '30%' }}>
                    <Image source={{ uri: this.state.avatar }} style={{ width: 80, height: 80 }}></Image>
                  </View>
                  <View style={{ width: '70%', justifyContent: 'space-evenly' }}>
                    <Text style={{ fontSize: 16 }}>{data.dokter_nama}</Text>
                    <Text style={{ color: '#848484' }}>{data.spesialis}</Text>
                    <Text style={{}}>{data.biografi}</Text>
                  </View>
                </View>
                {/* Biografi */}
                < Text style={{ fontSize: 18, marginVertical: 10, alignSelf: 'center' }}>Biografi</Text>
                <View style={{ width: '100%', marginTop: 5, borderRadius: 5, elevation: 3, marginBottom: 10, justifyContent: 'space-between', padding: 10, backgroundColor: 'white' }}>
                  <Text>{data.pendidikan}</Text>
                  <Text>{data.email}</Text>
                  <Text>{data.mobile}</Text>
                </View>
                {/* Jadwal Praktik */}
                <Text style={{ fontSize: 18, alignSelf: 'center', marginVertical: 10 }}>Jadwal Praktik</Text>
                {this.state.jadwal.map((value, indexs) => {
                  return (
                    <View style={{ width: '100%', marginTop: 5, borderRadius: 5, elevation: 3, marginBottom: 10, padding: 10, backgroundColor: 'white', flexDirection: 'row' }}>
                      <View style={{ width: '30%', width: 70, marginLeft: 20 }}>
                        <Text style={{ color: '#0079eb' }}>{value.hari_praktek == "1" ? "Senin" : value.hari_praktek == "2" ? "Selasa" : value.hari_praktek == "3" ? "Rabu" :
                          value.hari_praktek == "4" ? "Kamis" : value.hari_praktek == "5" ? "Jumat" : value.hari_praktek == "6" ? "Sabtu" : "Minggu"}</Text>
                      </View>
                      <View style={{ flexDirection: 'row', justifyContent: 'flex-start', }}>
                        <TouchableOpacity
                          style={[styles.button, this.state.selectedSchedule.jadwal_id === value.jadwal_id && styles.blue]}
                          onPress={() => this.setState({ selectedSchedule: value })}>
                          <Text style={[this.state.selectedSchedule.jadwal_id === value.jadwal_id && { color: 'white' }]}>{value.mulai} - </Text>
                          <Text style={[this.state.selectedSchedule.jadwal_id === value.jadwal_id && { color: 'white' }]}>{value.selesai}</Text>
                        </TouchableOpacity>
                      </View>
                    </View>
                  )
                })}
              </View>
            ))
          }

          {/* Pilih Tanggal */}
          <Text style={styles.txtSelectDateTitle}>Pilih Tanggal</Text>
          <TouchableOpacity
            style={styles.btnSelectDate}
            onPress={() => this.setState({ showCalendar: !showCalendar })}>
            <TextInput
              style={styles.txtInputDate}
              placeholder="Silahkan pilih tanggal"
              value={date.length === 0 ? "" : moment(date, 'YYYY-MM-DD').format('DD MMMM YYYY')}
              editable={false}
            />
            <AntDesign name="calendar" color="#0079EB" size={25} />
          </TouchableOpacity>
        </ScrollView >

        {/* Button Booking */}
        < View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center' }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 10, justifyContent: 'flex-end' }}>
            <TouchableOpacity
              style={[{ alignItems: 'center', justifyContent: 'center', height: 40 }, bookingDisabled && styles.btnDisable]}
              onPress={this.handleBooking}
              disabled={bookingDisabled}
            >
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Booking</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View >
      </View >
    )
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 20
  },
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
    backgroundColor: '#0079eb',
    borderColor: '#0079eb',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#848484',
    borderRadius: 5,
    height: '100%',
    paddingHorizontal: 5,
  },
  btnDisable: {
    backgroundColor: "#aaa"
  },
  modalCalendar: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
  },
  calendar: {
    borderWidth: 1,
    borderColor: 'gray',
    padding: 10,
    flex: 1,
    width: '100%',
    marginBottom: 10,
    borderWidth: 0
  },
  btnCalendarClose: {
    backgroundColor: '#0079EB',
    justifyContent: 'center',
    alignItems: 'center',
    width: '90%',
    height: 40,
    marginBottom: 20,
    borderRadius: 5,
  },
  scrollViewContainer: {
    paddingHorizontal: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtSelectDateTitle: {
    fontSize: 18,
    alignSelf: 'center',
    marginTop: 20
  },
  btnSelectDate: {
    width: '100%',
    marginTop: 15,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    elevation: 3,
    backgroundColor: 'white',
    borderRadius: 5,
    marginBottom: 10,
  },
  txtInputDate: {
    height: 40,
    borderColor: 'gray',
    flex: 1,
    marginRight: 10,
    borderWidth: 0,
    fontSize: 16,
    height: 50,
    color: "#000"
  }
})

export default ProfilDokter;