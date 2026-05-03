<template>
  <div class='row py-3'>
      <div class='col'>
        <h1 class="text-center text-primary">Регистрация</h1>
      </div>
    </div>
    <div class='row'>
        <div class='col-6 offset-3'>
            <div class="mb-3">
                <label for="name" class="form-label">Имя</label>
                <input type="text" class="form-control" id="name" placeholder="Василий">
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" placeholder="vasya777@mail.ru">
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input type="password" class="form-control" id="password" placeholder="Введите пароль">
            </div>
            <div class="mb-3">
                <label for="password-confirmation" class="form-label">Подтвердите пароль</label>
                <input type="password" class="form-control" id="password-confirmation" placeholder="Введите пароль еще раз">
            </div>
                <button class="btn btn-primary">Зарегистрироваться</button>
        </div>
    </div>
</template>


<script>
import api from '@/api';
export default {
  data() {
        return {
            name: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
  },
  methods: {
    onSubmit() {
      
    }
  },
}
</script>


<style>

</style>