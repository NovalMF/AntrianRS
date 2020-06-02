import React, { Component } from 'react';
import { Text, StatusBar, View } from 'native-base';
import { FlatList, ScrollView, Image, StyleSheet } from 'react-native';
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
      search: "",
      poliSearchResult: []
    };
  }

  componentDidMount() {
    this.getListPoli();
    // this._subscribe = this.props.navigation.addListener('didFocus', () => {
    //   //do you update if need
    //   this.getListPoli();
    // });
  }

  getListPoli = async () => {
    const ApiUrl = 'http://api-antrian.aviatapps.id/api/poli';
    const res = await axios.get(ApiUrl)
    this.setState({ poli_list: res.data.data, poliSearchResult: res.data.data })
  }

  searchUpdate = (search = "") => {
    if (search.length === 0) {
      this.setState({ search, poliSearchResult: this.state.poli_list })
      return;
    }

    const result = this.state.poli_list.filter(v =>
      v.poli_nama
        .toLowerCase()
        .includes(search.toLowerCase()))

    this.setState({ search, poliSearchResult: result })
  }

  handleNavigation = data => {
    this.props.navigation.navigate('Jadwaldokter', { poli_id: data.poli_id, data })
  }

  render() {
    const { poliSearchResult } = this.state

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
            onChangeText={search => this.searchUpdate(search)}
          />
          <AntDesign name='search1' size={25} style={{ marginRight: 20 }} color={'#848484'} />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 30 }}
          data={poliSearchResult}
          renderItem={({ item }) =>
            <CardPoli
              data={item}
              onNavigate={() => this.handleNavigation(item)}
            />
          }
          keyExtractor={item => item.poli_id}
        />
      </View>
    )
  }
}

const CardPoli = ({ data, onNavigate }) => (
  <TouchableOpacity
    onPress={onNavigate}
    style={styles.card}>
    <View style={styles.cardHeroWrapper}>
      <Image source={{ uri: data.icon_image }} style={styles.cardHero}></Image>
    </View>
    <View style={styles.cardContentWrapper}>
      <Text style={styles.cardContentName}>{data.poli_nama}</Text>
      <Text style={styles.cardContentJml}>{data.jml_dokter}</Text>
    </View>
    <View style={styles.cardChevronWrapper}>
      <AntDesign
        name='right'
        size={25}
        color={'#0079eb'}
        style={{ alignSelf: 'center' }}
      />
    </View>
  </TouchableOpacity>
)

const styles = StyleSheet.create({
  inputContainer: {
    borderColor: '#808080',
    borderWidth: 0,
    elevation: 5,
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    width: '100%',
    top: 20,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  inputs: {
    fontSize: 16,
    marginLeft: 10,
    fontFamily: Fonts.type.regular,
    borderBottomColor: '#FFFFFF',
    flex: 1,
  },
  card: {
    backgroundColor: 'white',
    width: '95%',
    height: 80,
    margin: 10,
    marginBottom: 10,
    borderRadius: 10,
    elevation: 5,
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  cardHeroWrapper: {
    width: '20%',
    justifyContent: 'center',
    height: '100%'
  },
  cardHero: {
    width: 60,
    height: 60
  },
  cardContentWrapper: {
    width: '60%',
    justifyContent: 'center',
    height: '100%'
  },
  cardContentName: {
    color: 'black'
  },
  cardContentJml: {
    color: '#848484'
  },
  cardChevronWrapper: {
    width: '20%',
    justifyContent: 'center',
    alignSelf: 'center'
  },
})

export default Poli;