<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view />
    </transition>
  </div>
</template>

<style>
@import url("https://rsms.me/inter/inter.css");

.cards {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}

.image {
  width: 304px;
  height: 214px;
}
.large-cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}
#app {
  font-family: Inter;
  max-width: 1440px;
  width: 100%;
  margin: auto;
}

.info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.large-image {
  width: 400px;
  height: 500px;
}

@media screen and (max-width: 425px) {
  .dasboard {
    display: grid;
    grid-template-columns: 1fr;

    row-gap: 16px;
    width: 300px;
    height: 200px;
  }
  .trending .image {
    display: flex;
    flex-direction: column;
    align-content: space-between;
  }
  .image {
    width: 100%;
    height: 240px;
    margin-top: 12px;
  }
  .large-cards {
    display: grid;
    grid-template-columns: 1fr;
  }
  .large-image {
    width: 100%;
    height: 480px;
  }
  #app {
    max-width: 320px;
  }
  .dashboard {
    padding: 0 24px;
  }
  .trending h2,
  .photostock h2 {
    font-size: 24px;
  }
  .trending h5,
  .photostock h5,
  .info .links {
    font-size: 16px;
  }
  .info {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    max-width: 290px;
    margin-top: 16px;
  }
}

@media screen and (max-width: 1200px) {
  #app {
    max-width: 968px;
  }
}

@media screen and (max-width: 1024px) {
  #app {
    max-width: 968px;
  }
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

body {
  font-size: 14px;
  line-height: 1.43;
  color: #484848;
  background-color: #fff;
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
}

h2 {
  /* width: 123px;
  height: 34px; */

  font-size: 32px;
  font-weight: 600;
  font-stretch: normal;
  font-style: normal;
  line-height: 44px;
  letter-spacing: normal;
  color: #484848;
  margin: 0px;
}

h5 {
  /* width: 525px;
  height: 21px; */
  font-size: 18px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: 26px;
  letter-spacing: normal;
  color: #747474;
  margin: 0px;
}

.links {
  font-family: Inter;
  font-size: 18px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #6241ea;
  text-decoration: none;
}

/***TRANSITIONS ***/
.slide-fade-enter {
  transform: translateX(10px);
  opacity: 0;
}
.slide-fade-enter-active {
  transition: opacity 3s ease-out;
}

.slide-fade-leave-to {
  transform: translateX(-10px);
  opacity: 0;
}
.slide-fade-leave-active {
  transition: opacity 1s ease-out;
}

.slide-up-enter {
  transform: translateY(10px);
  opacity: 0;
}
.slide-up-enter-active {
  transition: opacity 2s ease-out;
}
</style>
