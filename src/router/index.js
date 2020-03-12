import App from '@/App';
import Builder from '@/components/Builder';
import Tutorial from '@/components/Tutorial';
import Deck from '@/components/Deck';
import Home from '@/components/Home';
// import Decks from '@/components/Decks';
import Router from 'vue-router';
import Vue from 'vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [{
    path: '/',
    components: {
      default: App,
      content: Home
    }
  }, {
    path: '/builder',
    components: {
      default: App,
      content: Builder
    }
  }, {
    path: '/deck/:id',
    components: {
      default: App,
      content: Deck
    },
    props: {
      rightPanel: true
    }
  }, {
    path: '/tutorial',
    components: {
      default: App,
      content: Tutorial
    }
  }]
});
