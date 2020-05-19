

import React, { Component, useState } from 'react';
import { Text, View, Button } from 'native-base';
import { ScrollView, Image, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity, FlatList } from 'react-native';
import Images from '../Library/Images';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';
import axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';
import Api from '../Services/Api';
import moment from 'moment/min/moment-with-locales'

moment.locale("id")

class AntrianSaya extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded1: false,
      expanded2: false,
      modalBatal: false,
      nama_lengkap: '',
      poli_nama: '',
      dokter_nama: '',
      tgl_periksa: '',
      tgl_reservasi: '',
      hari_periksa: '',
      no_urut: '',
      jam_periksa_mulai: '',
      jam_periksa_selesai: '',
      history_booking: [],
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    };
  }

  componentDidMount() {
    this.gethistory_booking();
  }

  gethistory_booking() {
    Api.create().getListHistory().then((response) => {
      if (response.data.success == true) {
        this.setState({ history_booking: response.data.data })
      }
    })
  }


  changeLayout1 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded1: !this.state.expanded1 });
  }

  changeLayout2 = () => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    this.setState({ expanded2: !this.state.expanded2 });
  }

  render() {
    const { history_booking } = this.state
    return (
      <View style={{ flex: 1, backgroundColor: 'white' }}>
        <Modal
          onBackdropPress={() => this.setState({ modalBatal: false })}
          isVisible={this.state.modalBatal}
        >
          <View style={{ height: 200, width: '100%', backgroundColor: 'white', paddingVertical: 15, paddingHorizontal: 20 }}>
            <Text style={{ alignSelf: 'center', flexWrap: 'wrap', marginTop: 10 }}>Apakah kamu yakin akan membatalkan janji?</Text>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', flex: 1, paddingHorizontal: 40, paddingBottom: 30 }}>
              <TouchableOpacity style={{ height: 50, width: 90, borderRadius: 10, backgroundColor: '#0079eb', opacity: 1, alignSelf: 'flex-end' }}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ alignSelf: 'center', color: 'white' }}>Ya</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity style={{ height: 50, width: 90, borderRadius: 10, backgroundColor: '#0079eb', opacity: 1, alignSelf: 'flex-end' }} onPress={() => this.setState({ modalBatal: false })}>
                <View style={{ flex: 1, justifyContent: 'center' }}>
                  <Text style={{ alignSelf: 'center', color: 'white' }}>Tidak</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>

        <FlatList
          data={history_booking}
          renderItem={({ item }) =>
            <AccordionCard
              data={item}
              onCancel={() => this.setState({ modalBatal: true })}
            />
          }
          keyExtractor={(item, index) => index.toString()}
        />


        {/* <View style={{marginTop: 5}} >
                  <TouchableOpacity  
                    style={{ backgroundColor: 'white', width: '100%', height: 90, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Text style={{ marginTop: 10, fontSize:18, marginLeft: 16,}}>Dr. Anastasia Lintang Maharani, Sp.OG</Text>
                      <Text style={{ marginTop: 3, fontSize:16, marginLeft: 16, color:'grey'}}>Poli Kebidanan dan Kandungan</Text>
                  </TouchableOpacity>
            </View> */}
      </View>

    )
  }
}

const AccordionCard = ({ data, onCancel }) => {
  const [opening, setOpening] = useState(false)

  function handleOpen() {
    setOpening(!opening)
  }

  return (
    <View style={styles.container}>
      <View style={styles.btnTextHolder}>
        <TouchableOpacity activeOpacity={0.8} style={styles.Btn} onPress={handleOpen}>
          <Text style={styles.btnText}>{data.dokter_nama}</Text>
          <Text style={{ marginTop: 3, fontSize: 16, marginHorizontal: 5, color: 'grey' }}>{data.poli_nama}</Text>
          <Text style={{ marginTop: 3, fontSize: 16, marginHorizontal: 5 }}>{moment(data.tgl_periksa, 'YYYY-MM-DD').format('DD MMMM YYYY')}, {data.jam_periksa_mulai} - {data.jam_periksa_selesai}</Text>
        </TouchableOpacity>

        <View style={{ height: opening ? null : 0, overflow: 'hidden' }}>
          <View style={{ justifyContent: 'center', flexDirection: 'row' }}>
            {/* <Text style={{ left: 35, paddingTop: 10, }}>QR Code</Text>
            <Image source={Images.qrcode} style={{ width: 120, height: 120, marginTop: 30, left: -50, }}></Image> */}
            <Text style={{ left: 15, paddingTop: 10, }}>No. Antrian</Text>
            <Text style={{ color: '#0079eb', left: -40, marginTop: 50, fontSize: 50 }}>{data.no_urut}</Text>
          </View>
          <View style={{ borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 0 }}></View>
          <View style={{ flexDirection: 'row', marginHorizontal: 5 }}>
            <Image source={Images.iconKalender} style={{ width: 65, height: 65, top: -10 }}></Image>
            <View style={{ marginTop: 5 }}>
              <Text>{moment(data.tgl_periksa, 'YYYY-MM-DD').format('dddd')}, {moment(data.tgl_periksa, 'YYYY-MM-DD').format('DD MMMM YYYY')} </Text>
              <Text>{data.jam_periksa_mulai} - {data.jam_periksa_selesai}</Text>
            </View>
          </View>
          <Button
            style={{ backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}
            onPress={onCancel}
          >
            <Text style={{ color: 'black' }}> Batalkan Janji </Text>
          </Button>

        </View>
      </View>
    </View>
  )
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
  container: {
    flex: 1,
    marginTop: 20,
    paddingHorizontal: 10,
    justifyContent: 'center',
    paddingTop: (Platform.OS === 'ios') ? 20 : 0,
  },

  text: {
    fontSize: 17,
    color: 'black',
    padding: -60,
    paddingTop: 10,
  },

  btnText: {
    color: 'black',
    fontSize: 18,
    marginLeft: 5

  },

  btnTextHolder: {
    borderWidth: 1,
    borderColor: '#eaeaea',
    borderRadius: 10

  },

  Btn: {
    padding: 10,
    width: '100%',
    height: 90,

  }


})

export default AntrianSaya;