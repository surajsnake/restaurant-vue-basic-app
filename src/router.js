import HomePage from './components/HomePage.vue'
import SignUp from './components/SignUp.vue'
import LoginPage from './components/LoginPage.vue'
import AddRestaurant from './components/AddRestaurant.vue'
import UpdateRestaurant from './components/UpdateRestaurant.vue'

import { createRouter, createWebHistory } from 'vue-router';

const routes = [
    {
        name:'home',
        component:HomePage,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:LoginPage,
        path:'/login'
    },
    {
        name:'AddRestaurant',
        component:AddRestaurant,
        path:'/addrestaurant'
    },
    {
        name:'UpdateRestaurant',
        component:UpdateRestaurant,
        path:'/updaterestaurant/:id'
    }
];
const router = createRouter({
    history:createWebHistory(),
    routes,
});
export default router;

