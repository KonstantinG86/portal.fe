<template>
  <div class='row py-3'>
      <div class='col'>
        <h1 class="text-center text-primary">Регистрация</h1>
      </div>
    </div>
    <div class='row'>
        <div class='col-6 offset-3'>
            <div class="alert alert-danger" role="alert mb-3" v-if="error">
                {{ error }}
            </div>
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input type="text" class="form-control" id="name" placeholder="Васян" v-model="name">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="vasya777@mail.ru" v-model="email">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" placeholder="Введите пароль" v-model="password">
            </div>
            <div class="mb-3">
                <label for="password-confirmation" class="form-label">Подтвердите пароль</label>
                <input type="password" class="form-control" id="password-confirmation" placeholder="Введите пароль еще раз" v-model="confirmationPassword">
            </div>
                <button class="btn btn-primary" @click="onSubmit">Зарегистрироваться</button>
        </div>
    </div>
</template>


<script>
import {useAuthStore} from '@/stores/authstore';

export default {
  data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmationPassword: '',
            error: ''
        }
  },
  methods: {
    async onSubmit() {
      this.error = '';
      try {
        await useAuthStore().register({
          name: this.name,
          email: this.email,
          password: this.password,
          confirmationPassword: this.confirmationPassword
        });
        
        this.name = '';
        this.email = '';
        this.password = '';
        this.confirmationPassword = '';
        this.$router.push('/');

      } catch (e) {
        if (e.status === 422) {
          this.error = e.response.data.message;
        }
      }
    }
  },
}
</script>


<style>

</style>