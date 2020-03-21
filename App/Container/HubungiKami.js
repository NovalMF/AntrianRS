import React, { Component } from 'react';
import { Container, Header, Content, List, ListItem, Text, Thumbnail, Left, Body, Title, Button, Icon, StatusBar, View } from 'native-base';
import Images from '../Library/Images';
import LinearGradient from 'react-native-linear-gradient';
import TouchableScale from 'react-native-touchable-scale'
import { TouchableOpacity } from 'react-native-gesture-handler';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { Fonts } from '../Themes';



export default class HubungiKami extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }
  
  render() {
    return (
      <Container>
        <Content>
          <List>
            <ListItem itemHeader style={{ marginLeft: 16, marginBottom: -30}}>
              <Text style={{color: 'black'}}>INFORMASI</Text>
            </ListItem>

            <TouchableOpacity>
            <ListItem >
                <Thumbnail source={Images.iconMaps}></Thumbnail>
              <Text>Jl.</Text>
            </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
            <ListItem  >
                <Thumbnail source={Images.iconEmail1}></Thumbnail>
              <Text>rs@gmail.com</Text>
            </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
            <ListItem >
                <Thumbnail source={Images.iconTelephone1}></Thumbnail>
              <Text>+6222xxxxx</Text>
            </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
            <ListItem  >
                <Thumbnail source={Images.iconWeb}></Thumbnail>
              <Text>www</Text>
            </ListItem>
            </TouchableOpacity>


            <ListItem itemHeader style={{marginTop: 10, marginLeft: 16, marginBottom: -30}}>
              <Text style={{color: 'black'}}>SOSIAL MEDIA</Text>
            </ListItem>

            <TouchableOpacity>
            <ListItem >
                <Thumbnail source={Images.iconFacebook}></Thumbnail>
              <Text>Rs</Text>
            </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
            <ListItem >
                <Thumbnail source={Images.iconTwitter}></Thumbnail>
              <Text>RS...</Text>
            </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
            <ListItem >
                <Thumbnail source={Images.iconYoutube}></Thumbnail>
              <Text>Rs</Text>
            </ListItem>
            </TouchableOpacity>

            <TouchableOpacity>
            <ListItem >
                <Thumbnail source={Images.iconInstagram}></Thumbnail>
              <Text>Rs</Text>
            </ListItem>
            </TouchableOpacity>

          </List>
        </Content>
      </Container>
  
    )
  }
}
