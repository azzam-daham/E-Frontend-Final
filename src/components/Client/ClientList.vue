<template>

    <div class="container">
      <div>
          <input type="text" placeholder="search name" v-model="filters.name">
          <input type="text" placeholder="search address" v-model="filters.address">
          <input type="text" placeholder="search email" v-model="filters.email">
          <input type="text" placeholder="search age" v-model="filters.age">
          <button @click.prevent="allClients()">Search</button>
       </div>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Address</th>
                <th scope="col">age</th>
                <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(client, index) in clients" :key="client.id">
                <th scope="row">{{ index +1 }}</th>
                <td>{{ client.name }}</td>
                <td>{{client.email}}</td>
                <td>{{client.mobile}}</td>
                <td>{{ client.address }}</td>
                <td>{{ client.age }}</td>

                <td>
                  <router-link :to="`clients/${client.id}`">
                  <span class="material-symbols-outlined">
                      visibility|
                  </span>
                </router-link>

                <router-link :to="`clients/update/${client.id}`">
                  <span class="material-symbols-outlined">
                      update|
                  </span>
                </router-link>

                  <span class="material-symbols-outlined" @click="destroy(client.id)">
                      delete
                  </span>
                
              </td>
                </tr>
            </tbody>
        </table>

        <nav v-if="lastPage>1" aria-label="Page navigation example">
          <ul class="pagination">
            <li v-for="(link, index) in links"
            :key = "index"
            :class = "['page-item',{active: link.active, disabled: !link.url}]"
            >
              <a @click.prevent="goToPage(link.url)" class="page-link" href="#" v-html="link.label"></a>
            </li>
          </ul>
        </nav>

    </div>
              
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default{
    data() {
        return {
            clients:[],
            currentPage: 1,
            lastPage: 1,
            links: [],
            filters: {
              name: '',
              age: '',
              address: '',
              email: '',
            },
            
        }
    },

    mounted(){
        this.allClients()
    },
    methods: {
        async allClients(page = 1){
          const params = {
            page: page,
            ...this.filters
          }
            const clients = await axios.get('http://127.0.0.1:8000/api/clients', {params})
            this.clients = clients.data.data
            // console.log(clients.data.data);
            this.currentPage = clients.data.meta.current_page
            this.lastPage = clients.data.meta.last_page
            this.links = clients.data.meta.links
            
        },
        goToPage(url){
          const urlObject = new URL(url)
          const page = urlObject.searchParams.get('page')

          this.allClients(page)
        },
        async destroy(id){
        // const confirmed = confirm('are you sure to delete this client?')
        //   if(confirmed){
        //     await axios.delete(`http://127.0.0.1:8000/api/client/${id}`)
        //     this.allClients()
        //   }

          const result = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
          })
          if (result.isConfirmed){
            await axios.delete(`http://127.0.0.1:8000/api/client/${id}`)
            this.allClients()
            Swal.fire("Done!");
          }else{
            Swal.fire({
            icon: "error",
            title: "Oops... can not deleted!",
            text: "Something went wrong!",
            footer: '<a href="#">Why do I have this issue?</a>'
          });
          }

        }
    }
}

</script>

<style>

</style>