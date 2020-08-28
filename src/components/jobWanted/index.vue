<template>
    <section>
        <ul class="pastList">
            <li class="list" v-for="(item, index)  in courses" :key="index"> 
                <div class="list-left">
                    <img :src="item.coverUrl[0].url" />
                </div>
                <div class="list-right">
                    <p class="ellipsis">{{item.courseName}}</p>
                    <p class="ellipsis">{{item.courseDescribe}}</p>
                    <p>
                        <span></span>
                        <span>{{item.teacherName}}</span>
                        <button>立即报名</button>
                    </p>
                </div>
            </li>
        </ul>
    </section>
</template>
<script>
import  serive from '../../api/request'
export default {
    data(){
        return{
            courses: []
        }
    },
    mounted(){
        this.getCourses(); 
    },
    methods:{
        getCourses(){
            serive.post('https://open2.kaikeba.com/plat/plat-cms-service/service/open-courses',{ 
                    condition: {busnessId: null,platType: 2,timeType: 0},
                    size: '100'   
            }).then((res)=>{  
                // this.banner = res.data.data;
                this.courses = res.data.data.records;
            }).catch((error)=>{
                console.log(error);
            });
        },
    }
}
</script>>
<style scoped>
    .pastList{
        padding-bottom: 50px;
    }
    .list{
        padding: 0 0.5rem;
        margin: 0.3rem 0 .75rem 0;
        display: flex;
        display: -webkit-flex;
    }
    .list-left,.list-right{
        flex: 1.1;
    }
    .list-left{
        flex: 0.8;
    }
    .list-left img{
        width: 4.68rem;
        height: 3.35rem;
        border-radius: 7.5px;
        flex-shrink: 0;
        display: block;
    }
    .list-right{
        font-size: 18px;
        position: relative;
        width: 0;
    }
    .list-right p:nth-of-type(1){
        font-weight: bold;
        font-size: 16px;
        margin-top: 3px;
    }
    .list-right p:nth-of-type(2){
        margin-top: 10px;
        font-size: 12px;
    }
    .list-right p:nth-of-type(3){
        position: absolute;
        left: 0;
        bottom: 0;
    }
    .list-right p:nth-of-type(3) span:nth-of-type(2){
        font-size: 12px;
    }
    .list-right p:nth-of-type(3) button{
        font-size: 12px;
        position: absolute;
        right: -130px;
        top: -10px;
        width: 2.5rem;
        padding: 5px 5px;
        border-radius: 15px;
        background: #00aff2;
        color: #fff;
        font-weight: bold;
    }
</style>>