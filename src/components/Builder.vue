<template>
  <div class="builder">
    <h1>{{ $t('message.builder') }}</h1>
    <md-autocomplete v-model="selectedSet" :md-options="sets" v-on:md-selected="getSetData">
      <label>{{ $t('message.search') }}</label>
      <template slot="md-autocomplete-item" slot-scope="{ item, term }">
        <md-highlight-text :md-term="term">{{ item }}</md-highlight-text>
      </template>
      <template slot="md-autocomplete-empty" slot-scope="{ term }">
        No sets matching "{{ term }}" were found.
      </template>
    </md-autocomplete>
    <CardList :cards="cards" />
  </div>
</template>

<script>
import axios from 'axios';
import setAbbrIndex from '@/assets/precious-data/data/setAbbrIndex.json';
import CardList from './CardList'
export default {
  name: 'Builder',
  components: {
    CardList
  },
  data: () => ({
    selectedSet: '',
    selectedSets: [],
    cards: []
  }),
  computed: {
    sets () {
      return setAbbrIndex.map((sa) => sa.setAbbr);
    }
  },
  methods: {
    getSetData () {
      return axios({
        method: 'GET',
        url: `/api/v1/setAbbr/${this.selectedSet}`
      }).then((res) => {
        this.cards = res.data;
      })
    }
  }
}
</script>

<style scoped>
</style>
