<template>
  <div>
    <div
      class="image"
      v-bind:style="{ ...imageObj }"
      @click="active = true"
      @mousemove="active = false"
    ></div>
  </div>
</template>

<script>
export default {
  props: {
    cardURL: {
      type: String,
    },
    showLeft: {
      type: Boolean,
    },
    cardTranslate: {
      type: Number,
    },
  },
  data() {
    return {
      active: false,
    };
  },
  computed: {
    imageObj() {
      return {
        "background-image": "url(" + this.cardURL + ")",
        "background-size": "cover",
        "background-position": "center",
        transform: "translateX(" + this.cardTranslate + "px)",
      };
    },
  },
};
</script>

<style scoped>
.image {
  width: 130px;
  height: 116px;
  border-radius: 8px;
  position: absolute;
  display: inline-block;
  margin: 0 8px;
  animation: fadein 5s;
}

@keyframes fadein {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

.onclick {
  border: 2px solid blue;
}
</style>
