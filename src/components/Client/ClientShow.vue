<template>
    <div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Nav Pills Without Border (Vertical Tabs)</h4>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-12">
                                            <strong>id: {{client.id}}</strong>
                                        </div>
                                        <div>
                                            <strong>name: {{ client.name }}</strong>
                                        </div>
                                        <div>
                                            <strong>mobile: {{ client.mobile }}</strong>
                                        </div>
                                        <div>
                                            <strong>address: {{ client.address }}</strong>
                                        </div>
									</div>
								</div>
							</div>
						</div>
</template>

<script>
import axios from 'axios'
    export default{
        data(){
            return{
                client:{}
            }
        },
        mounted(){
            this.getClient();
        },
        methods:{
            async getClient(){
                const response=await axios.get(`http://127.0.0.1:8000/api/clients/${this.$route.params.id}`)
                this.client = response.data.data
            }
        }
    }
</script>

<style>

</style>