<template>
    <div class="container">
    {{ product }}
          <form @submit.prevent="updateProduct">
                  <div class="card">
                  <div class="card-header">
                    <div class="card-title">Products>Update Product</div>
                    <div class="card-body">
                    <div class="row">
                      <div class="col-md-6 col-lg-4">
                        <div class="form-group">
                          <p for="email2">Name</p>
                          <input
                          v-model="product.name"
                            class="form-control"
                            id="name"
                            placeholder="Enter Name"
                          />
                        </div>

                        <div class="form-group">
                          <p for="email2">Type</p>
                          <input
                          v-model="product.type"
                            class="form-control"
                            id="type"
                            placeholder="Enter Type"
                          />
                          
                        </div>

                        <div class="form-group">
                          <p for="email2">Price</p>
                          <input
                          v-model="product.price"
                            class="form-control"
                            id="price"
                            placeholder="Enter Price"
                          />
                          
                        </div>

                        <div class="form-group">
                          <p for="email2">discount</p>
                          <input
                          v-model="product.discount"
                            class="form-control"
                            id="discount"
                            placeholder="Enter discount"
                          />
                          
                        </div>

                        <div class="form-group">
                          <p for="email2">discrption</p>
                          <textarea 
                            v-model="product.discrption"
                            class="form-control"
                            id="discrption"
                            placeholder="Enter Discrption"
                          ></textarea>
                          
                        </div>
                        <button type="submit" class="btn btn-outline-success">Update</button>
                        </div>
                  </div>
                  </div>
                </div>
              </div>
                </form>      
  </div>
</template>

<style>

</style>

<script>
import axios from '@/api/axios'

export default{
    data(){
        return {
            product: {}
        }
    },
    mounted(){
        this.getProduct();
    },
    methods: {
        async getProduct(){
            let response = await axios.get(`/products/${this.$route.params.id}`);
            this.product = response.data.data;
            console.log(response.data.data);
        },
        async updateProduct(){
            let formData = {
              name: this.product.name,
              price: this.product.price,
              discount: this.product.discount,
              discrption: this.product.discrption,
              type: this.product.type
            };
            
            let response = await axios.put(`/products/${this.$route.params.id}`, formData);
            this.product = response.data.data;
            this.$router.push('/dashboard/products')

        }
    }
}
</script>