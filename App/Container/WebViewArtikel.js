
import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet, Picker } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Fonts } from '../Themes';
import DatePicker from 'react-native-datepicker';
import WebView from 'react-native-webview';
import axios from 'axios';



class WebViewArtikel extends Component {
  constructor(props) {
    super(props);
    this.state = { 
        isi_artikel: [],
    
    };
  }

  componentDidMount(){
    this.getisi_artikel(this.props.navigation.getParam('artikel_id'));
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.getisi_artikel(this.props.navigation.getParam('artikel_id'));
    });
  }
    
  getisi_artikel= (artikel_id) => {
    const ApiUrl = `http://api-antrian.aviatapps.id/api/artikel/list/${artikel_id}`;
    axios.get(ApiUrl)
    .then(response => {
      this.setState({ isi_artikel:response.data.data })      
    })
        
  }

render() {
    return (
        <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
          <TouchableOpacity style={{marginTop: 20,paddingLeft: 12}} onPress={() => this.props.navigation.navigate('HomePage')}>
            <AntDesign name='left' size={25} color={'#0079EB'}></AntDesign>
          </TouchableOpacity>

          <View style={{paddingLeft:60}}>
            <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}>Artikel</Text>
          </View>
        
          <WebView
            source={{uri: 'https://github.com/facebook/react-native'}}
            style={{marginTop: 20}}
          />

          {/* <View style={{marginTop: 5}} >
            
                  <View key={index} onPress={() => this.props.navigation.navigate('ProfilDokter', {isi_artikel: data.artikel_id})}
                    style={{ backgroundColor: 'white', width: 330, height: 90, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Image source={{uri:data.header_img}} style={{width: 70, height: 70, marginLeft:10, marginTop: 8}}></Image>
                      <Text style={{paddingLeft: 90, marginTop: -70, fontSize:16}}>{data.kategori}</Text>
                      <Text style={{paddingLeft: 90, color: '#848484'}}>{data.judul}</Text>
                      <Text style={{paddingLeft: 90, color: '#848484'}}>{data.konten}</Text>
                  </View>
                  
                  
                ))
              }
          </View> */}
          </View>


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
  
  
  })

export default WebViewArtikel;