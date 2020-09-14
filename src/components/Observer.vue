<template>
  <div class="observer" />
</template>

<script>
const options = {
  root: null,
  threshold: 0,
};
export default {
  data: () => ({
    observer: null,
    options: {
      root: null,
      threshold: 0,
    },
  }),
  mounted() {
    this.observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry && entry.isIntersecting) {
          this.$emit("intersect");
        }
      }),
        options;
    });

    const append = document.querySelector(".append");
    this.observer.observe(append);
  },
  destroyed() {
    this.observer.disconnect();
  },
};
</script>
