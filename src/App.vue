<template>
  <div class="page-container">
    <md-app>
      <md-app-toolbar class="md-primary">
        <span class="md-title">{{ $t('message.appTitle') }}</span>
      </md-app-toolbar>

      <md-app-drawer md-permanent="full">
        <md-toolbar class="md-transparent" md-elevation="0">
          {{ $t('message.navigation') }}
        </md-toolbar>

        <md-list>
          <md-list-item to="/decks">
            <md-icon>grid_view</md-icon>
            <span class="md-list-item-text">{{ $t('message.decks') }}</span>
          </md-list-item>

          <md-list-item to="/builder">
            <md-icon>hardware</md-icon>
            <span class="md-list-item-text">{{ $t('message.builder') }}</span>
          </md-list-item>

          <md-list-item to="/tutorial">
            <md-icon>help</md-icon>
            <span class="md-list-item-text">{{ $t('message.tutorial') }}</span>
          </md-list-item>

          <md-divider>
          </md-divider>

          <md-list-item>
            <md-menu md-size="small" md-align-trigger>
              <md-button md-menu-trigger>{{ $t('message.language') }}</md-button>

              <md-menu-content>
                <md-menu-item @click="setLocale('en')">{{ $t('message.english') }}</md-menu-item>
                <md-menu-item @click="setLocale('ja')">{{ $t('message.japanese') }}</md-menu-item>
              </md-menu-content>
            </md-menu>
          </md-list-item>
        </md-list>
      </md-app-drawer>

      <md-app-content>
        <router-view name="content">
        </router-view>

      </md-app-content>
    </md-app>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  components: {
  },
  methods: {
    setLocale(locale) {
      this.$i18n.locale = locale;
    }
  }
}
</script>

<style>

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
