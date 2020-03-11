import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import {  ScrollView, Image, StyleSheet } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../Themes';
import axios from 'axios';



class Jadwaldokter extends Component {
  constructor(props) {
    super(props);
    this.state = {
    dokter_PoliList: [],
    };
  }

  componentDidMount(){
    this.getListDokterPoli(this.props.navigation.getParam('poli_id'));
    
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.getListDokterPoli(this.props.navigation.getParam('poli_id')); 
    });
  }
    
  getListDokterPoli = (poli_id) => {
    const ApiUrl = `http://api-antrian.aviatapps.id/api/poli/dokter/${poli_id}`;
    axios.get(ApiUrl)
    .then(response => {
      this.setState({ dokter_PoliList:response.data.data })      
    })
        
  }


  render() {
    return (
        <View style={{backgroundColor: 'white', height: '100%', width: '100%'}}>
          <TouchableOpacity style={{marginTop: 20,paddingLeft: 12}} onPress={() => this.props.navigation.navigate('Poli')}>
            <AntDesign name='left' size={25} color={'#0079EB'}></AntDesign>
          </TouchableOpacity>

          <View style={{paddingLeft:60}}>
            <Text style={{ top: -25, fontFamily: Fonts.type.regular, fontSize: 22}}>Dokter</Text>
          </View>

          <View>  
          <ScrollView horizontal={true} style={{flexDirection: 'row', paddingLeft: 16}}>
             <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Senin</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Selasa</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Rabu</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Kamis</Text>
                </TouchableOpacity>
              </View>
              <View style={{marginRight: 16, alignItems: 'center', justifyContent:'space-between', flexDirection: 'row'}}>
                <TouchableOpacity style={{backgroundColor:'white', width: 80, height: 35, borderRadius: 20, marginBottom: 18, justifyContent:'center', alignItems:'center', elevation:0, borderColor: '#0079EB', borderWidth: 1}}>
                 <Text style={{fontFamily: Fonts.type.regular, fontSize: 16, textAlign:'center', color: '#0079EB'}}>Jumat</Text>
                </TouchableOpacity>
              </View>
           </ScrollView>
           </View>

          <ScrollView style={{marginTop: 5}} >
            {
                this.state.dokter_PoliList.map((data, index)=>(
                  <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('ProfilDokter', {dokter_id: data.dokter_id })}
                    style={{ backgroundColor: 'white', width: 330, height: 90, marginLeft: 16, marginTop: 5, borderRadius: 10, elevation: 5, marginBottom: 20}}>
                      <Image source={{uri:data.avatar}} style={{width: 70, height: 70, marginLeft:10, marginTop: 8}}></Image>
                      <Text style={{paddingLeft: 90, marginTop: -70, fontSize:16}}>{data.dokter_nama}</Text>
                      <Text style={{paddingLeft: 90, color: '#848484'}}>{data.spesialis}</Text>
                  </TouchableOpacity>
                  
                ))
              }
          </ScrollView>

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
    borderRadius:30,
    marginLeft: 16,
    width:330,
    top: 30,
    height:50,
    flexDirection: 'row',
    alignItems:'center', 
},
inputs:{
  fontSize: 16,
  marginLeft:10,
  fontFamily: Fonts.type.regular,
  borderBottomColor: '#FFFFFF',
  flex:1,
},

})

export default Jadwaldokter;