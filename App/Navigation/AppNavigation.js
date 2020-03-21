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
import WebViewArtikel from '../Container/WebViewArtikel'
import History from '../Container/History'
import TambahKeluarga from '../Container/TambahKeluarga'
import AntrianSaya from '../Container/AntrianSaya'
import SplashScreen from '../Container/SplashScreen'
import Artikel from '../Container/Artikel'


const MainNavigator = createStackNavigator({
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Register: { screen: Register, navigationOptions: { headerShown: false} },
    HomePage: { screen: HomePage, navigationOptions: {headerShown: false} },
    HubungiKami: { screen: HubungiKami, navigationOptions: {title: 'Hubungi Kami'} },
    Poli: { screen: Poli, navigationOptions: {title: 'Instalasi Rawat Jalan'} },
    Jadwaldokter: { screen: Jadwaldokter, navigationOptions: {headerShown: false} },
    ProfilDokter: { screen: ProfilDokter, navigationOptions: {headerShown: false} },
    BookingAntrian: { screen: BookingAntrian, navigationOptions: {headerShown: false} },
    ProfilUser: { screen: ProfilUser, navigationOptions: {title: 'Profil User'} },
    UbahProfil: { screen: UbahProfil, navigationOptions: {title: 'Ubah Profil'} },
    WebViewArtikel: { screen: WebViewArtikel, navigationOptions: {headerShown: false} },
    History: { screen: History, navigationOptions: {headerShown: false} },
    TambahKeluarga: { screen: TambahKeluarga, navigationOptions: {headerShown: false} },
    AntrianSaya: { screen: AntrianSaya, navigationOptions: {title: 'Antrian Saya'} },
    SplashScreen: { screen: SplashScreen, navigationOptions: {headerShown: false} },
    Artikel: { screen: Artikel, navigationOptions: {title: 'Artikel'} },

}, {
    headerMode: 'screen',
    initialRouteName: 'SplashScreen', 
    defaultNavigationOptions: {
        headerStyle,
        headerBgStyle,
        headerTitleStyle, 
        headerTintColor: 'white',
        headerBackImage: ( 
            <IconBack name='ios-arrow-back' size={30} color={'white'} />
        )
    }
});

export default createAppContainer(MainNavigator);