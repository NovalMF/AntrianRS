import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Images from '../../Library/Images';
import { SliderBox } from 'react-native-image-slider-box';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'native-base';
import { Fonts } from '../../Themes';

export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      images: [
        Images.hospital1, Images.hospital2
      ]
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Header */}
        <View style={{ height: 50, width: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center', alignItems: 'center', marginBottom: 20 }}>
          <View style={{ height: '80%', width: '24%' }}>
            <Image source={Images.contohlogo} style={{marginTop: 15, alignItems: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
          </View>
        </View>

        {/* Image Slider */}
        <SliderBox
  images={this.state.images}
  sliderBoxHeight={300}
  onCurrentImagePressed={index => console.warn(`image ${index} pressed`)}
  dotColor="#0079EB"
  inactiveDotColor="#FFFFFF"
  paginationBoxVerticalPadding={20}
  autoplay
  circleLoop
/>

        {/* Tombol Menu */}
        <View style={{flexDirection:'row', flexWrap: 'wrap', marginHorizontal: 16, marginTop: 30}}>
          <View style={{justifyContent:'space-between', flexDirection:'row', width: '100%', marginBottom: 19}}>
            <View style={{ width: '30%', alignItems: 'center'}}>
              <View style={{ backgroundColor: 'white', width: 100, height: 100, borderWidth: 0, borderColor: '#D6D6D6', borderRadius: 10, justifyContent:'center', alignItems: 'center', elevation:4}} >
                <Image source={Images.iconDokter} style={{width: 55, height: 55}}></Image>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center'}}>Dokter</Text>
                </View>
            </View>

            <View style={{ width: '30%', alignItems: 'center'}}>
              <View style={{ backgroundColor: 'white', width: 100, height: 100, borderWidth: 0, borderColor: '#D6D6D6', borderRadius: 10, justifyContent:'center', alignItems: 'center', elevation:4}} >
                <Image source={Images.iconAntrian} style={{width: 55, height: 55}}></Image>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center'}}>Antrian Saya</Text>
                </View>
            </View>

            <View style={{ width: '30%', alignItems: 'center'}}>
              <View style={{ backgroundColor: 'white', width: 100, height: 100, borderWidth: 0, borderColor: '#D6D6D6', borderRadius: 10, justifyContent:'center', alignItems: 'center', elevation:4}} >
                <Image source={Images.iconHubungiKami} style={{width: 55, height: 55}}></Image>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center'}}>Hubungi Kami</Text>
                </View>
            </View>
            </View>
            <View style={{justifyContent:'space-between', flexDirection: 'row', width: '100%', marginBottom: 19}}>
            <View style={{ width: '30%', alignItems: 'center'}}>
              <View style={{  backgroundColor: 'white', width: 100, height: 100, borderWidth: 0, borderColor: '#D6D6D6', borderRadius: 10, justifyContent:'center', alignItems: 'center', elevation:4}} >
                <Image source={Images.iconProfil} style={{width: 55, height: 55}}></Image>
                <Text style={{ fontFamily: Fonts.type.regular, fontSize: 15, textAlign: 'center'}}>Profil</Text>
                </View>
            </View>
          </View>
          </View>

          {/* garis <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 16 }}></View> */}

           {/* Promo Kesehatan*/}
           <View>
             <View style={{flexDirection:'row', marginBottom: 12, marginLeft: 16}}>
               <Text style={{fontFamily: Fonts.type.regular, fontSize: 20, top:7}}>Promo Kesehatan</Text>
               <Image source={Images.iconNext} style={{width: 40, height: 40}}></Image>
             </View>
             <ScrollView horizontal={true} style={{flexDirection: 'row', paddingLeft: 16}}>
             <View style={{marginRight: 16}}>
               <View style={{width: 170, height: 150, borderRadius: 10, marginBottom: 18, elevation:0}}>
                 <Image source={Images.promo1} style={{width: undefined, height: undefined, resizeMode: 'cover', flex:1, borderRadius: 10}}></Image>
               </View>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16}}>Promo Medical Check Up</Text>
              </View>
             <View style={{marginRight: 16}}>
               <View style={{width: 170, height: 150, borderRadius: 10, marginBottom: 18, elevation:0}}>
                 <Image source={Images.promo2} style={{width: undefined, height: undefined, resizeMode: 'cover', flex:1, borderRadius: 10}}></Image>
               </View>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16}}> Paket Promo MCU Paru Sehat</Text>
             </View>
             <View style={{marginRight: 16}}>
               <View style={{width: 170, height: 150, borderRadius: 10, marginBottom: 18, elevation:0}}>
                 <Image source={Images.promo3} style={{width: undefined, height: undefined, resizeMode: 'cover', flex:1, borderRadius: 10}}></Image>
               </View>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16}}>Promo Bulan Ini</Text>
             </View>
           </ScrollView>
           </View>

            {/* Info Kesehatan*/}
            <View>
             <View style={{flexDirection:'row', marginBottom: 12, marginLeft: 16, marginTop: 19}}>
               <Text style={{fontFamily: Fonts.type.regular, fontSize: 20, top:7}}>Info Kesehatan</Text>
               <Image source={Images.iconNext} style={{width: 40, height: 40}}></Image>
             </View>
             <ScrollView horizontal={true} style={{flexDirection: 'row', paddingLeft: 16}}>
             <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <View style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Semua</Text>
                </View>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <View style={{backgroundColor:'white', width: 120, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Makanan Sehat</Text>
                </View>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <View style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Kecantikan</Text>
                </View>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <View style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Kehamilan</Text>
                </View>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <View style={{backgroundColor:'white', width: 120, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Pola Asuh Anak</Text>
                </View>
              </View>
           </ScrollView>
          </View>

           {/* Isi Berita*/}
           <View>
             <View style={{flexDirection:'row', marginBottom: 12, marginLeft: 16, marginTop: 19, borderRadius: 10}}>
               <Image source={Images.berita1} style={{width: 130, height: 120}}></Image>
               <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, top:30, left: 12, width: 200}}>Cara Menurunkan Kolesterol Tinggi dengan Lemon</Text>
             </View>
             </View>
             <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 16 }}></View>
             <View>
             <View style={{flexDirection:'row', marginBottom: 12, marginLeft: 16, marginTop: 19, borderRadius: 10}}>
               <Image source={Images.berita2} style={{width: 130, height: 120}}></Image>
               <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, top:30, left: 12, width: 200}}>Pentingnya Perawatan Kulit di Malam Hari, Ini Tipsnya</Text>
             </View>
             </View>
      </ScrollView>
    );
  }
}
