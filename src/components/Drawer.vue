<template>
  <div class="drawer">
    <img class="drawer__btn"
      :class="openDrawer ? 'drawer__btn_opened' : ''"
      @click="$emit('click-menu-btn')"
      :src="openDrawer
      ? require('@/assets/menu-close.svg')
      : require('@/assets/menu-open.svg')"
      alt="menu" >
    <Logo class="drawer__logo" :openDrawer="openDrawer" />
    <div
      class="drawer__links"
      v-for="nav in navs"
      :key="nav.index"
    >
      <NavItem :to="nav.to" :text="nav.text" :icon="nav.icon" :openDrawer="openDrawer" />
    </div>
  </div>
</template>

<script>
import Logo from './Logo'
import NavItem from './NavItem'

export default {
  name: 'Drawer',
  components: {
    Logo,
    NavItem
  },
  props: {
    openDrawer: Boolean,
    navs: Array
  }
}
</script>

<style lang="scss">
.drawer {
  z-index: 100;

  &__btn {
    display: none;
    position: absolute;
    top: 0;

    @media (max-width: 1024px) {
      display: block;
      left: 104px;
    }

    @media (max-width: 450px) {
      left: 12px;
    }

    &_opened {
      left: 246px;
    
      @media (max-width: 450px) {
        left: 192px;
      }
    }
  }
}
</style>
