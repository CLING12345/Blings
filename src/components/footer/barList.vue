<template>
    <footer>
        <van-tabbar v-model="active">  
            <van-tabbar-item name='ask' replace to="/ask" icon="home-o">问答</van-tabbar-item>
            <van-tabbar-item name='jobWanted' replace to="/jobWanted" icon="search">求职</van-tabbar-item>
            <van-tabbar-item name='consultant' replace to="/consultant" icon="friends-o">咨询师</van-tabbar-item>
            <van-tabbar-item name='me' replace to="/me" icon="setting-o">我的</van-tabbar-item>
        </van-tabbar>  
    </footer>
</template>
<script>
import { Tabbar, TabbarItem } from 'vant';
import store from '../../store';
export default {
    data(){
        return{  
            active: store.state.active
        }
    },
    mounted() {
        console.log(store.state.active,'ddd');  
    },
    components:{
        [Tabbar.name]: Tabbar,
        [TabbarItem.name]: TabbarItem,
    }
}
</script>>
<style scoped>

</style>>