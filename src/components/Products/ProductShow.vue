<template>
    <div class="col-md-12">
							<div class="card">
								<div class="card-header">
									<h4 class="card-title">Nav Pills Without Border (Vertical Tabs)</h4>
								</div>
								<div class="card-body">
									<div class="row">
										<div class="col-12">
                                            <strong>id: {{ product.id }}</strong>
                                        </div>
                                        <div>
                                            <strong>name:{{ product.name }}</strong>
                                        </div>
                                        <div>
                                            <strong>price: {{ product.price }}</strong>
                                        </div>
                                        <div>
                                            <strong>type: {{ product.type }}</strong>
                                        </div>
                                        <div>
                                            <strong>discount: {{ product.discount }}</strong>
                                        </div>
                                        <div>
                                            <strong>discrption: {{ product.discrption }}</strong>
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
            product:{}
        }
    },
    mounted(){
        this.getProduct()
    },
    methods:{
        async getProduct(){
            const result= await axios.get(`http://127.0.0.1:8000/api/products/${this.$route.params.id}`)
            this.product=result.data.data;
            console.log(result.data.data);
        }
    }
}
</script>

<style>

</style>