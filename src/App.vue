<template>
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'main' }">Portal</router-link>
        <ul class="nav">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'login' }">Вход</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'register' }">Регистрация</router-link>
          </li>
        </ul>
      </div>
    </nav>
  <div class="container">
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
  },
}
</script>


<style></style>