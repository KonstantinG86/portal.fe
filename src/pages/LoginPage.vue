<template>
    <div class='row py-3'>
      <div class='col'>
        <h1 class="text-center text-primary">Вход</h1>
      </div>
    </div>
    <div class='row'>
        <div class='col-6 offset-3'>
            <div class="alert alert-danger" role="alert mb-3" v-if="error">
                {{ error }}
            </div>
            <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input 
                    type="email" 
                    class="form-control" 
                    v-model="email"
                    id="email" 
                    placeholder="vasya777@mail.ru"
                >
            </div>
            <div class="mb-3">
                <label for="password" class="form-label">Пароль</label>
                <input 
                    type="password" 
                    class="form-control" 
                    v-model="password"
                    id="password" 
                    placeholder="Введите пароль"
                >
            </div>
                <button 
                    class="btn btn-primary"
                    @click="onSubmit"
                >Войти</button>
        </div>
    </div>
</template>


<script>
import api from '@/api';
export default {
    data() {
        return {
            email: '',
            password: '',
            error: ''
        }
    },
    methods: {
        async onSubmit() {
            this.error = '';
            try {
                const response = await api.post('/login', {
                email: this.email,
                password: this.password
                });
                console.log(response.data);
            }
            catch (e) {
                if (e.status == '422') {
                    this.error = e.response.data.message;
                }                
            }            
        }
    }
}
</script>


<style></style>