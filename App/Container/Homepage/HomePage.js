import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Images from '../../Library/Images';
import DeviceInfo from 'react-native-device-info'
import { SliderBox } from 'react-native-image-slider-box';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch, Container } from 'native-base';
import { Fonts } from '../../Themes';
import axios from 'axios';
import Api from '../../Services/Api';
import AsyncStorage from '@react-native-community/async-storage';
import Constant from '../../Library/constants';


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [Images.hospital1, Images.hospital2],
      artikel: [],
      nama: '',
      infoArray: [
        { item: 'Semua' },
        { item: 'Kesehatan' },
        { item: 'Kecantikan' },
        { item: 'Kehamilan' },
        { item: 'Pola Asuh Anak' },
      ]
    };
  }

  componentDidMount() {
    console.log(AsyncStorage.getItem(Constant.TOKEN))
    this.getartikel();
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.getartikel();
    });
    // this.getData()
  }


  async getData() {
    // var nama = await AsyncStorage.getItem(Constant.NAMA)
    // this.setState({ nama })
  }
  // CARA LAMA
  getartikel = () => {
    const ApiUrl = 'http://api-antrian.aviatapps.id/api/artikel/list';
    axios.get(ApiUrl)
      .then(response => {
        // alert(JSON.stringify(response))
        this.setState({ artikel: response.data.data })
      })
  }

  render() {
    return (
      <Container style={{ marginTop: DeviceInfo.hasNotch() ? 25 : 25 }}>
        <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
          {/* Header */}
          <View style={{ height: 50, width: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
            <View style={{ height: '80%', width: '24%' }}>
              <Image source={Images.contohlogo} style={{ marginTop: 15, alignItems: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
            </View>
          </View>

          {/* Image Slider */}
          <SliderBox
            images={this.state.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
            dotColor="#0079EB"
            inactiveDotColor="#FFFFFF"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
          />

          {/* Tombol Menu */}
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 16, marginTop: 30 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 19 }}>

              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('Poli')}>
                  <Image source={Images.iconDokter} style={{ width: 55, height: 55, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center' }} onPress={() => this.props.navigation.navigate('Poli')}>Dokter</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('AntrianSaya')}>
                  <Image source={Images.iconAntrian} style={{ width: 55, height: 55, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center' }} onPress={() => this.props.navigation.navigate('AntrianSaya')}>Antrian Saya</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('HubungiKami')}>
                  <Image source={Images.iconHubungiKami} style={{ width: 55, height: 55, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center' }} onPress={() => this.props.navigation.navigate('HubungiKami')}>Hubungi Kami</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 19 }}>
              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('ProfilUser')}>
                  <Image source={Images.iconProfil} style={{ width: 55, height: 55, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center' }} onPress={() => this.props.navigation.navigate('ProfilUser')}>Profil</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>

          {/* garis <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 16 }}></View> */}

          {/* Promo Kesehatan*/}
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 12, marginLeft: 16 }}>
              <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, top: 7 }}>Promo Kesehatan</Text>
              <Image source={Images.iconNext} style={{ width: 40, height: 40 }}></Image>
            </TouchableOpacity>

            <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingLeft: 16 }} showsHorizontalScrollIndicator={false}>
              <TouchableOpacity style={{ marginRight: 16 }}>
                <View style={{ width: 170, height: 150, borderRadius: 10, marginBottom: 18, elevation: 0 }}>
                  <Image source={Images.promo1} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                </View>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16 }}>Promo Medical Check Up</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ marginRight: 16 }}>
                <View style={{ width: 170, height: 150, borderRadius: 10, marginBottom: 18, elevation: 0 }}>
                  <Image source={Images.promo2} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                </View>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16 }}> Paket Promo MCU Paru Sehat</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{ marginRight: 16 }}>
                <View style={{ width: 170, height: 150, borderRadius: 10, marginBottom: 18, elevation: 0 }}>
                  <Image source={Images.promo3} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }}></Image>
                </View>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16 }}>Promo Bulan Ini</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>

          {/* Info Kesehatan*/}
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 12, marginLeft: 16, marginTop: 19 }}>
              <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, top: 7 }}>Info Kesehatan</Text>
              <Image source={Images.iconNext} style={{ width: 40, height: 40 }}></Image>
            </TouchableOpacity>

            <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingLeft: 16 }} showsHorizontalScrollIndicator={false} >
              {this.state.infoArray.map((item, index) => {
                return (
                  <View style={{ marginRight: 16, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                    <TouchableOpacity style={{ backgroundColor: 'white', padding:10, height: 35, borderRadius: 20, marginBottom: 18, justifyContent: 'center', alignItems: 'center', elevation: 0, borderColor: '#0079EB', borderWidth: 1 }}>
                      <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, textAlign: 'center', color: '#0079EB' }}>{item.item}</Text>
                    </TouchableOpacity>
                  </View>
                )
              })}
            </ScrollView>
          </View>

          {/* Isi Berita*/}
          <ScrollView>
            {
              this.state.artikel.map((data, index) => (
                <TouchableOpacity
                  key={index} onPress={() => this.props.navigation.navigate('Artikel', { link: data.link_url })} style={{ flexDirection: 'row', marginBottom: 12, marginLeft: 16, marginTop: 19 }}>
                  <Image source={{ uri: data.header_img }} style={{ width: 130, height: 120 }}></Image>
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, top: 30, left: 12, width: 200, borderRadius: 10 }}>{data.judul}</Text>
                </TouchableOpacity>
              ))
            }
          </ScrollView>
        </ScrollView>
      </Container>
    );
  }
}
