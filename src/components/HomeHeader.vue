<template>
    <header class="header">
        <div class="icon-yuyin"></div>
        <div class="search-input">
            <input type="text" placeholder="搜索音乐、歌曲、电台"/>
        </div>
        <div class="icon-nowplay"></div>
    </header>
</template>

<script>
    export default {
        name: 'HomeHeader'
    }
</script>

<style lang="scss">
    @import "../styles/index";
    .header{
        background:#d43c33;
        height:42px;
        display: flex;
        .icon-yuyin{
            flex-basis:40px;
            background:url(../../static/image/music.png) no-repeat;
            background-position:center center;
            background-size: 32px 32px;
        }
        .search-input{
            flex: 1;
            input{
                width:80%;
                height:30px;
                border-radius:5px;
                margin-top:6px;
                color:#c6c7c9;
                font-size:12px;
                padding-left:60px;
                outline:none;
            }
        }
        .icon-nowplay{
            margin: 0 10px;
            flex-basis:20px;
            background:url(../../static/image/iconph.png) no-repeat;
            background-position:center center;
            background-size: 20px 20px;
        }
    }
</style>
