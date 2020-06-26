import React, { Component } from 'react';
import { ActivityIndicator, FlatList, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Images from '../../Library/Images';
import DeviceInfo from 'react-native-device-info'
import { SliderBox } from 'react-native-image-slider-box';
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
      ],
      selectedArticleType: { item: 'Semua' },
      loadingArtikel: true,
      promoList: []
    };
  }

  componentDidMount() {
    console.log(AsyncStorage.getItem(Constant.TOKEN))
    this.fetchArtikel()
    this.fetchPromo()
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.fetchArtikel()
    });
    // this.getData()
  }


  componentDidUpdate(prevProps, prevState) {
    if (prevState.selectedArticleType !== this.state.selectedArticleType) {
      this.fetchArtikel()
    }
  }

  fetchArtikel = async () => {
    let res
    const artikel = this.state.selectedArticleType.item.toLowerCase()

    if (artikel !== "semua") {
      res = await axios.get(`http://api-antrian.aviatapps.id/api/artikel/kategori/${artikel}`)
    } else {
      res = await axios.get('http://api-antrian.aviatapps.id/api/artikel/list')
    }

    this.setState({ artikel: res.data.data, loadingArtikel: false })
  }

  fetchPromo = async () => {
    try {
      const res = await axios.get('http://api-antrian.aviatapps.id/api/promo/list')
      this.setState({ promoList: res.data.data })
    } catch (ex) {
      console.log(ex)
    }
  }

  async getData() {
    // var nama = await AsyncStorage.getItem(Constant.NAMA)
    // this.setState({ nama })
  }

  handleSelectedArticleType = type => {
    this.setState({
      selectedArticleType: type,
      loadingArtikel: true
    })
  }

  render() {
    const { infoArray, selectedArticleType, artikel, promoList, loadingArtikel } = this.state

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
          <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginTop: 30, marginBottom: 5 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 19 }}>

              <View style={{ width: '25%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 10, elevation: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('Poli')}>
                  <Image source={Images.iconDokter} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, alignSelf: 'center', marginTop: 8 }} >Dokter</Text>
              </View>

              <View style={{ width: '25%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 10, elevation: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('AntrianSaya')}>
                  <Image source={Images.iconAntrian} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, alignSelf: 'center', marginTop: 8 }} >Antrian Saya</Text>
              </View>

              <View style={{ width: '25%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 10, elevation: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('HubungiKami')}>
                  <Image source={Images.iconHubungiKami} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, alignSelf: 'center', marginTop: 8 }} >{`Hubungi\nKami`}</Text>
              </View>

              <View style={{ width: '25%', alignItems: 'center' }}>
                <TouchableOpacity style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 10, elevation: 3, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.props.navigation.navigate('ProfilUser')}>
                  <Image source={Images.iconProfil} style={{ width: 50, height: 50, resizeMode: 'contain', alignSelf: 'center' }} />
                </TouchableOpacity>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, alignSelf: 'center', marginTop: 8 }} >Profil</Text>
              </View>
            </View>
          </View>

          {/* Tombol Menu */}
          {/* <View style={{ flexDirection: 'row', flexWrap: 'wrap', marginHorizontal: 16, marginTop: 30 }}>
            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 19 }}>

              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('Poli')}>
                  <Image source={Images.iconDokter} style={{ width: 45, height: 45, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, textAlign: 'center', marginTop: 10 }} onPress={() => this.props.navigation.navigate('Poli')}>Dokter</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('AntrianSaya')}>
                  <Image source={Images.iconAntrian} style={{ width: 45, height: 45, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center', marginTop: 10 }} onPress={() => this.props.navigation.navigate('AntrianSaya')}>Antrian Saya</Text>
                </TouchableOpacity>
              </View>

              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('HubungiKami')}>
                  <Image source={Images.iconHubungiKami} style={{ width: 40, height: 40, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center', marginTop: 10 }} onPress={() => this.props.navigation.navigate('HubungiKami')}>Hubungi Kami</Text>
                </TouchableOpacity>
              </View>
            </View>

            <View style={{ justifyContent: 'space-between', flexDirection: 'row', width: '100%', marginBottom: 19 }}>
              <View style={{ width: '30%', alignItems: 'center' }}>
                <TouchableOpacity style={{ backgroundColor: 'white', width: '100%', height: 100, justifyContent: 'center', alignItems: 'center', borderRadius: 10, elevation: 2 }} onPress={() => this.props.navigation.navigate('ProfilUser')}>
                  <Image source={Images.iconProfil} style={{ width: 40, height: 40, resizeMode: 'contain', alignSelf: 'center' }} />
                  <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center', marginTop: 10 }} onPress={() => this.props.navigation.navigate('ProfilUser')}>Profil</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View> */}

          {/* garis <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 16 }}></View> */}

          {/* Promo Kesehatan*/}
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 12, marginLeft: 16 }}>
              <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, top: 7 }}>Promo Kesehatan</Text>
              <Image source={Images.iconNext} style={{ width: 40, height: 40 }}></Image>
            </TouchableOpacity>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: 'row' }}
              data={promoList}
              renderItem={({ item }) =>
                <View style={{ flexDirection: 'row', paddingLeft: 16 }}>
                  <TouchableOpacity
                    style={{ marginRight: 16, width: 170 }}
                    onPress={() => this.props.navigation.navigate('Promo', { link: item.link_url })}>
                    <View style={{ width: 170, height: 130, borderRadius: 10, marginBottom: 18, elevation: 0 }}>
                      <Image source={{ uri: item.header_img }} style={{ width: undefined, height: undefined, resizeMode: 'cover', flex: 1, borderRadius: 10 }} />
                    </View>
                    <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, textAlign: 'center' }}>{item.judul}</Text>
                  </TouchableOpacity>
                </View>
              }
              keyExtractor={(item) => item.promo_id}
            />
          </View>

          {/* Info Kesehatan*/}
          <View>
            <TouchableOpacity style={{ flexDirection: 'row', marginBottom: 12, marginLeft: 16, marginTop: 19 }}>
              <Text style={{ fontFamily: Fonts.type.regular, fontSize: 20, top: 7 }}>Info Kesehatan</Text>
              <Image source={Images.iconNext} style={{ width: 40, height: 40 }}></Image>
            </TouchableOpacity>

            <FlatList
              horizontal={true}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ flexDirection: 'row', paddingLeft: 16 }}
              data={infoArray}
              renderItem={({ item }) =>
                <View style={{ marginRight: 16, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                  <TouchableOpacity
                    style={{ backgroundColor: selectedArticleType.item === item.item ? '#0079EB' : 'white', padding: 10, height: 35, borderRadius: 20, marginBottom: 18, justifyContent: 'center', alignItems: 'center', elevation: 0, borderColor: '#0079EB', borderWidth: 1 }}
                    onPress={() => this.handleSelectedArticleType(item)}>
                    <Text
                      style={{ fontFamily: Fonts.type.regular, fontSize: 16, textAlign: 'center', color: selectedArticleType.item === item.item ? 'white' : '#0079EB' }}>
                      {item.item}
                    </Text>
                  </TouchableOpacity>
                </View>
              }
              keyExtractor={(item) => item.item}
            />
          </View>

          {/* Isi Berita*/}
          {
            loadingArtikel ?
              <View
                style={{ flex: 1, marginTop: 10, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}
              >
                <ActivityIndicator size="large" color="#0079EB" />
              </View>
              :
              <FlatList
                showsVerticalScrollIndicator={false}
                data={artikel}
                renderItem={({ item }) =>
                  <TouchableOpacity
                    style={{ flexDirection: 'row', marginBottom: 12, marginLeft: 16, marginTop: 19 }}
                    onPress={() => this.props.navigation.navigate('Artikel', { link: item.link_url })}>
                    <Image
                      style={{ width: 130, height: 120 }}
                      source={{ uri: item.header_img }} />
                    <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, top: 30, left: 12, width: 200, borderRadius: 10 }}>
                      {item.judul}
                    </Text>
                  </TouchableOpacity>
                }
                ListEmptyComponent={(
                  <View style={{ flex: 1, marginTop: 10, marginBottom: 50, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: 18, color: '#818181' }}>Tidak ada artikel terkait</Text>
                  </View>
                )}
                keyExtractor={item => item.judul}
              />
          }
        </ScrollView>
      </Container>
    );
  }
}
