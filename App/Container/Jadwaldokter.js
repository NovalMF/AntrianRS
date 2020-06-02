import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { FlatList, ScrollView, Image, StyleSheet } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../Themes';
import axios from 'axios';
import moment from 'moment/min/moment-with-locales'

moment.locale('id')

class Jadwaldokter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dokter_PoliList: [],
      infoHari: [
        { id: 1, item: 'Senin' },
        { id: 2, item: 'Selasa' },
        { id: 3, item: 'Rabu' },
        { id: 4, item: 'Kamis' },
        { id: 5, item: 'Jumat' },
        { id: 6, item: 'Sabtu' },
        { id: 0, item: 'Minggu' },
      ],
      selectedDoctorByDay: [],
      selectedDay: { id: moment().day(), item: moment().format('dddd') }
    };
  }

  componentDidMount() {
    this.getdokter_PoliList(this.props.navigation.getParam('poli_id'));
  }

  getdokter_PoliList = async (poli_id) => {
    const ApiUrl = `http://api-antrian.aviatapps.id/api/poli/dokter/${poli_id}`;
    const res = await axios.get(ApiUrl)

    this.setState({
      dokter_PoliList: res.data.data,
      selectedDoctorByDay: this.filterDoctorByDay(res.data.data)
    })
  }

  validate(id, data) {
    this.props.navigation.navigate('ProfilDokter', { dokter_id: id, data: data })
  }

  filterDoctorByDay = (doctors, selectedDay = this.state.selectedDay) => {
    let listDoctor = []
    doctors.forEach(r => {
      if (r.jadwal.find(v => v.hari_praktek === selectedDay.id.toString())) {
        listDoctor.push(r)
      }
    })

    return listDoctor
  }

  handleSelectedDay = day => {
    this.setState({
      selectedDay: day,
      selectedDoctorByDay: this.filterDoctorByDay(this.state.dokter_PoliList, day)
    })
  }

  render() {
    const { infoHari, selectedDay, selectedDoctorByDay } = this.state

    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View>
          <FlatList
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={styles.cardDayListContainer}
            data={infoHari}
            renderItem={({ item }) =>
              <TouchableOpacity
                style={[styles.cardDayWrapper, selectedDay.id === item.id && styles.cardDayWrapperSelected]}
                onPress={() => this.handleSelectedDay(item)}>
                <Text
                  style={[styles.cardDay, selectedDay.id === item.id && styles.cardDaySelected]}>
                  {item.item}
                </Text>
              </TouchableOpacity>
            }
            keyExtractor={item => item.item}
          />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.cardDoctorListContainer}
          data={selectedDoctorByDay}
          renderItem={({ item }) =>
            <TouchableOpacity
              style={styles.cardDoctorWrapper}
              onPress={() => this.validate(item.dokter_id, item)}>
              <View style={styles.cardDoctorHeroWrapper}>
                <Image
                  style={styles.cardDoctorHero}
                  source={{ uri: item.avatar }} />
              </View>
              <View style={styles.cardDoctorContentWrapper}>
                <Text style={styles.cardDoctorContentName}>{item.dokter_nama}</Text>
                <Text style={styles.cardDoctorContentSpecialization}>{item.spesialis}</Text>
              </View>
            </TouchableOpacity>
          }
          ListEmptyComponent={(
            <View style={styles.emptyDoctorWrapper}>
              <Text style={styles.emptyDoctor}>Tidak ada jadwal dokter</Text>
            </View>
          )}
          keyExtractor={item => item.dokter_id}
        />
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
  cardDayListContainer: {
    flexDirection: 'row',
    paddingLeft: 16,
    paddingTop: 10,
  },
  cardDayWrapper: {
    marginRight: 16,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 10,
    height: 35,
    borderRadius: 20,
    marginBottom: 18,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 0,
    borderColor: '#0079EB',
    borderWidth: 1,
  },
  cardDayWrapperSelected: {
    backgroundColor: '#0079EB',
  },
  cardDay: {
    fontFamily: Fonts.type.regular,
    fontSize: 16,
    textAlign: 'center',
    color: '#0079EB',
  },
  cardDaySelected: {
    color: 'white',
  },
  cardDoctorListContainer: {
    paddingTop: 5,
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  cardDoctorWrapper: {
    backgroundColor: 'white',
    width: '100%',
    marginTop: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  cardDoctorHeroWrapper: {
    width: '30%',
    padding: 10
  },
  cardDoctorHero: {
    width: 70,
    height: 70
  },
  cardDoctorContentWrapper: {
    width: '70%',
    justifyContent: 'flex-start',
    paddingVertical: 5
  },
  cardDoctorContentName: {
    fontSize: 16
  },
  cardDoctorContentSpecialization: {
    color: '#848484'
  },
  emptyDoctorWrapper: {
    flex: 1,
    marginTop: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyDoctor: {
    fontSize: 18,
    color: '#818181'
  }
})

export default Jadwaldokter;