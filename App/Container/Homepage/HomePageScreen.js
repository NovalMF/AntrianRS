import React, { Component } from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import Images from '../../Library/Images';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Switch } from 'native-base';

export default class HomePageScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      switch: false,
      switch1: false
    };
  }

  render() {
    return (
      <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
        {/* Header */}
        <View style={{ height: 50, width: '100%', backgroundColor: '#FFFFFF', justifyContent: 'center' }}>
          <View style={{ height: '80%', width: '24%' }}>
            <Image source={Images} style={{ marginLeft: 20, marginTop: 5, justifyContent: 'center', resizeMode: 'contain', height: '85%', width: '85%' }} />
          </View>
        </View>

       
          
      </ScrollView>
    );
  }
}
