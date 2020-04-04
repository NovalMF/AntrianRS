import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { ScrollView, Image, StyleSheet } from 'react-native';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity, TextInput } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Fonts } from '../Themes';
import axios from 'axios';



class Poli extends Component {
  constructor(props) {
    super(props);
    this.state = {
      poli_list: [],
      data: [],
      dataBackup: [],
    };
  }

  componentDidMount() {
    this.getListPoli();
    this._subscribe = this.props.navigation.addListener('didFocus', () => {
      //do you update if need
      this.getListPoli();
    });
  }

  getListPoli = () => {
    const ApiUrl = 'http://api-antrian.aviatapps.id/api/poli';
    axios.get(ApiUrl)
      .then(response => {
        // alert(JSON.stringify(response.data.data))
        this.setState({ poli_list: response.data.data })
      })

  }


  render() {
    return (
      <View style={{ backgroundColor: 'white', height: '100%', width: '100%', paddingHorizontal: 20 }}>
        <View style={{}}>
          <Text style={{ paddingTop: 5, fontFamily: Fonts.type.regular, fontSize: 16, color: '#848484' }}>Silahkan pilih poli yang tersedia</Text>
        </View>

        <View style={styles.inputContainer}>
          <TextInput style={styles.inputs}
            placeholder="Cari Poliklinik"
            keyboardType="default"
            underlineColorAndroid='transparent'
            onChangeText={(search) => this.setState({ search })}
          />
          <AntDesign name='search1' size={25} style={{ marginRight: 20 }} color={'#848484'} />
        </View>
        <ScrollView style={{ marginTop: 30}} >
          {
            this.state.poli_list.map((data, index) => (
              <TouchableOpacity key={index} onPress={() => this.props.navigation.navigate('Jadwaldokter', { poli_id: data.poli_id, data: data })}
                style={{ backgroundColor: 'white', width: '95%', height: 80, margin: 10, marginBottom: 10, borderRadius: 10, elevation: 5, justifyContent: 'space-between', flexDirection: 'row' }}>
                <View style={{ width: '20%', justifyContent: 'center', height: '100%' }}>
                  <Image source={{ uri: data.icon_image }} style={{ width: 60, height: 60 }}></Image>
                </View>
                <View style={{ width: '60%', justifyContent: 'center', height: '100%', }}>
                  <Text style={{ color: 'black' }}>{data.poli_nama}</Text>
                  <Text style={{ color: '#848484' }}>{data.jml_dokter}</Text>
                </View>
                <View style={{ width: '20%', justifyContent: 'center', alignSelf: 'center' }}>
                  <AntDesign name='right' size={25} color={'#0079eb'} style={{ alignSelf: 'center' }}></AntDesign>
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
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: 330,
    top: 20,
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

export default Poli;