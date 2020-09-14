<template>
  <div class="trending">
    <h2>Trending</h2>
    <div class="info">
      <h5>
        Collection of all trending photots uploaded by top contributers
      </h5>
      <router-link class="links" :to="{ name: 'trending' }"
        >See more &#8594;
      </router-link>
    </div>

    <transition-group class="cards" tag="div" name="slide-up" appear="true">
      <TrendingCard
        v-for="card in cards"
        :key="card.id"
        :cardURL="card.download_url"
        :cardAuthor="card.author"
      />
    </transition-group>
  </div>
</template>

<script>
import service from "../services/service";
import TrendingCard from "../components/TrendingCard";

export default {
  components: {
    TrendingCard,
  },
  data() {
    return {
      cards: {},
      limit: 4,
      page: 1,
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
.trending {
  margin-top: 3rem;
}

h5 {
  padding-bottom: 16px;
}
</style>
