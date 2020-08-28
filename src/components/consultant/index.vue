<template>
    <section>
         <van-cell title="多个日期" :value="date" @click="show = true" />
         <van-calendar type="range" v-model="show" @confirm="onConfirm" :show-confirm="false"  />
    </section>
</template>
<script>
import { Calendar,Cell } from 'vant'; 
export default {
    data(){
        return{
            date: '',
            show: false,
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
    components:{
        [Calendar.name]: Calendar,
        [Cell.name]: Cell
    }
}
</script>>
<style scoped>

</style>>