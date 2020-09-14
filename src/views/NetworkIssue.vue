<template>
  <div class="error">
    <h1>Oops!</h1>
    <h3>Bad network, Please check your connection</h3>
    <router-link :to="{ name: 'dashboard' }">Go back to home page</router-link>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.error {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
