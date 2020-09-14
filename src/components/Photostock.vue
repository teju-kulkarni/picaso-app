<template>
  <div class="photostock">
    <h2>Photostock</h2>
    <div class="info">
      <h5>
        All handpicked collection of photos from our archived stock
      </h5>
    </div>
    <transition-group class="cards" tag="div" name="slide-up" appear="true">
      <PhotostockCard
        v-for="card in cards"
        :key="card.id"
        :cardURL="card.download_url"
      />
    </transition-group>
  </div>
</template>

<script>
import PhotostockCard from "../components/PhotostockCard";
import service from "../services/service";
export default {
  components: {
    PhotostockCard,
  },
  data() {
    return {
      cards: {},
      limit: 4,
      page: 2,
    };
  },
  created() {
    service
      //   .getCards((perPage = this.perPage), (page = this.page))
      .getCards(this.limit, this.page)
      .then((response) => {
        this.cards = response.data;
      })
      .catch((error) => {
        console.log(`There is an error in fetching images ${error.response}`);
      });
  },
};
</script>

<style scoped>
.photostock {
  margin-top: 4rem;
}

h5 {
  padding-bottom: 16px;
}
</style>
