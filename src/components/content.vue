<template>
<div class="reg">
        <div class="fig">数科金云</div>
        <!-- <form action="http://172.16.8.232:8080/denglu"> -->
        <div class="zh">
            <input type="text" name="userName" autocomplete="on" v-model="userName" placeholder="  账号" onfocus="this.placeholder=''" style="width:448px;height:47px;">
        </div>
        <div class="mm">
            <input type="password" name="passWord" autocomplete="on" v-model="passWord" placeholder="  密码" onfocus="this.placeholder=''" style="width:448px;height:47px;">
        </div>
        <div class="dl">
            <button class="dlan" type="primary" @click="handledl">登录</button>
        </div>
        <!-- </form> -->
    </div>
</template>

<script>
import {mapState,mapMutations,mapAction } from 'vuex'
import neaw from '@/components/neaw.vue'
export default {
    data(){
        return{
            userName:'',
            passWord:'',
            // userToken:'',
        }
    },
    components:{
        neaw
    },
    methods:{
        ...mapMutations(['changeLogin']),
        handledl(){debugger
        let data={
            userName:this.userName,
            passWord:this.passWord,
        }
        if (this.userName === '' || this.passWord === '') {
        alert('账号或密码不能为空');
        } else {
        this.$http.post(this.$api.asdfgsfefsv,data).then(res=>{debugger
            // var data=JSON.parse(res.data);
            console.log(res.data);
            console.log(res.code);
            if(res.code == 20000){
            this.userToken = res.data;
            // 将用户token保存到vuex中
            this.changeLogin({ 
                Authorization: this.userToken,
                userName:this.userName
            });
            this.$router.push('/neaw');
            alert('登陆成功');
            // }).catch(error => {
            //     alert('账号或密码错误');
            //     console.log(error);
            // if(res.data.code == 20000){
            // this.$router.push('/neaw');
            // }else{
            //     return false;
            // }
            // if(data.status==1){debugger
            //     localStorage.setItem('token',data.token);
            //     localStorage.setItem('userName',data.userName);
            //     localStorage.setItem('passWord',data.passWord);
            //     if(this.$route.query.redirect){
            //         let redirect=this.$route.query.redirect;
            //         this.$route.push(redirect);
            //     }else{
            //         this.$route.push({name:'/neaw'});
            //     }
            // }
            // else{
            //     return false;
            // }
        // })
        }else{
                alert('账号或密码错误');
                // console.log(error);
            }
            })
        }
        // if(res.data.code == 20000){debugger
        //     this.$route.push({name:'neaw'});
        // }else{
        //     return false;
        // }
    }
    }
}
</script>

<style>
/* .reg{
    background-image:url("../pic/bg.png");
} */
body{
    background:url("../pic/bg.png") no-repeat center center;
    background-size:cover;
    background-attachment:fixed;
    margin: 0px;
    padding:0px;
}
.fig{
    font-size: 46px;
    margin-top: 150px;
    height: 40px;
    font-weight: bold;
    color:#EEEEEE;
}
.zh{
    margin-top: 50px;
}
.mm{
    margin-top: 20px;
}
.dl{
    margin-top: 20px;
}
.dlan{
    width: 450px;
    height: 40px;
    border-radius: 6px;
    background-color: #6495ED;
    color: white;
    font-size: 14px;
    cursor:pointer;
}
input:-webkit-autofill, textarea:-webkit-autofill, select:-webkit-autofill {
    background-color: rgb(189, 255, 238);
    background-image: none;
    color: rgb(0, 0, 0);
}
</style>