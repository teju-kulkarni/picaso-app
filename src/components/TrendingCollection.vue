<template>
  <div class="trending">
    <div class="info">
      <router-link class="links" :to="{ name: 'dashboard' }">
        &#8592; Back
      </router-link>
    </div>
    <h2>Trending</h2>
    <h5>Collection of all trending photos uploaded by top contributers</h5>
    <template>
      <div class="large-cards">
        <TrendingCollectionCard
          v-for="card in cards"
          :key="card.id"
          :cardURL="card.download_url"
          :cardAuthor="card.author"
          :cardId="card.id"
        />
      </div>
    </template>
    <div class="append">
      <p>That's all folks!</p>
    </div>
    <Observer @intersect="intersected" />
  </div>
</template>

<script>
import service from "../services/service";
import TrendingCollectionCard from "../components/TrendingCollectionCard";
import Observer from "../components/Observer";
export default {
  components: {
    TrendingCollectionCard,
    Observer,
  },
  data() {
    return {
      cards: [],
      page: 1,
      limit: 3,
      isEnd: false,
    };
  },
  methods: {
    fetchCards() {
      return service
        .getCards(this.limit, this.page)
        .then((response) => {
          this.page = this.page + 1;
          if (response.data.length == 0 || this.page == 5) {
            this.isEnd = true;
          }
          return response.data;
        })
        .catch((error) => {
          console.log(`There is an error in fetching images ${error.response}`);
        });
    },
    intersected() {
      if (!this.isEnd) {
        //   const cards = this.fetchCards();
        this.fetchCards().then((cards) => {
          this.cards = [...this.cards, ...cards];
        });
      }
    },
  },

  created() {
    this.fetchCards().then((cards) => {
      this.cards = [...this.cards, ...cards];
    });
  },
};
</script>

<style scoped>
h5 {
  padding-bottom: 16px;
}
h2 {
  padding-top: 12px;
}
.append > p {
  font-size: 20px;
  font-weight: 500;
}
</style>
