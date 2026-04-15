<template>

    <div class="container">
      <div>
          <input type="text" placeholder="search name">
          <input type="text" placeholder="search type">
          <input type="text" placeholder="search price">
          <input type="text" placeholder="search discount">
          <button>Search</button>
       </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">type</th>
                <th scope="col">discount</th>
                <th scope="col">Price</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(product, index) in products" :key="product.id">
                <th scope="row">{{ index + 1 }}</th>
                <td>{{ product.name }}</td>
                <td>{{ product.type }}</td>
                <td>{{ product.discount }} %</td>
                <td>{{ product.price }} SAR</td>

                <td>
                  <router-link :to="`/products/${product.id}`">
                  <span class="material-symbols-outlined">
                      visibility|
                  </span>
                </router-link>

                <router-link>
                  <span class="material-symbols-outlined">
                      update|
                  </span>
                </router-link>

                  <span class="material-symbols-outlined">
                      delete
                  </span>
                
              </td>
                </tr>
            </tbody>
        </table>

    </div>

</template>

<script>
import axios from 'axios'

export default{
    data(){
        return {
            products: []
        }
    },
    mounted(){
        this.getProducts();
    },
    methods:{
        async getProducts(){
            const results=await axios.get('http://127.0.0.1:8000/api/products');
            // console.log(results.data.data);
            this.products= results.data.data
        }
    }
}
</script>

<style>

</style>