<template>
    <h1>Sign Up</h1>
<div class="register">
    <input type="text" placeholder="Enter Name" v-model="name" />
    <input type="text" placeholder="Enter Email" v-model="email" />
    <input type="password" placeholder="Enter Password" v-model="password" />
    <button v-on:click="signUp()">Sign UP</button>
</div>
</template>

<script>
    import axios from 'axios'
    export default {
        name:"SignUp",
        data(){
            return {
                name: '',
                email: '',
                password:''
            }
        },
        
        methods:{
            async signUp(){
                let  result = await axios.post("http://localhost:3000/user",{
                        name:this.name,
                        email:this.email,
                        password:this.password
                });
                console.warn(result);
                if(result.status==201) {
                    //json.stringify converts the object into the string
                    localStorage.setItem("user-info",JSON.stringify(result.data));
                    //this is for the url redirection
                    this.$router.push({name:'home'})
                }
            }
        },
        //mounted:- is the life cycle methods which will calls automatically when page is loaded
        mounted() {
            let user = localStorage.getItem('user-info');
            if(user) {
                this.$router.push({name:"home"});
            }
        }
    }
</script>
<style>
    .register input{
        width:300px;
        height: 40px;
        padding-left: 20px;
        display: block;
        margin-bottom: 30px;
        margin-right: auto;
        margin-left: auto;
        border:1px solid skyblue;

    }
    .register button {
        width: 320px;
        height: 40px;
        border: 1px solid skyblue;
        background: skyblue;
        color: #fff;
        cursor: pointer;
    }
</style>