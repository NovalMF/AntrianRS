import { Colors, Metrics } from '../Themes'
import { Platform } from 'react-native'
import DeviceInfo from 'react-native-device-info'

export const headerStyle = {
    backgroundColor: '#0079EB',
    shadowRadius: 0,
    elevation: 0,
    borderBottomWidth: 0,
}

export const headerTitleStyle = {
    flex: 1,
    fontSize: 18,
    fontWeight: '600',
}

export const headerRighStyle = {
    marginRight: 10,
    marginLeft: 5,
    marginTop: 5,
    height: 20, 
    width: 75,
}
export const headerBgStyle = {
    height: Platform.OS == 'android' ? 55 : DeviceInfo.hasNotch() ? 90 : 65,
    width: Metrics.screenWidth

}