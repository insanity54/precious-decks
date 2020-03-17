<template>
  <div class="card">
    <md-card md-theme="green-card">
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">{{ name }}</div>
          <div class="md-subhead">{{ type }}</div>
          <p>{{ text }}</p>
        </md-card-header-text>

        <md-card-media md-big>
          <img :src="localCardImage" :alt="cardImageAlt">
        </md-card-media>
      </md-card-header>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    rarity: String,
    setName: String,
    name: String,
    type: String,
    usageCost: String,
    outbreakCost: String,
    color: String,
    characterisstic: String,
    ap: String,
    dp: String,
    parallel: String,
    text: String,
    flavor: String,
    image: String,
    url: String,
    setAbbr: String,
    release: String,
    number: String,
    num: String,
    variation: String,
    id: String
  },
  computed: {
    cardImageName () {
      return `${this.set}_${this.release}-${this.number}.jpg`;
    },
    cardImageAlt () {
      return `P-Memories card ${this.cardImageName}`;
    },
    localCardImage () {
      return `/data/${this.setAbbr}/${this.release}/${this.id}.jpg`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .md-card {
    width: 320px;
    margin: 4px;
    display: inline-block;
    vertical-align: top;
  }
</style>
