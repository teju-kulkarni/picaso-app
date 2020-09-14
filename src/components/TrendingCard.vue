<template>
  <div
    class="image text"
    v-bind:style="imageObj"
    @mouseover="hover = true"
    @mouseleave="hover = false"
    :class="{ active: hover }"
  ></div>
</template>

<script>
export default {
  props: {
    cardURL: {
      type: String,
    },
    cardAuthor: {
      type: String,
    },
  },
  data() {
    return {
      hover: false,
    };
  },
  computed: {
    imageObj() {
      return {
        "background-image": "url(" + this.cardURL + ")",
        "background-size": "cover",
        "background-position": "center",
      };
    },
  },
};
</script>

<style scoped>
.image {
  border-radius: 8px;
  -webkit-filter: grayscale(0);
  filter: grayscale(0);
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.active {
  -webkit-filter: grayscale(100%);
  filter: grayscale(100%);
}
</style>
