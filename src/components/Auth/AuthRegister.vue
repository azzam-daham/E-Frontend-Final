<template>
    <div class="login">
    <div class="wrapper wrapper-login min-vh-100">
      <div class="container container-signup">
        <h3 class="text-center">إنشاء حساب</h3>
        <form @submit.prevent="register">
          <div class="form-group">
            <label>الاسم</label>
            <input v-model="name" type="text" class="form-control" required />
          </div>
          <div class="form-group">
            <label>البريد الإلكتروني</label>
            <input v-model="email" type="email" class="form-control" required />
          </div>
          <div class="form-group">
            <label>كلمة المرور</label>
            <input v-model="pass" type="password" class="form-control" required />
          </div>
          <div class="form-group">
            <label>تأكيد كلمة المرور</label>
            <input v-model="passConfirm" type="password" class="form-control" required />
          </div>
          <div v-if="errorMessage" class="alert alert-danger">
            {{ errorMessage }}
          </div>
          <div class="form-action">
            <button type="submit" class="btn btn-primary btn-login">
              تسجيل
            </button>
          </div>
          <div class="login-account">
            <span>لديك حساب؟</span>
            <router-link to="/login">تسجيل الدخول</router-link>
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
    return{
      "name": "",
      "email": "",
      "pass": "",
      "passConfirm": "",
      "role": 2,
      "errorMessage": ""
    }
  },
  methods:{
    async register(){
      if (this.pass != this.passConfirm) {
        this.errorMessage= "The password not match with confirm passord!"
      }
      try {
        const response= await axios.post("http://127.0.0.1:8000/api/register", {
          "name": this.name,
          "email": this.email,
          "password": this.pass,
          "role": this.role
        });
        this.$router.push("/login");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>