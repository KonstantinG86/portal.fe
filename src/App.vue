<template>
  <div class="container">
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
      <div class="container-fluid">
        <router-link class="navbar-brand" :to="{ name: 'main' }">Portal</router-link>
      </div>
    </nav>
  </div>
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