<template>
  <div class="card-list">
    <md-table v-model="cards" md-sort="name" md-sort-order="asc" md-card md-fixed-header>
      <md-table-toolbar>
        <div class="md-toolbar-section-start">
          <h1 class="md-title">Cards</h1>
        </div>

        <md-field md-clearable class="md-toolbar-section-end">
          <md-input placeholder="Search by name..." v-model="search" @input="searchOnTable" />
        </md-field>
      </md-table-toolbar>

      <md-table-empty-state
        md-label="No cards found"
        :md-description="`No card found for query '${search}'. Try a different search term.`">
      </md-table-empty-state>

      <md-table-row slot="md-table-row" slot-scope="{ item }" @click="selectCardAndOpenDialog(item)">
        <md-table-cell md-label="ID" md-sort-by="id" md-numeric>{{ item.id }}</md-table-cell>
        <md-table-cell md-label="Name" md-sort-by="name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Type" md-sort-by="type">{{ item.type }}</md-table-cell>
      </md-table-row>
    </md-table>
    <CardDialog :show="show" :showDialog="showDialog" :hideDialog="hideDialog" :card="selectedCard"/>
  </div>
</template>

<script>
const toLower = text => {
  return text.toString().toLowerCase()
}
const searchByName = (items, term) => {
  if (term) {
    return items.filter(item => toLower(item.name).includes(toLower(term)))
  }

  return items
}
import CardDialog from './CardDialog';
export default {
  name: 'CardList',
  components: {
    CardDialog
  },
  props: {
    cards: Array
  },
  data () {
    return {
      search: '',
      searched: [],
      selectedCard: {},
      show: false
    }
  },
  computed: {

  },
  methods: {
    selectCardAndOpenDialog (card) {
      this.selectedCard = card;
      this.showDialog();
    },
    showDialog () {
      this.show = true;
    },
    hideDialog () {
      this.show = false;
    },
    searchOnTable () {
      this.searched = searchByName(this.users, this.search)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
