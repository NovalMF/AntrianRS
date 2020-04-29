import React, { Component } from 'react';
import { Text, View, Card, CardItem, Icon, Right, Button} from 'native-base';
import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { CheckBox } from 'react-native-paper';
import { Fonts } from '../Themes';
import axios from 'axios';
import Api from '../Services/Api';
import Constant from '../Library/constants';
import AsyncStorage from '@react-native-community/async-storage';


class BookingAntrian extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: false,
      detailMember: [],
      detailUser: [],
      detailPasien : [],
      nama_lengkap: '',
      jenis_kelamin: '',
      tanggal_lahir: '',
      relasi: '',
      member_id: '',
    };
  }

//   componentDidMount() {
//     this.getdetailUser()
// }

// getdetailUser() {
//     Api.create().getProfil().then((response) => {
//         // console.log(response.data.data)
//         // alert(JSON.stringify(response.data.data))
//         if (response.data.success == true) {
//             this.setState({
//                 name: response.data.data.detail.nama_lengkap,
//                 email: response.data.data.email,
//                 detailUser: response.data.data,
//                 member_id: response.data.data.detail.member_id
//             }, ()=> this.getdetailMember(this.state.member_id))
//         }
//     })
// }

//     getdetailMember= async (member) => {
//     const ApiUrl = 'http://api-antrian.aviatapps.id/api/member/list/' + member;
//     axios.get(ApiUrl, {
//         headers: {
//           'accept': 'application/json',
//           'Authorization': 'Bearer '  + await AsyncStorage.getItem(Constant.TOKEN)
//         }
//     }).then(response => {
//         // alert(JSON.stringify(response.data.data))
//         console.log(JSON.stringify(response.data))
//         this.setState({ detailMember: response.data.data.member })
//       })
//     } 
  
  render() {
    const { checked } = this.state;
    return (
      <View style={{ backgroundColor: 'white', flex: 1, justifyContent: 'space-between', paddingHorizontal: 20, paddingTop: 20 }}>
      
      <View>
          <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, color: 'black' }}>Pilih Pasien</Text>
      <Card>
      {
        this.state.detailMember.map((data, index) => (
      <CardItem key={index} style>
        <Text>{data.relasi}</Text>
        <Text>{data.nama_lengkap}</Text>
        <Right>
          <CheckBox status={checked ? 'checked' : 'unchecked'} 
          onPress={() => { this.setState({ checked: !checked }); }} />
        </Right>
        </CardItem>
        ))
      }
      </Card>
      </View>
        

      <View>
          <Text style={{ fontFamily: Fonts.type.regular, fontSize: 16, color: 'black' }}>Detail Pasien</Text>
      <Card>
      <CardItem>
        <Text></Text>
        <Text></Text>
        </CardItem>
      </Card>
      </View>
              
        {/* Button Simpan */}
        <View style={{ width: '100%', marginHorizontal: 10, alignSelf: 'center' }}>
          <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 0.9, y: 0.5 }} colors={['#0079EB', '#0079EB']} style={{ elevation: 1, borderRadius: 0, marginVertical: 20, justifyContent: 'flex-end' }}>
            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center', height: 55 }} onPress={() => this.props.navigation.navigate('History')}>
              <Text style={{ color: 'white', fontFamily: Fonts.type.regular, fontSize: 20 }}> Lanjut</Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    )
  }
}


export default BookingAntrian;