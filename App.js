import React, { Component } from 'react';
import { StatusBar, View } from 'react-native' 
import DeviceInfo from 'react-native-device-info'

import AppNavigation from './App/Navigation/AppNavigation.js'
import { Container } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Container style={{ marginTop: DeviceInfo.hasNotch() ? 25 : 25}}>
        <StatusBar backgroundColor='#0079EB' translucent  barStyle={'light-content'}/>
        <AppNavigation />
      </Container>
    )
  }
}