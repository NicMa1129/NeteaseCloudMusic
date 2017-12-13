import Vue from 'vue'
import Router from 'vue-router'
import Home from 'views/Home/Home'
import Recommend from 'views/Home/Recommend/Recommend'
import SongsList from 'views/Home/SongsList/SongsList'
import Broadcasting from 'views/Home/Broadcasting/Broadcasting'
import Rank from 'views/Home/Rank/Rank'

Vue.use(Router)

const routes = [
    {
      path: '/home',
      component: Home,
      children: [
        {
          path: 'recommend',
          component: Recommend
        },
        {
          path: 'songsList',
          component: SongsList
        },
        {
          path: 'broadcasting',
          component: Broadcasting
        },
        {
          path: 'rank',
          component: Rank
        }
      ]
    }
];

const router = new Router({
    linkActiveClass: 'active',
    routes
});

export default router