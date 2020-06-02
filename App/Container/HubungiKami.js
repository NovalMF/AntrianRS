import React, { Component } from 'react';
import { Image, Linking, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Images from '../Library/Images';

const DATA = [
  {
    title: "INFORMASI",
    data: [
      { icon: Images.iconMaps, value: 'Jl.', link: 'geo:-6.903429,107.5030708' },
      { icon: Images.iconEmail1, value: 'rs@gmail.com', link: 'mailto: rs@gmail.com' },
      { icon: Images.iconTelephone1, value: '+6222xxxxx', link: 'tel:+6222123123' },
      { icon: Images.iconWeb, value: 'www', link: 'https://google.com' },
    ]
  },
  {
    title: "SOSIAL MEDIA",
    data: [
      { icon: Images.iconFacebook, value: 'Rs', link: 'https://web.facebook.com/' },
      { icon: Images.iconTwitter, value: 'Rs', link: 'https://twitter.com' },
      { icon: Images.iconYoutube, value: 'Rs', link: 'https://www.youtube.com/' },
      { icon: Images.iconInstagram, value: 'Rs', link: 'https://www.instagram.com' },
    ]
  },
];

export default class HubungiKami extends Component {
  handleDeepLink = item => {
    if (item.link && item.link.length) {
      Linking.openURL(item.link)
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <SectionList
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.listContainer}
          sections={DATA}
          keyExtractor={(item, index) => item + index}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.handleDeepLink(item)}>
              <Image
                style={styles.btnIcon}
                source={item.icon} />
              <Text style={styles.btnText}>{item.value}</Text>
            </TouchableOpacity>
          )}
          renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.txtHeader}>{title}</Text>
          )}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    backgroundColor: 'white',
    flex: 1
  },
  listContainer: {
    marginTop: -20
  },
  txtHeader: {
    fontSize: 16,
    color: 'black',
    marginTop: 30,
    marginBottom: 10,
  },
  btn: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    paddingHorizontal: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#a1a1a1'
  },
  btnIcon: {
    width: 45,
    height: 45,
    resizeMode: 'contain',
    marginRight: 10,
    marginLeft: -10
  },
  btnText: {
    fontSize: 16,
    color: '#000'
  }
})
