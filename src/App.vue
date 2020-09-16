<template>
  <div id="app" class="app" >
    <Drawer class="app__drawer"
      :class="openDrawer ? 'app__drawer_opened' : ''"
      :navs="$options.navs"
      :openDrawer="openDrawer"
      @click-menu-btn="openDrawer=!openDrawer" />
    <Header class="app__header" :navs="$options.navs" />
    <router-view class="app__page" />
  </div>
</template>

<script>
import Drawer from './components/Drawer.vue'
import Header from './components/Header.vue'

export default {
  name: 'App',
  components: {
    Drawer,
    Header
  },
  data () {
    return {
      openDrawer: false
    }
  },
  navs: [
    {
      icon: 'catalog.svg',
      text: 'Каталог',
      to: '/'
    },
    {
      icon: 'health.svg',
      text: 'Здоровье',
      to: '/health'
    },
    {
      icon: 'heart.svg',
      text: 'Красота',
      to: '/beauty'
    },
    {
      icon: 'cat.svg',
      text: 'Развлечения',
      to: '/fun'
    },
    {
      icon: 'car.svg',
      text: 'Авто',
      to: '/car'
    }
  ]
}
</script>

<style lang="scss">
html, body {
  margin: 0;
  height: 100%;
}

.app {
  display: grid;
  min-height: 100%;
  grid-template-rows: 200px auto;
  grid-template-columns: 240px 1fr;
  grid-template-areas: 
            "d h"
            "d p";

  @media (max-width: 1024px) {
    grid-template-columns: 104px 1fr;
  }

  @media (max-width: 450px) {
    grid-template-columns: 12px 1fr;
  }

  &__drawer {
    grid-area: d;
    background-color: #F3F4F9;
    position: relative;
    width: 240px;
    height: 100%;

    @media (max-width: 1024px) {
      width: 104px;
      transition: width 0.5s ease-in-out;
    }

    @media (max-width: 450px) {
      width: 12px;
    }

    &_opened {
      position: fixed;
      top: -8px;
      width: 246px;
      transition: width 0.5s ease-in-out;
    
      @media (max-width: 450px) {
        width: 192px;
      }
    }
  }

  &__header {
    grid-area: h;
    border-bottom: solid 1px #E5E5E5;
    background-color: #FFFFFF;
  }

  &__page {
    grid-area: p;
    background-color: #FAFAFA;
  }
}

@font-face {
  font-family: "Poppins";
  src: url("./fonts/Poppins-SemiBold.ttf");
  font-weight: 500;
	font-style: normal;
}

@font-face {
  font-family: "Roboto";
  src: url("./fonts/Roboto-Bold.ttf");
  font-weight: bold;
	font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: url("./fonts/OpenSans-Bold.ttf");
  font-weight: 600;
	font-style: normal;
}

@font-face {
  font-family: "Open Sans";
  src: url("./fonts/OpenSans-Regular.ttf");
  font-weight: normal;
	font-style: normal;
}

</style>
