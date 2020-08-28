<template>
    <div class="ask-index">
        <section class="ask-eare" v-if="isShow">
            <header class="ask-hd">Bling</header>
            <!-- <van-search
                v-model="value"
                show-action  
                background="#4fc08d"
                shape="round"
                placehold   er="请输入搜索关键词"
                @input='onInput'
                >  
                <template #action>
                    <div class="search-btn" @click="onSearch">搜索</div>
                </template>
            </van-search> -->
            <!-- <div class="search-list" v-if="isShowBtn">
                <van-list>  
                    <van-cell @click="checkTxt(item)" v-for="(item, inex) in list" :key="inex" :title="item" />
                </van-list>
            </div> -->
            <!--轮播 -->
            <van-swipe class="my-swipe" :autoplay="3000" indicator-color="white">
                <van-swipe-item v-for="(item, index) in swiper" :key="index">
                    <a :href="item.url">
                        <img style="height:115px;" :src="item.imageUrl" />
                    </a>
                </van-swipe-item>
            </van-swipe>
            <!--banner1-->
            <u class="banner-1">
                <li v-for="(banners, i) in banner" :key="i">
                    <a :href="banners.url">
                        <img :src="banners.imageUrl"/>
                        <p>{{banners.name}}</p>
                    </a>
                </li>
            </u>
            <!--学科 -->
            <h1 class="banner-2">学科</h1>
        </section>
        <van-skeleton title :row="19" :loading="loading" />
    </div>
    
</template>
<script> 
import promise from 'es6-promise';
promise.polyfill();  
import { Skeleton, Search, List, Cell, Swipe, SwipeItem } from 'vant';  
import  serive from '../../api/request'
export default {
    data(){  
        return{  
            loading: true,
            isShow: false,
            isShowBtn:true,
            value:'',
            list:[],
            banner:[],
            swiper:[]    
        }
    },  
    methods:{  
        init(){
            //banner
            serive.post('https://open2.kaikeba.com/plat/plat-cms-service/service/pic/banners',{ 
                    contentType: '3',
                    platType: '2'   
            }).then((res)=>{
                // this.banner = res.data.data;
                this.banner = res.data.data;

            }).catch((error)=>{
                console.log(error);
            });
            //swiper
            serive.post('https://open2.kaikeba.com/plat/plat-cms-service/service/pic/banners',{ 
                    contentType: '1',
                    platType: '2'   
            }).then((res)=>{
                // this.banner = res.data.data;
                this.swiper = res.data.data;

            }).catch((error)=>{
                console.log(error);
            });

        },
        onInput(){
            this.isShowBtn = true;
            serive.get('http://api.zhinengshe.com/10001-you163/searchautocomplete',{ 
                params:{
                    kw: this.value
                }  
            }).then((res)=>{
                console.log(res.data,'test');
                this.list = res.data.data;
            }).catch((error)=>{
                console.log(error);
            });
        },
        onSearch(){  
            this.isShowBtn = false;
            this.value = '';
        },
        checkTxt(val){
            this.value = val;
            this.isShowBtn = false;
        }
    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
            this.isShow = true;
        },1000);
        this.init();
    },
    components:{
        [Skeleton.name]: Skeleton,
        [Search.name]: Search,
        [List.name]:List,
        [Cell.name]: Cell,
        [Swipe.name]: Swipe,
        [SwipeItem.name]: SwipeItem
    }
}
</script>>
<style scoped>
    .banner-2{
        font-size: 18px;
        font-weight: bold;
        margin: 10px 0 0 20px;
    }
    .ask-eare{
        background: url(https://img.kaikeba.com/02657181800202xnnh.png) no-repeat !important;
        background-size: cover !important;
    }
    .ask-hd{
        text-align: center;
        color: #ffff;
        font-size: 20px;
        padding: 10px;
        font-weight: bold;
    }
    .my-swipe .van-swipe-item {
        color: #fff;
        font-size: 20px;
        line-height: 150px;
        text-align: center;
    }
    .search-list{
        box-sizing: border-box;
        padding: 0.36364rem 0.43636rem;
        background-color: #fff;
    }
    .search-btn{
        color: #ffff;
    }
    .banner-1{
        padding: 0 0.5rem;
        display: flex;
        display: -webkit-flex;
        justify-content: space-between;
        -webkit-box-pack: justify;
    }
    .banner-1 li{
        width: 2.5rem;
    }
    .banner-1 li img{
        width: 1.5rem;
        height: 1.5rem;
        display: block;
        margin: 0.5rem auto 0.25rem; 
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0.3);
    }
    .banner-1 li p{  
        font-size: 0.5rem;
        color: #333333;
        line-height: 1.0625rem;
        text-align: center;
        overflow: hidden;
        -o-text-overflow: ellipsis;
        text-overflow: ellipsis;
        white-space: nowrap;
        -webkit-transform: scale(0.9);
        -ms-transform: scale(0.9);
        transform: scale(0.9);
    }
</style>>