import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet } from 'react-native';
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
      infoHari: [
        { item: 'Senin' },
        { item: 'Selasa' },
        { item: 'Rabu' },
        { item: 'Kamis' },
        { item: 'Jumat' },
        { item: 'Sabtu' },
        { item: 'Minggu' },
      ]
    };
  }

  componentDidMount() {
    this.getdokter_PoliList(this.props.navigation.getParam('poli_id'));
  }

  getdokter_PoliList = (poli_id) => {
    const ApiUrl = `http://api-antrian.aviatapps.id/api/poli/dokter/${poli_id}`;
    axios.get(ApiUrl)
      .then(response => {
        // alert(JSON.stringify(ApiUrl))
        this.setState({ dokter_PoliList: response.data.data })
      })
  }

  validite(id, data) {
    this.props.navigation.navigate('ProfilDokter', { dokter_id: id, data: data })
  }


  render() {
    return (
      <View style={{ backgroundColor: 'white', flex: 1 }}>
        <View>
          <ScrollView horizontal={true} style={{ flexDirection: 'row', paddingLeft: 16, paddingTop: 10 }} showsHorizontalScrollIndicator={false} >
            {this.state.infoHari.map((item, index) => {
              return (
                <View style={{ marginRight: 16, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row' }}>
                  <TouchableOpacity style={{ backgroundColor: 'white', padding: 10, height: 35, borderRadius: 20, marginBottom: 18, justifyContent: 'center', alignItems: 'center', elevation: 0, borderColor: '#0079EB', borderWidth: 1 }}>
                    <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, textAlign: 'center', color: '#0079EB' }}>{item.item}</Text>
                  </TouchableOpacity>
                </View>
              )
            })}
          </ScrollView>
        </View>

        <ScrollView style={{ paddingTop: 5, paddingRight: 10 }} >
          {
            this.state.dokter_PoliList.map((data, index) => (
              <TouchableOpacity key={index} onPress={() => this.validite(data.dokter_id, data)}
                style={{ backgroundColor: 'white', width: '95%', marginLeft: 16, marginTop: 10, marginBottom: 10, borderRadius: 10, elevation: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                <View style={{ width: '30%', padding: 10 }}>
                  <Image source={{ uri: data.avatar }} style={{ width: 70, height: 70 }}></Image>
                </View>
                <View style={{ width: '70%', justifyContent: 'flex-start', paddingVertical: 5 }}>
                  <Text style={{ fontSize: 16 }}>{data.dokter_nama}</Text>
                  <Text style={{ color: '#848484' }}>{data.spesialis}</Text>
                </View>
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

})

export default Jadwaldokter;