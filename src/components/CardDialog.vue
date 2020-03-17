<template>
  <div class="card-dialog">
    <md-dialog :md-active.sync="show">
      <md-dialog-title>Card Detail</md-dialog-title>
          <Card
            :name="card.name"
            :rarity="card.rarity"
            :setName="card.setName"
            :type="card.type"
            :usageCost="card.usageCost"
            :outbreakCost="card.outbreakCost"
            :color="card.color"
            :characteristic="card.characteristic"
            :ap="card.ap"
            :dp="card.dp"
            :parallel="card.parallel"
            :text="card.text"
            :flavor="card.flavor"
            :image="card.image"
            :url="card.url"
            :setAbbr="card.setAbbr"
            :release="card.release"
            :number="card.number"
            :num="card.num"
            :variation="card.variation"
            :id="card.id"
          ></Card>

      <md-dialog-actions>
        <md-button class="md-primary" @click="hideDialog">Close</md-button>
        <md-button class="md-primary" @click="hideDialog">Save</md-button>
      </md-dialog-actions>
    </md-dialog>

    <md-button class="md-primary md-raised" @click="showDialog">Show Dialog</md-button>
  </div>
</template>

<script>
import Card from './Card';
export default {
  name: 'CardDialog',
  components: {
    Card
  },
  props: {
    card: Object,
    show: Boolean,
    hideDialog: Function,
    showDialog: Function
  },
  data () {
    return {
    }
  },
  computed: {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
