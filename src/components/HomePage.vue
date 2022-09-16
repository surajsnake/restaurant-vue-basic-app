<template>
     <HeaderPage />
   <h1>Hello User <b>Welcome to Our Home Page</b></h1>
   <h2>All Restaurant List</h2>

<table>
  <tr>
    <th>Restaurant Name</th>
    <th>Restaurant Address</th>
    <th>Restaurant Contact</th>
    <th>Edit</th>
    <th>Delete</th>
  </tr>
  <tr v-for="rest in restaurantList" :key="rest">
    <td>{{rest.name}}</td>
    <td>{{ rest.address }}</td>
    <td>{{ rest.phone }}</td>
    <td><router-link :to="'/updaterestaurant/'+rest.id">Edit</router-link></td>
    <td><button @click="deleteRestaurant(rest.id)">Delete</button> </td>
</tr>
</table>
</template>

<script>
    import HeaderPage from './HeaderPage.vue'
    import axios from 'axios'
    export default {
        name:"HomePage",
        components:{
            HeaderPage,
        },
        data(){
            return {
                restaurantList:[]
            }
        },
        methods:{
          async deleteRestaurant(id){
               let result = await axios.delete("http://localhost:3000/restaurant/" + id);
               if(result.status==200) {
                this.loadData();
               }
            },
            editRestaurant() {
                alert('this is the edit restaurnat route');
            },

            async loadData() {
                let user = localStorage.getItem('user-info');
            if(!user) {
                this.$router.push({name:"SignUp"});
            }
            let data = await axios.get('http://localhost:3000/restaurant'); 
            if(data.status==200 && data.data.length>0) {
                this.restaurantList = data.data
            } else {
                console.log('no restaurant data found');
            }
            }
        },

       async mounted() {
            
            this.loadData();

        }
    }
</script>
<style>
    table {
      font-family: arial, sans-serif;
      border-collapse: collapse;
      width: 50%;
    }
    
    td, th {
      border: 1px solid #dddddd;
      text-align: left;
      padding: 8px;
    }
    
    tr:nth-child(even) {
      background-color: #dddddd;
    }
    
</style>