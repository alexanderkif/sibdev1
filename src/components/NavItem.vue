<template>
  <router-link class="nav" :to="to" exact>
    <div class="nav__wrapper" :class="!openDrawer ? 'nav__wrapper_off' : ''">
      <img class="nav__svg" :src="require(`@/assets/${icon}`)" />
      <div class="nav__text" :class="openDrawer ? 'nav__text_opened' : ''" >{{ text }}</div>
    </div>
  </router-link>
</template>

<script>
export default {
  name: "NavItem",
  props: {
    to: String,
    text: String,
    icon: String,
    openDrawer: Boolean
  }
}
</script>

<style lang="scss">
.nav {
  width: 100%;
  height: 64px;
  display: flex;
  align-items: center;
  color: #333333;
  text-decoration: none;

  &__wrapper {
    height: 24px;
    padding-left: 40px;
    display: flex;
    align-items: center;
    transition: display 0.5s ease-in-out 0.5s;
    
    &_off {
      @media (max-width: 450px) {
        display: none;
      }
    }
  }

  &__svg {
    @media (max-width: 450px) {
      display: none;
    }
  }

  &__text {
    padding-left: 12px;
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 22px;

    @media (max-width: 1024px) {
      display: none;
      transition: display 0.5s ease-in-out 0.5s;
    
      &_opened {
        display: block;
        transition: display 0.5s ease-in-out 0.5s;
      }
    }
  }

  &:hover {
    background-color: #F0F1F6;
  }
  
  &.router-link-active {
    .nav {

      &__wrapper {
        border-left: 2px solid #34ABE0;
        padding-left: 38px;
      }

      &__svg {
        filter: invert(70%) sepia(59%) saturate(3460%) hue-rotate(167deg) brightness(94%) contrast(86%);
      }

      &__text {
        color: #34ABE0;
      }
    }
  }

}


  

</style>
