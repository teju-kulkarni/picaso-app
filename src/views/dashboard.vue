<template>
  <div class="dashboard">
    <NavBar />
    <TrendingList />
    <Photostock />
  </div>
</template>

<script>
import TrendingList from "../components/TrendingList";
import Photostock from "../components/Photostock";
export default {
  components: {
    TrendingList,
    Photostock,
  },
};
</script>

<style scoped></style>
