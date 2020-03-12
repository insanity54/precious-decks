<template>
  <div class="builder">
    <h1>{{ $t('message.builder') }}</h1>
    <p>@TODO a list of all cards in sets</p>
    <md-field>
      <label for="sets">{{ $t('message.setsHeading') }}</label>
      <md-select v-model="selectedSets" name="setsSelect" id="setsSelect" multiple @md-selected="clickSet(selectedSets)">
        <!-- <md-option v-for="(set, i) in sets" :key="i" :value="set" @click="clickSet(set)">{{ $t(`message.sets.${set}`) }}</md-option> -->
        <md-option v-for="(set, i) in sets" :key="i" :value="set">{{ set }}</md-option>
      </md-select>
    </md-field>
    <p>{{ sets.length }} Sets</p>
    <p>Selected Sets: {{ selectedSets }}</p>
    <Card v-for="(card, i) in cards" :key="i"></Card>
  </div>
</template>

<script>
import axios from 'axios';
import setAbbrIndex from '@/assets/precious-data/data/setAbbrIndex.json';
export default {
  name: 'Builder',
  data: () => ({
    selectedSets: [],
    cards: []
  }),
  computed: {
    sets () {
      return setAbbrIndex.map((sa) => sa.setAbbr);
    }
  },
  methods: {
    clickSet (selectedSets) {
      console.log('fukko '+selectedSets)
      return axios({
        method: 'GET',
        url: `/api/v1/setAbbr/${selectedSets}`
      });
    }
  }
}
</script>

<style scoped>
</style>
