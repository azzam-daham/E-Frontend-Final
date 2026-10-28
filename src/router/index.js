import {createRouter, createWebHistory} from 'vue-router'
import HomePage from '@/components/HomePage.vue'
import ClientList from '@/components/Client/ClientList.vue'
import ClientShow from '@/components/Client/ClientShow.vue'
import ClientAdd from '@/components/Client/ClientAdd.vue'
import ClientUpdate from '@/components/Client/ClientUpdate.vue'
import ProductList from '@/components/Products/ProductList.vue'
import ProductShow from '@/components/Products/ProductShow.vue'
import AddProduct from '@/components/Products/AddProduct.vue'
import AuthLogin from '@/components/Auth/AuthLogin.vue'
import AuthRegister from '@/components/Auth/AuthRegister.vue'
import ProductUpdate from '@/components/Products/ProductUpdate.vue'
import LandingPage from '@/components/LandingPage/LandingPage.vue'

const routes = [
    {
        name: 'AuthLogin',
        path: "/login",
        component: AuthLogin,
        meta: {guard: false}
    },
    {
        name: 'AuthRegister',
        path: "/register",
        component: AuthRegister,
        meta: {guard: false}
    },
    {
        name: 'HomePage',
        path: '/dashboard',
        component: HomePage,
        meta: {guard: true}
    },
    {
        name: 'ClientList',
        path: '/dashboard/clients',
        component: ClientList,
        meta: {guard: true}
    },
    {
        name: 'ClientShow',
        path: '/dashboard/clients/:id',
        component: ClientShow,
        meta: {guard: true}
    },
    {
        name: 'ClientAdd',
        path: '/dashboard/clients/add',
        component: ClientAdd,
        meta: {guard: true}
    },
    {
        name: 'ClientUpdate',
        path: '/dashboard/clients/update/:id',
        component: ClientUpdate,
        meta: {guard: true}
    },
    {
        name: 'ProductList',
        path: '/dashboard/products',
        component: ProductList,
        meta: {guard: true}
    },
    {
        name: 'ProductShow',
        path: '/dashboard/products/:id',
        component: ProductShow,
        meta: {guard: true}
    },
    {
        name: 'AddProduct',
        path: '/dashboard/products/add',
        component: AddProduct,
        meta: {guard: true}
    },
    {
        name: 'UpdateProduct',
        path: '/dashboard/products/update/:id',
        component: ProductUpdate,
        meta: {guard: true}
    },
    {
        name: 'LandingPage',
        path: '/',
        component: LandingPage,
        meta: {guard: false}
    }
]

const router = createRouter({
    history: createWebHistory(), routes
})

router.beforeEach((to) => {
    const token= localStorage.getItem("token");
    const guard= to.meta.guard

    if (guard && !token) {
        return {name: 'AuthLogin'}
    }
})

export default router;