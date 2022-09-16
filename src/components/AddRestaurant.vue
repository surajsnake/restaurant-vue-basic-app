<template>
    <HeaderPage />
    <h1>Add Restaurant</h1>
<div class="register">
    <input type="text" placeholder="Enter Restaurant Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter Restaurant Address" v-model="restaurant.address" />
    <input type="text" placeholder="Enter Restaurant Phone" v-model="restaurant.phone" />
    <button v-on:click="addRestaurant()">Add Restaurant</button>
</div>
</template>

<script>
    import HeaderPage from './HeaderPage.vue'
    import axios from 'axios'
    export default {
        name:"AddRestaurant",
        components:{
            HeaderPage
        },
        data(){
            return {
                restaurant:{
                    name:'',
                    address:'',
                    phone:''
                }
            }
        },
        methods:{
           async addRestaurant() {
              let result = await axios.post("http://localhost:3000/restaurant",{
                name:this.restaurant.name,
                address:this.restaurant.address,
                phone:this.restaurant.phone
              });
              if(result.status==201) {
                alert('your restaurant has been Added successfully');
                this.$router.push({name:'home'});
              }
            }
        },
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