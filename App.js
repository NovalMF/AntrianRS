import React, { Component } from 'react';
import { StatusBar, View } from 'react-native' 

import AppNavigation from './App/Navigation/AppNavigation.js'
import { Container, Root } from 'native-base';

export default class App extends Component {
  render() {
    return (
      <Root style={{ flex: 1 }}>
        <StatusBar backgroundColor='#0079EB' translucent  barStyle={'light-content'}/>
        <AppNavigation />
      </Root>
    )
  }
}