<template>
<h1>Hi!</h1>

<div class="container">
                <form @submit.prevent="addProduct">
                  <div class="card">
                  <div class="card-header">
                    <div class="card-title">Products>Add Product</div>
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

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default{
  data(){
    return{
      product:{}
    }
  },
  methods:{
    async addProduct(){
      let data = new FormData();
      data.append("name", this.product.name);
      data.append("price", this.product.price);
      data.append("type", this.product.type);
      data.append("discount", this.product.discount);
      data.append("discrption", this.product.discrption);

      await axios.post('http://127.0.0.1:8000/api/products', data)
      Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your work has been saved",
          showConfirmButton: false,
          timer: 1500
        });
        this.$router.push("/products");
    }
  }
}
</script>

<style>

</style>