import { callApi } from '../../api'

const user = {
  state: {
    isLogin: false,
    user: {}
  },
  mutations: {
    FETCH_SONGS: (state, songs) => {
      state.songs = songs
      state.loading = false
    }
  },
  actions: {
    LoginByPhone({ commit }){
      callApi('/api/login/cellphone?phone=18616779001&password=123456')
        .then(res => {
          console.log(res)
        })
      // callApi('/api/user/subcount')
      //   .then(res => {
      //     console.log(res)
      //   })
    }
  }
};

export default user;