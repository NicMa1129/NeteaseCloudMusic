<template>
    <div class="container">
        <div class="scroll-wrap" ref="scrollWrap">
            <div class="scroll-content">
                <div class="banner">
                    <swiper :options="swiperOption">
                        <swiper-slide>
                            <img src="../../../../static/image/1.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../../../../static/image/2.png" alt="">
                        </swiper-slide>
                        <swiper-slide>
                            <img src="../../../../static/image/3.png" alt="">
                        </swiper-slide>
                        <div class="swiper-pagination" slot="pagination"></div>
                    </swiper>
                </div>
                <div class="card border-1px">
                    <div class="card-li">
                        <div class="circle"></div>
                        <p>私人FM</p>
                    </div>
                    <div class="card-li">
                        <div class="circle">
                            <span>20</span>
                        </div>
                        <p>每日歌曲推荐</p>
                    </div>
                    <div class="card-li">
                        <div class="circle"></div>
                        <p>云音乐热歌榜</p>
                    </div>
                </div>
                <div class="list-container">
                    <div class="list-container__title">
                <span class="title-icon flex-between">
                    <img src="../../../../static/image/aei.png"/>
                    <p>推荐歌单</p>
                </span>
                        <span class="more">更多 ></span>
                    </div>
                    <ul class="songs-list">
                        <li v-for="(item, index) in songs" :key="index" class="songs-card" @click="getSongsDetail(item)">
                            <img v-lazy="item.coverImgUrl"/>
                            <p>{{item.description}}</p>
                        </li>
                    </ul>
                    <div class="loading" v-show="loading">
                        <img src="../../../../static/image/rage_loading.png" alt="">
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import { mapGetters } from 'vuex'
  import 'swiper/dist/css/swiper.css'
  import { swiper, swiperSlide } from 'vue-awesome-swiper'
  import BScroll from 'better-scroll';
  export default{
      name: 'Recommend',
      data(){
        return {
          slideList: [
            {
              src: '../../../../static/image/1.png'
            },
            {
              src: '../../../../static/image/2.png'
            },
            {
              src: '../../../../static/image/3.png'
            }
          ],
          swiperOption: {
            autoplay: true,
            loop: true,
            pagination: {
              el: '.swiper-pagination'
            }
          }
        }
      },
      computed: {
        songs(){
          return this.$store.getters.songs
        },
        loading(){
          return this.$store.getters.loading
        }
      },
      created(){
        this.getSongsList()
      },
      methods: {
        getSongsList(){
          this.$store.dispatch('FetchSongs')
            .then(() => {
              this.$nextTick(() => {
                this._initScroll()
              })
            })
        },
        _initScroll() {
          if (!this.helloScroll) {
            this.helloScroll = new BScroll(this.$refs.scrollWrap);
          } else {
            this.helloScroll.refresh();
          }
        },
        getSongsDetail(){
            this.$store.dispatch('LoginByPhone')
        }
      },
      components: {
        swiper,
        swiperSlide
      }

    }
</script>

<style lang="scss">
    @import "../../../styles/index.scss";
    @import "../../../styles/mixin.scss";

    img[lazy=error]{
        transition: all .5s;
        width: 100%;
    }
    img[lazy=loading]{
        transition: all .5s;
        width: 100%;
    }
    img[lazy=loaded]{
        transition: all .5s;
        width: 100%;
        animation: fade 0.5s;
    }
    @keyframes fade{
        0%{
            opacity: 0
        }
        100%{
            opacity: 1
        }
    }
    @keyframes rotating {
        0% {
            transform: rotate(0deg)
        }
        100% {
            transform: rotate(360deg)
        }
    }
    .scroll-wrap{
        position: absolute;
        top: 82px;
        bottom: 0;
        width: 100%;
        overflow: hidden;
    }
    .banner{
        position: relative;
        .swiper-wrapper{
            height: 140px;
            .swiper-slide{
                img{
                    height: 100%;
                }
            }
        }
    }
    .card{
        @include border-1px(#ddd);
        display: flex;
        .card-li{
            flex: 1;
            display: inline-block;
            /*width: 30%;*/
            /*margin-left: 2.5%;*/
            margin-bottom: 13px;
            margin-top: 13px;
            .circle{
                position: relative;
                border: 1px solid #d33a31;
                width: 54%;
                margin: 0 auto;
                height: 0;
                padding-top: 54%;
                border-radius: 50%;
                span{
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    font-size: 20px;
                    margin-top: -11px;
                    margin-left: -11px;
                    color: #d33a31;
                }
            }
            p{
                font-size: 12px;
                text-align: center;
                margin-top: 6px;
            }
        }
        .card-li:nth-child(1){
            .circle{
                background: url("../../../../static/image/FM.png") no-repeat;
                background-position: center center;
                background-size: 50px 50px;
            }
        }
        .card-li:nth-child(3){
            .circle{
                background: url("../../../../static/image/ph.png") no-repeat;
                background-position: center center;
                background-size: 50px 50px;
            }
        }
    }
    .list-container{
        position: relative;
        padding: 12px 0;
        .list-container__title{
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 10px;
        }
        .title-icon{
            margin-left: 10px;
            img{
                height: 22px;
                width: 22px;
            }
            p{
                display: inline-block;
                font-size: 14px;
                margin-left: 4px;
                line-height: 23px;
            }
        }
        .more{
            font-size: 12px;
            color: #9da79b;
            margin-right: 15px;
        }
        .songs-card{
            display: inline-block;
            width: 30%;
            margin-left: 2.5%;
            margin-bottom: 2.5%;
            min-height: 144px;
            img{
                width: 100%;
            }
            p{
                font-size: 12px;
                line-height: 1.5;
                width: 100%;
                height: 33px;
                overflow: hidden;
                word-wrap: break-word;
                text-overflow: ellipsis;
                letter-spacing: 1px;
                -webkit-line-clamp: 2;
                -webkit-box-orient: vertical;
            }
        }
        .loading{
            position: absolute;
            left: 50%;
            top: 50px;
            transform: translateX(-50%);
            img{
                -webkit-animation: rotating 3s  linear .3s infinite;
                animation: rotating 3s linear .3s infinite
            }
        }
    }
</style>
