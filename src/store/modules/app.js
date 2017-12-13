import { callApi } from '../../api'

const app = {
  state: {
    songs: [],
    loading: true
  },
  mutations: {
    FETCH_SONGS: (state, songs) => {
      state.songs = songs
      state.loading = false
    }
  },
  actions: {
    FetchSongs({ commit }){
      return callApi('http://musicapi.duapp.com/api.php?type=topPlayList&cat=全部&offset=0&limit=9')
              .then(res => {
                // console.log(res)
                commit('FETCH_SONGS', res.playlists)
              })
    }
  }
};

export default app;