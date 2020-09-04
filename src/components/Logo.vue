<template>
  <div class="logo">
    <div class="logo__svg" >
      <img src="@/assets/logo.svg" alt="logo">
    </div>
    <div class="logo__svg-small" :class="openDrawer ? 'logo__svg-small_opened' : ''" >
      <img src="@/assets/logo-small.svg" alt="logo">
    </div>
    <div class="logo__text" :class="openDrawer ? 'logo__text_opened' : ''" >BECO</div>
  </div>
</template>

<script>
export default {
  name: "Logo",
  props: {
    openDrawer: Boolean
  }
}
</script>

<style lang="scss">
.logo {
  display: flex;
  align-items: center;
  padding: 40px;

  &__svg {
    @media (max-width: 1024px) {
      display: none;
    }
  }

  &__svg-small {
    display: none;
    @media (max-width: 1024px) and (min-width: 451px) {
      display: block;
    }

    &_opened {
      display: block;
    }
  }

  &__text {
    margin-left: 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    cursor: default;
    color: #333333;
    
    @media (max-width: 1024px) {
      display: none;

      &_opened {
        display: block;
      }
    }
  }
}
</style>
