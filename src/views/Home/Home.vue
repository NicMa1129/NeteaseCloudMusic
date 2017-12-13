<template>
    <div>
        <home-header/>
        <tabs/>
        <router-view></router-view>
    </div>
</template>

<script>
    import HomeHeader from 'components/HomeHeader'
    import Tabs from 'components/Tabs'
    export default{
      name: 'Home',
      components: {
        HomeHeader,
        Tabs
      },
      created(){
        this.$router.push('/home/recommend')
      }
    }
</script>

<style lang="scss">
</style>
