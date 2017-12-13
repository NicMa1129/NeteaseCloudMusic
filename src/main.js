import Vue from 'vue'
import store from './store'
import App from './App'
import router from './router'
import VueLazyload from 'vue-lazyload';
import './styles/index.scss'

Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: './static/image/error.jpg',
  loading: './static/image/loading.png',
  attempt: 1,
  listenEvents: [ 'scroll', 'mousewheel' ]
});

const app = new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
router.push('/home')

