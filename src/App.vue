<template>
  <div id="app">
      <router-view class='animated fadeIn'> </router-view>
    <BarList></BarList>
    <!-- <van-button type="primary">主要按钮</van-button> -->
  </div>
</template>

<script>
import BarList from './components/footer/barList'
// import { Button } from 'vant';
export default {
  name: 'App',
  components: {
    BarList
    // [Button.name]: Button,
  }
}
</script>

<style scoped>
</style>
