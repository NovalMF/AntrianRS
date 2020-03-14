import React from 'react'

//Library
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { headerStyle, headerTitleStyle, headerRighStyle, headerBgStyle } from '../Styles/AppBarStyle'
import IconBack from 'react-native-vector-icons/Ionicons'

//Screen
import Login from '../Container/Login'
import Register from '../Container/Register'
import HomePage from '../Container/Homepage/HomePage'
import HubungiKami from '../Container/HubungiKami'
import Poli from '../Container/Poli'
import Jadwaldokter from '../Container/Jadwaldokter'
import ProfilDokter from '../Container/ProfilDokter'
import BookingAntrian from '../Container/BookingAntrian'
import ProfilUser from '../Container/ProfilUser'
import UbahProfil from '../Container/UbahProfil'
import WebView from '../Container/WebView'
import History from '../Container/History'
import TambahKeluarga from '../Container/TambahKeluarga'


const MainNavigator = createStackNavigator({
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Register: { screen: Register, navigationOptions: { headerShown: false} },
    HomePage: { screen: HomePage, navigationOptions: {headerShown: false} },
    HubungiKami: { screen: HubungiKami, navigationOptions: {headerShown: false} },
    Poli: { screen: Poli, navigationOptions: {headerShown: false} },
    Jadwaldokter: { screen: Jadwaldokter, navigationOptions: {headerShown: false} },
    ProfilDokter: { screen: ProfilDokter, navigationOptions: {headerShown: false} },
    BookingAntrian: { screen: BookingAntrian, navigationOptions: {headerShown: false} },
    ProfilUser: { screen: ProfilUser, navigationOptions: {headerShown: false} },
    UbahProfil: { screen: UbahProfil, navigationOptions: {headerShown: false} },
    WebView: { screen: WebView, navigationOptions: {headerShown: false} },
    History: { screen: History, navigationOptions: {headerShown: false} },
    TambahKeluarga: { screen: TambahKeluarga, navigationOptions: {headerShown: false} },


}, {
    headerMode: 'screen',
    initialRouteName: 'Login', 
    defaultNavigationOptions: {
        headerStyle,
        headerTitleStyle, 
        headerTintColor: 'white',
        headerBackImage: ( 
            <IconBack name='arrow-back' size={30} color={'white'} />
        )
    }
});

export default createAppContainer(MainNavigator);