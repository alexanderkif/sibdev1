<template>
  <div class="beauty" >
    <Card
      v-for="card in cards"
      :key="card.index"
      :card="card"
      class="beauty__item"
    />
  </div>
</template>

<script>
import Card from '../components/Card'
import { cards } from '../cards.json'

export default {
  name: 'Beauty',
  components: {
    Card
  },
  data () {
    return {
      cards: cards
    }
  }
}
</script>

<style lang="scss">
.beauty {
  display: flex;
  padding: 40px 20px 0 0;
  align-items: flex-start;
  justify-content: center;
  font-family: 'Open Sans';
  font-style: normal;
  display: flex;
  flex-wrap: wrap;

  &__item {
    margin-left: 20px;
    margin-bottom: 20px;
  }
}
</style>
