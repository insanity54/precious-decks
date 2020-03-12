<template>
  <div class="card">
    <md-card>
      <md-card-header>
        <md-card-header-text>
          <div class="md-title">Media card</div>
          <div class="md-subhead">Big size</div>
        </md-card-header-text>

        <md-card-media md-big>
          <img :src="cardImage" alt="P-Memories card {{ cardImageName }}">
        </md-card-media>
      </md-card-header>

      <md-card-actions>
        <md-button>Action</md-button>
        <md-button>Action</md-button>
      </md-card-actions>
    </md-card>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    set: {
      type: String,
      default: 'HMK'
    },
    release: {
      type: String,
      default: '01'
    },
    number: {
      type: String,
      default: '001'
    }
  },
  computed: {
    cardImageName () {
      return `${this.set}_${this.release}-${this.number}.jpg`;
    },
    cardImage () {
      return `/precious-data/data/${this.set}/${this.release}/${this.cardImageName}`;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
