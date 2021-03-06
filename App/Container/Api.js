import apisauce from 'apisauce'
import AsyncStorage from '@react-native-community/async-storage';
import Constant from '../Library/constants'

const create = () => {

  const api = apisauce.create({
    baseURL: `${Constant.BASE_URL}`,
    headers: {
      'Cache-Control': 'no-cache',
      'accept': 'application/json',
      'Content-Type': 'application/x-www-form-urlencoded',
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
    request.headers['Authorization'] = 'Bearer ' + token
  })

  //Inisialisasi
  const GET = api.get
  const POST = api.post
  const methodGET = () => GET('something')
  const methodPost = (value) => POST('something', value)

  const login = (value) => POST('login', value)
  const getAritkel = (value) => POST('artikel/list', value)
  const register = (value) => POST('register', value)
  const getProfil = () => GET('user/data')
  const getMember = () => GET('member/data/9047c234-9b9e-43ea-af5a-df91a37e90fd')
  const getDokter = () => POST(`dokter/${dokter_id}`)
  const updateProfil = (id, value) => POST(`user/update/${id}`, value)
  const tambahkeluarga = (value) => POST('member', value)
  const getListHistory = () => GET('reservasi/list')
  const reservation = (member_id, payload) => POST(`reservasi/${member_id}`, payload, { headers: { 'Accept': 'application/json' } })

  return {
    login,
    getAritkel,
    register,
    getProfil,
    getMember,
    getDokter,
    updateProfil,
    tambahkeluarga,
    getListHistory,
    reservation
  }
}

export default { create };