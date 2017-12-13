<template>
    <div class="tabs">
        <ul>
            <li class="tab-item" @click="clickTab('recommend')">个性推荐</li>
            <li class="tab-item" @click="clickTab('songsList')">歌单</li>
            <li class="tab-item" @click="clickTab('broadcasting')">主播电台</li>
            <li class="tab-item" @click="clickTab('rank')">排行榜</li>
        </ul>
        <div class="active-line" :class="activeClass"></div>
    </div>
</template>

<script>
    export default {
      name: 'Tabs',
      data(){
          return {
            activeClass: 'active0'
          }
      },
      methods: {
        clickTab(url){
          switch(url){
            case 'recommend':
              this.activeClass = 'active0'
              break
            case 'songsList':
              this.activeClass = 'active1'
              break
            case 'broadcasting':
              this.activeClass = 'active2'
              break
            case 'rank':
              this.activeClass = 'active3'
              break
            default:
              break
          }
          this.$router.push('/home/'+url)
        }
      }
    }
</script>

<style lang="scss">
    @import "../styles/index";
    .tabs{
        ul{
            display: flex;
        }
        .tab-item{
            flex: 1;
            padding: 12px 15px;
            font-size: 13px;
            text-align: center;
            background: #f8f8f8;
        }
        .active-line{
            height: 2px;
            width: 25%;
            background: #FF0200;
            transition: all 0.375s;
            &.active0{
                transform: translate3d(0,0,0)
            }
            &.active1{
                transform: translate3d(100%,0,0)
            }
            &.active2{
                transform: translate3d(200%,0,0)
            }
            &.active3{
                transform: translate3d(300%,0,0)
            }
        }
    }
</style>
