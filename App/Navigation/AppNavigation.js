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



const MainNavigator = createStackNavigator({
    Login: { screen: Login, navigationOptions: { headerShown: false } },
    Register: { screen: Register, navigationOptions: { headerShown: false} },
    HomePage: { screen: HomePage, navigationOptions: {headerShown: false} },

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