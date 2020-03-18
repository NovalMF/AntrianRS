import apisauce from 'apisauce'
import AsyncStorage from '@react-native-community/async-storage';
import Constant from '../Library/constants'

const create = () => {

    const api = apisauce.create({
        baseURL: `${Constant.BASE_URL}`,
        headers: {
            'Cache-Control': 'no-cache',
        },
        timeout: 30000
    })

    api.addAsyncRequestTransform(request => async () => {
        var token
        var url
        try {
            const res = await AsyncStorage.getItem(Constant.TOKEN)
            const url = await AsyncStorage.getItem(Constant.BASE_URL)
            if (res != null) {
                token = res 
            } else {
                token = res 
            }
        } catch (error) { 
        }
        request.headers['token'] = token 
    })

    //Inisialisasi
    const GET = api.get
    const POST = api.post
    const methodGET = () => GET('something')
    const methodPost = (value) => POST('something', value)

    const login = (value) => POST('login', value)
    const getAritkel = (value) => POST('artikel/list', value)


    return {
        login,
        getAritkel
    }
}

export default { create };