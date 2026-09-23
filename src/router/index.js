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
        path: '/',
        component: HomePage,
        meta: {guard: true}
    },
    {
        name: 'ClientList',
        path: '/clients',
        component: ClientList,
        meta: {guard: true}
    },
    {
        name: 'ClientShow',
        path: '/clients/:id',
        component: ClientShow,
        meta: {guard: true}
    },
    {
        name: 'ClientAdd',
        path: '/clients/add',
        component: ClientAdd,
        meta: {guard: true}
    },
    {
        name: 'ClientUpdate',
        path: '/clients/update/:id',
        component: ClientUpdate,
        meta: {guard: true}
    },
    {
        name: 'ProductList',
        path: '/products',
        component: ProductList,
        meta: {guard: true}
    },
    {
        name: 'ProductShow',
        path: '/products/:id',
        component: ProductShow,
        meta: {guard: true}
    },
    {
        name: 'AddProduct',
        path: '/products/add',
        component: AddProduct,
        meta: {guard: true}
    },
    {
        name: 'UpdateProduct',
        path: '/products/update/:id',
        component: ProductUpdate,
        meta: {guard: true}
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