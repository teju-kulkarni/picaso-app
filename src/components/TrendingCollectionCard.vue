<template>
  <router-link class="links" :to="{ name: 'photo', params: { id: cardId } }">
    <div
      class="large-image text"
      v-bind:style="imageObj"
      @mouseover="hover = true"
      @mouseleave="hover = false"
      :class="{ active: hover }"
    >
      <label>{{ cardAuthor }}</label>
      <p>{{ date }}</p>
    </div>
  </router-link>
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
    cardId: {
      type: String,
    },
  },
  data() {
    return {
      date: new Date(Math.random()),
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
  created() {
    this.date = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(this.date);
  },
};
</script>

<style scoped>
.large-image {
  margin-top: 8px;
  border-radius: 8px;
  position: relative;
  opacity: 1;
  -webkit-transition: 0.3s ease-in-out;
  transition: 0.3s ease-in-out;
}

.active {
  -webkit-transform: scale(1.03);
  transform: scale(1.03);
  opacity: 0.5;
  /* width: 410px;
  box-shadow: 20px 20px 40px 0px rgba(0, 0, 0, 0.5); */
}

.text label {
  font-size: 20px;
  font-weight: 500;
  position: absolute;
  bottom: 30px;
  left: 20px;
  color: white;
  margin: 0;
}

.text p {
  position: absolute;
  bottom: 8px;
  left: 20px;
  color: white;
  margin: 0;
}
</style>
