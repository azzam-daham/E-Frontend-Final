<template>
  <div class="login">
    <div class="wrapper wrapper-login min-vh-100">
      <div class="container container-login">
        <h3 class="text-center">تسجيل الدخول</h3>
        <form @submit.prevent="login">
          <div class="form-group">
            <label>البريد الإلكتروني</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>كلمة المرور</label>
            <input v-model="password" type="password" class="form-control" required />
          </div>
          <div v-if="errorMessage" class="alert alert-danger">
            
          </div>
          <div class="form-action">
            <button type="submit" class="btn btn-primary btn-login">
              تسجيل الدخول
            </button>
          </div>
          <div class="login-account">
            <span>ليس لديك حساب؟</span>
                <router-link to="/register">إنشاء حساب</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>
<script>
import axios from "axios"
export default{
  data(){
    return {
      email: "",
      password: "",
      error: ""
    }
  },
  methods:{
    async login(){
      try {
        const response = await axios.post("http://127.0.0.1:8000/api/login",{
          "email": this.email,
          "password": this.password
        });
        localStorage.setItem("token", response.data.token);
        this.$router.push("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  },
}
</script>