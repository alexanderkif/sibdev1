<template>
  <div class="card">
    <img :src="require(`@/assets/${card.img}.svg`)" class="card__img" />
    <div class="card__top">
      <div class="card__title">{{ card.title }}</div>
      <div class="card__subtitle">{{ card.subtitle }}</div>
    </div>
    <div class="card__bottom">
      <div class="card__promo">{{ card.promo }}</div>
      <div class="card__text">{{ card.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: Object
  }
}
</script>

<style lang="scss">
.card {
  border-radius: 10px;
  width: 347px;
  height: 161px;
  background: #FFFFFF;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.15);
  position: relative;
  display: flex;
  justify-content: flex-end;
  border: 1px solid #FFFFFF;
  cursor: pointer;

  @media (max-width: 1024px) {
    width: 296px;
    height: 144px;
  }

  @media (max-width: 320px) {
    width: 268px;
    height: 130px;
  }

  &:hover {
    border: 1px solid #DF212D;
    &:before,
    &:after {
      border-top: 1px solid #DF212D;
      border-left: 1px solid #DF212D;
    }
  }

  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 12px;
    height: 12px;
    top: calc(50% - 12px/2);
    background: #FAFAFA;
    border-radius: 1px;
    box-shadow: inset 4px 4px 6px -3px rgba(50, 50, 50, 0.15);
  }
  &:before {
    left: -7px;
    transform: rotate(135deg);
  }
  &:after {
    right: -7px;
    transform: rotate(-45deg);
  }

  &__img {
    height: inherit;
    border-radius: inherit;
  }

  &__top {
    position: absolute;
    height: 36px;
    left: 20px;
    right: 20px;
    top: 16px;
    display: flex;
    flex-wrap: wrap;
  }

  &__title {
    align-self: flex-start;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #000000;
  }

  &__subtitle {
    align-self: flex-end;
    width: 100%;
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    color: #000000;
    opacity: 0.5;
  }

  &__bottom {
    position: absolute;
    height: 50px;
    left: 20px;
    right: 131px;
    bottom: 16px;
  }

  &__promo {
    font-family: Roboto;
    font-style: normal;
    font-weight: 500;
    font-size: 36px;
    line-height: 28px;
    color: #DF212D;
  }

  &__text {
    font-family: Roboto;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 16px;
    letter-spacing: 0.4em;
    text-transform: uppercase;
    color: #000000;
    opacity: 0.5;
  }
}
</style>
