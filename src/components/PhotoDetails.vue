<template>
  <div class="photo">
    <div class="main-image" v-bind:style="imageObj"></div>
    <div class="details">
      <div class="section1">
        <h5>Author Name</h5>
        <p>Posted on: {{ date }}</p>
      </div>
      <hr />
      <div class="section2">
        <h6>Best photo of the year</h6>
        <p>{{ year }}</p>
      </div>

      <div class="section3">
        <h6>Top Downloads</h6>
        <p>{{ getMonthName }} {{ year }}</p>
      </div>
      <hr />
    </div>
  </div>
</template>

<script>
import service from "../services/service";
export default {
  props: {
    photoId: {
      type: String,
    },
  },
  data() {
    return {
      photo: {},
      date: new Date(Math.random()),
      year: new Date(Math.random()).getFullYear(),
    };
  },
  computed: {
    imageObj() {
      return {
        "background-image": "url(" + this.photo.download_url + ")",
        "background-size": "cover",
        "background-position": "center",
      };
    },
    getMonthName() {
      const date = new Date();
      return date.toLocaleString("default", { month: "short" });
    },
  },

  watch: {
    photoId(newPhotoId) {
      service
        .getCardById(newPhotoId)
        .then((response) => {
          this.photo = response.data;
        })
        .catch((error) => {
          console.log(`There is an error in fetching images ${error.response}`);
        });
    },
  },

  created() {
    this.date = new Intl.DateTimeFormat("en-US", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    }).format(this.date);

    service
      //   .getCards((perPage = this.perPage), (page = this.page))
      .getCardById(this.photoId)
      .then((response) => {
        this.photo = response.data;
      })
      .catch((error) => {
        console.log(`There is an error in fetching images ${error.response}`);
      });
  },
};
</script>

<style scoped>
@media screen and (max-width: 425px) {
  .main-image {
    width: 100%;
    height: 480px;
    border-radius: 8px;
  }
  .photo {
    display: grid;
    grid-template-columns: 1fr;
    margin-top: 16px;
  }
}
@media screen and (min-width: 768px) {
  .main-image {
    width: 800px;
    height: 550px;
    border-radius: 8px;
  }
  .photo {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 16px;
    margin-top: 16px;
  }
}
h5 {
  font-weight: 600;
  font-size: 24px;
}

h6 {
  font-size: 16px;
  margin: 0px;
}
p {
  font-size: 14px;
  margin: 0px;
}
hr {
  margin: 0px;
  max-width: 300px;
}

.section1 {
  margin-top: 32px;
  margin-bottom: 24px;
}
.section2 {
  margin-bottom: 18px;
}
</style>
