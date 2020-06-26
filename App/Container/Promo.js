import React, { Component } from 'react'
import { Text, View } from 'react-native'
import { WebView } from 'react-native-webview';

export default class Artikel extends Component {
  constructor(props) {
    super(props)
    this.state = {
      uri: this.props.navigation.state.params.link
    }
  }
  render() {
    return <WebView source={{ uri: this.state.uri }} />;
  }
}