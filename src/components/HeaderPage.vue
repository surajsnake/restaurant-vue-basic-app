<template>
    <div class="nav">
        <router-link to="/">Home</router-link>
        <router-link to="/addrestaurant">Add Restaurant</router-link>
        <router-link to="/updaterestaurant">Update Restaurant</router-link>

        <button v-on:click="logOut()">logOut</button>

    </div>
</template> 
<script>
    export default {
        name:'HeaderPage',

        methods:{
            logOut() {
               localStorage.clear();
                this.$router.push({name:"Login"})
            }
        }
    }
</script>
<style>
    .nav {
        background-color: #333;
        overflow: hidden;
    }
    .nav a {
        float: left;
        color:#f2f2f2f2;
        padding: 14px 16px;
        text-align: center;
        font-size: 17px;
        text-decoration: none;
        margin-right: 5px;
    }
    .nav a:hover {
        background: #ddd;
        color:#333
    }
</style>