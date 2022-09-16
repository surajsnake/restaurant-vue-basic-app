<template>
  
    <HeaderPage />
    <h1>Update Restaurant</h1>
<div class="register">
    <input type="text" placeholder="Enter Name" v-model="restaurant.name" />
    <input type="text" placeholder="Enter Address" v-model="restaurant.address" />
    <input type="text" placeholder="Enter Phone" v-model="restaurant.phone" />
    <button v-on:click="updateRestaurant()">Update Restaurant</button>
</div>
</template>

<script>
    import HeaderPage from './HeaderPage.vue'
    import axios from 'axios'
    export default {
        name:"UpdateRestaurant",
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
            async updateRestaurant() {
              let result = await axios.put("http://localhost:3000/restaurant/"+this.$route.params.id,{
                name:this.restaurant.name,
                address:this.restaurant.address,
                phone:this.restaurant.phone
              });
              if(result.status==200) {
                alert('your restaurant has been Updated successfully');
                this.$router.push({name:'home'});
              }
            }
          
        },
        //mounted:- is the life cycle methods which will calls automatically when page is loaded
       async mounted() {
            let user = localStorage.getItem('user-info');
            if(!user) {
                this.$router.push({name:"SignUp"});
            }
            let id = this.$route.params.id;
            let result = await axios.get("http://localhost:3000/restaurant/"+id);
            if(result.status==200) {
                this.restaurant = result.data;
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