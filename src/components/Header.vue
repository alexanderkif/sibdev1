<template>
  <div class="header">
    <div class="header__title">
      {{ navs.filter(n => n.to === $route.path)[0].text }}
    </div>
    <div class="header__search">
      <img src="@/assets/search.svg" />
      <input class="header__input" type="text" placeholder="Какой магазин вам нужен?" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: {
    navs: Array
  }
}
</script>

<style lang="scss" scoped>
.header {
  padding: 30px 60px;
  font-family: 'Open Sans';
  font-style: normal;
  font-weight: 600;
  font-size: 28px;
  line-height: 38px;
  color: #000000;
  position: sticky;
  position: -webkit-sticky;
  top: -90px;
  z-index: 50;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;

  @media (max-width: 1024px) {
    padding: 20px 20px;
    top: -110px;
  }

  &__title {
    margin-bottom: 30px;
    width: 100%;

    @media (max-width: 1024px) {
      text-align: right;
    }
  }

  &__search {
    border: 1px solid rgba(51, 51, 51, 0.2);
    box-sizing: border-box;
    border-radius: 50px;
    padding: 0 16px;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
  }

  &__input {
    font-family: 'Open Sans';
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 28px;
    margin-left: 8px;
    width: 100%;
    border: 0;
    outline: none;
    color: rgba(0, 0, 0, 0.45);

    @media (max-width: 320px) {
      font-size: 14px;
    }
  }
}
</style>
