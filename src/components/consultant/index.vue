<template>
    <section>
        <div v-if="isShow">  
            <van-cell title="多个日期" :value="date" @click="show = true" />
            <van-calendar type="range" v-model="show" @confirm="onConfirm" :show-confirm="false"  />
        </div>
        <van-skeleton title :row="19" :loading="loading" /> 
    </section>
</template>
<script>
import { Calendar,Cell } from 'vant'; 
import { Skeleton } from 'vant';  
export default {
    data(){
        return{
            date: '',
            show: false,
            loading: true,
            isShow: false
        }
    },
    methods:{
        formatDate(date) {
        return `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()}`;
        },
         onConfirm(date) { 
            // this.show = false;
            // this.date = this.formatDate(date);
            const [start, end] = date;
            this.show = false;
            this.date = `${this.formatDate(start)} - ${this.formatDate(end)}`;
        }
    },
    mounted(){
        setTimeout(()=>{
            this.loading = false;
            this.isShow = true;
        },1000);
    },
    components:{
        [Calendar.name]: Calendar,
        [Cell.name]: Cell,
        [Skeleton.name]: Skeleton
    }
}
</script>>
<style scoped>

</style>>