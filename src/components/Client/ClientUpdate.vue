<template>
    <div class="container">
      <div class="container">
        <form @submit.prevent="updateClient">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Name</label>
            <input type="text" v-model="client.name" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email address</label>
            <input type="email" v-model="client.email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Mobile</label>
            <input type="text" v-model="client.mobile" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Adderss</label>
            <input type="text" v-model="client.address" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
            <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
          </div>
  
          <button type="submit" class="btn btn-primary">Update</button>
        </form>
      </div>
    </div>
  </template>

<script>
    import axios from 'axios';

    export default{
        data(){
            return {
                client: {}
            }
        },
        mounted(){
            this.getClient();
        },
        methods: {
            async getClient(){
                let response = await axios.get(`http://127.0.0.1:8000/api/clients/${this.$route.params.id}`)
                this.client = response.data.data
            },
            async updateClient(){
                let formData = new FormData();
                formData.append('name', this.client.name);
                formData.append('email', this.client.email)
                formData.append('mobile', this.client.mobile)
                formData.append('address', this.client.address)

                let response = await axios.put(`http://127.0.0.1:8000/api/client/${this.$route.params.id}`, this.client);
                this.client = response.data.data
                this.$router.push('/clients')

            }
        }
    }
  
</script>