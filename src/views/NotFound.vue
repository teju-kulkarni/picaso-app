<template>
  <div class="error">
    <h1>Oops!</h1>
    <h3>The page you're looking for is not available</h3>
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
