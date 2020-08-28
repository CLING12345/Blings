<template>  
    <section class='login-root animated bounceInLeft'>
        <div class='login-center'>  
            <van-cell-group>
                <van-field
                    size=large
                    v-model="username"
                    required
                    label="用户名"
                    placeholder="请输入用户名"
                />
                <van-field
                    v-model="phone"
                    required
                    size=large
                    label="手机号"
                    placeholder="请输入手机号"
                />
            </van-cell-group>  
            <div class='login-btn'>  
                <van-button round color='rgba(0,205,255,.9)'  @click='logon' class='login' type="primary" size="normal">登录</van-button>
                <van-button round color='rgba(0,205,255,.9)'  class='cancel' @click="cancel"  type="primary" size="normal">取消</van-button>  
            </div>
        </div>
    </section>
</template>  
<script>
import store from '../../store'
import { Field,CellGroup,Button,Toast } from 'vant';
export default {
    data() {
        return {
            username: '',
            phone:''
        }  
    },  
    components:{  
        [Field.name]: Field,
        [CellGroup.name]: CellGroup,
        [Button .name]: Button,
    },
    methods: {
        logon(){
            if(this.username == ''){
            Toast('请输入用户名');
            } else if(this.phone == '') {
                Toast('请输入手机号');
            } else {
                localStorage.setItem('token','CLING');
                this.$router.push({ path: '/ask' });
                store.commit('ask');
            }
        },
        cancel(){
            this.$router.push({ path: '/ask' });  
            store.commit('ask');    
        }
    },
}
</script>
<style scoped>
.login-root{
    background: url('https://img.kaikeba.com/33550140219102uwfl.png') no-repeat center center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    width: 100%;
    height: 100%;
    background-size: cover;
    z-index: 99999;
}
.login-center{
    position:absolute;
    top: 50%;
    left: 2%;
    width:96%;
    margin: -120px 0 0 0;
    border-radius: 5px;
    overflow: hidden; 
}
.login-btn{
    overflow: hidden;
    padding: 10px 50px;
}
.login,.cancel{
    float: left;
    width: 100px;
    height: 40px;
}
.cancel{
    float: right;
}
.van-cell-group{
    background-color: transparent;
}
.van-cell{
    background-color: transparent;
}
</style>
