

import React, { Component } from 'react';
import { Text, View, Button } from 'native-base';
import {  ScrollView, Image, StyleSheet, LayoutAnimation, Platform, UIManager, TouchableOpacity } from 'react-native';
import Images from '../Library/Images';
import { TextInput } from 'react-native-gesture-handler';
import Modal from 'react-native-modal';



class AntrianSaya extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        expanded1: false,
        expanded2: false,
        modalBatal: false,
        email   : '',
        history_booking: [],
    
    }

    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    };
  }

//   componentDidMount(){
//     this.getbooking_antrian();
//     this._subscribe = this.props.navigation.addListener('didFocus', () => {
//       //do you update if need
//       this.getbooking_antrian(); 
//     });
//   }
    
//   getbooking_antrian= () => {
//     const ApiUrl = 'http://api-antrian.aviatapps.id/api/dokter/DOK0004-1582';
//     axios.post(ApiUrl)
//     .then(response => {
//       this.setState({ booking_antrian:response.data.data })      
//     })
        
//   }

changeLayout1 = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({ expanded1: !this.state.expanded1 });
}

changeLayout2 = () => {
  LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
  this.setState({ expanded2: !this.state.expanded2 });
}

render() {
    return (
        <ScrollView style={{backgroundColor: 'white', flex: 1 }}>
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
          <View style={styles.container}>
              <View style={styles.btnTextHolder}>
                <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout1} style={styles.Btn}>
                    <Text style={styles.btnText}>Dr. Anastasia Lintang Maharani, Sp.OG</Text>
                    <Text style={{ marginTop: 3, fontSize:16, marginLeft: 5, color:'grey'}}>Poli Kebidanan dan Kandungan</Text>
                    <Text style={{ marginTop: 3, fontSize:16, marginLeft: 5}}>30 Maret 2020, 09:00 - 11:00</Text>
                </TouchableOpacity>

        <View style={{ height: this.state.expanded1 ? null : 0, overflow: 'hidden' }}>
          <View style={{justifyContent: 'center', flexDirection:'row'}}>
          <Text style={{left: 35, paddingTop: 10,}}>QR Code</Text>
            <Image source ={Images.qrcode} style={{width: 120, height: 120, marginTop: 30, left: -50, }}></Image>
            <Text style={{left: 15, paddingTop: 10,}}>No. Antrian</Text>
            <Text style={{color:'#0079eb', left:-40, marginTop: 50, fontSize: 50}}>02</Text>
          </View>
          <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 0 }}></View>
            <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <Image source={Images.iconKalender} style={{width:65, height: 65, left: -35, top: -10}}></Image>
            <Text style={{left:-40, top:5}}> Senin, 30 Maret 2020 </Text>
            <Text style={{left:-165, top:25}}>09:00 - 11:00</Text>
            </View>
          <Button style={{ backgroundColor:'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ modalBatal: true })}>
            <Text style={{color:'black'}}> Batalkan Janji </Text>
          </Button>
            
        </View>
        </View>
      </View>

      <View style={styles.container}>
              <View style={styles.btnTextHolder}>
                <TouchableOpacity activeOpacity={0.8} onPress={this.changeLayout2} style={styles.Btn}>
                    <Text style={styles.btnText}>Dr. John Doe, Sp.A</Text>
                    <Text style={{ marginTop: 3, fontSize:16, marginLeft: 5, color:'grey'}}>Poli Anak</Text>
                    <Text style={{ marginTop: 3, fontSize:16, marginLeft: 5}}>01 April 2020, 12:00 - 14:00</Text>
                </TouchableOpacity>

        <View style={{ height: this.state.expanded2 ? null : 0, overflow: 'hidden' }}>
          <View style={{justifyContent: 'center', flexDirection:'row'}}>
          <Text style={{left: 35, paddingTop: 10,}}>QR Code</Text>
            <Image source ={Images.qrcode} style={{width: 120, height: 120, marginTop: 30, left: -50, }}></Image>
            <Text style={{left: 15, paddingTop: 10,}}>No. Antrian</Text>
            <Text style={{color:'#0079eb', left:-40, marginTop: 50, fontSize: 50}}>08</Text>
          </View>
          <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 10, marginBottom: 20, marginHorizontal: 0 }}></View>
            <View style={{justifyContent: 'center', flexDirection:'row'}}>
            <Image source={Images.iconKalender} style={{width:65, height: 65, left: -35, top: -10}}></Image>
            <Text style={{left:-40, top:5}}> Rabu, 01 April 2020 </Text>
            <Text style={{left:-165, top:25}}>12:00 - 14:00</Text>
            </View>
          <Button style={{ backgroundColor:'white', justifyContent: 'center', alignItems: 'center' }} onPress={() => this.setState({ modalBatal: true })}>
            <Text style={{color:'black'}}> Batalkan Janji </Text>
          </Button>
            
        </View>
        </View>
      </View>

          {/* <View style={{marginTop: 5}} >
                  <TouchableOpacity  
                    style={{ backgroundColor: 'white', width: '100%', height: 90, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Text style={{ marginTop: 10, fontSize:18, marginLeft: 16,}}>Dr. Anastasia Lintang Maharani, Sp.OG</Text>
                      <Text style={{ marginTop: 3, fontSize:16, marginLeft: 16, color:'grey'}}>Poli Kebidanan dan Kandungan</Text>
                  </TouchableOpacity>
            </View> */}
          </ScrollView>

)
}
}

const styles = StyleSheet.create({
    containerStyle: {
        flex:1,
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
  inputs:{
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
    paddingTop: (Platform.OS === 'ios') ? 20 : 0
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
    height : 90,
  
  }
  
  
  })

export default AntrianSaya;