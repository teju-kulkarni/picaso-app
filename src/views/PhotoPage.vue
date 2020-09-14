<template>
  <div class="photo-page dashboard">
    <NavBar />
    <div class="info">
      <router-link class="links" :to="{ name: 'trending' }">
        &#8592; Back
      </router-link>
    </div>
    <photo-details :photo-id="$route.params.id" />
    <div class="recommend">
      <h5>Recommendations based on the above photo</h5>
    </div>
    <div class="carousel-list">
      <div class="arrow-left" @click="onLeft"></div>
      <div
        class="photo-list"
        :style="{ width: activeCards.length * 146 + 'px' }"
      >
        <div v-for="card in activeCards" :key="card.id" @click="goToCard(card)">
          <Photo
            :cardURL="card.download_url"
            :cardTranslate="card.translateValue"
          />
        </div>
      </div>
      <div class="arrow-right" @click="onRight"></div>
    </div>

    <!--child route -->
    <div class="card-info" @click.self="close">
      <router-view />
    </div>
  </div>
</template>

<script>
import PhotoDetails from "../components/PhotoDetails";
import Photo from "../components/Photo";
import service from "../services/service";
export default {
  components: {
    PhotoDetails,
    Photo,
  },
  props: ["id"],
  data() {
    return {
      limit: 5,
      page: 3,
      cards: [],
      showLeft: false,
      fixedWidth: 146,
      photoKey: 0,
    };
  },
  computed: {
    isCardOpen() {
      return this.$route.name === "photo-info";
    },
    activeCards() {
      return this.cards.slice(0, 5);
    },
  },
  methods: {
    goToCard(card) {
      return this.$router.push({
        name: "photo",
        params: { id: card.id },
      });
    },
    close() {
      return this.router.push({ name: "photo" });
    },
    onLeft() {
      let negativeCard;
      const translatedCards = this.cards
        .map((card) => {
          const translateVal = card.translateValue - this.fixedWidth;
          return { ...card, translateValue: translateVal };
        })

        .filter((card) => {
          if (card.translateValue < 0) {
            negativeCard = card;
            negativeCard.translateValue =
              this.fixedWidth * (this.cards.length - 1);
            return false;
          } else {
            return true;
          }
        });
      this.cards = [...translatedCards, negativeCard];
    },

    onRight() {
      let positiveCard;
      const translatedCards = this.cards
        .map((card) => {
          const translateVal = card.translateValue + this.fixedWidth;
          return { ...card, translateValue: translateVal };
        })
        .filter((card) => {
          if (card.translateValue > 584) {
            positiveCard = card;
            positiveCard.translateValue = 0;
            return false;
          } else {
            return true;
          }
        });
      this.cards = [...translatedCards, positiveCard];
    },
  },

  created() {
    service
      .getCards(this.limit, this.page)
      .then((response) => {
        const fetchedCards = response.data;
        fetchedCards.forEach((card, index) => {
          card.translateValue = this.fixedWidth * index;
          this.cards.push(card);
        });
      })
      .catch((error) => {
        console.log("There is error in p6hotolist" + error.response);
      });
  },
};
</script>

<style scoped>
@media screen and (max-width: 425px) {
  .carousel-list {
    max-width: 332px;
  }
  .recommend h5 {
    font-size: 16px;
  }
}
.recommend {
  margin-top: 32px;
  margin-bottom: 8px;
}
.carousel-list {
  display: flex;
  align-items: center;
}
.photo-list {
  position: relative;
  height: 116px;
  margin: 0 8px;
  overflow: hidden;
}
.arrow-right {
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-left: 8px solid #6241ea;
}

.arrow-left {
  width: 0;
  height: 0;
  border-top: 12px solid transparent;
  border-bottom: 12px solid transparent;
  border-right: 8px solid #6241ea;
}
</style>
