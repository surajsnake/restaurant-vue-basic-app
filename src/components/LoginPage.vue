<template>
    <h1>Login Page</h1>
<div class="register">
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button v-on:click="login()">Login</button>
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:'LoginPage',
        data() {
            return {
                email:'',
                password:''
            }
        },
        methods:{
            async login(){
                let result = await axios.get(`http://localhost:3000/user?email=${this.email}&password=${this.password}`);
                //console.log(result);
              if(result.status ==200 && result.data.length>0) {
                localStorage.setItem('user-info',JSON.stringify(result.data));
                this.$router.push({name:'home'});
              }
            }
        },
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user) {
                this.$router.push({name:"home"});
            }
        }
    }
</script>

