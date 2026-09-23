<template>
    <div class="container">
          <form>
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
                        <button type="submit" class="btn btn-outline-success">Add</button>
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
            this.product = response.data.date;
            console.log(response.data.data);
        },
        async updateProduct(){
            let formData = new FormData();
            formData.append('name', this.product.name);
            formData.append('price', this.product.price);
            formData.append('type', this.product.type);
            formData.append('discount', this.product.discount);
            formData.append('discription', this.product.discription);
            let response = await axios.patch(`/products/${this.$route.params.id}`);
            this.product = response.data.data;

        }
    }
}
</script>