import Vue from 'vue'
import App from './App.vue'
import VueI18n from 'vue-i18n'
import {
  MdButton,
  MdContent,
  MdTabs,
  MdImage,
  MdCard,
  MdApp,
  MdDivider,
  MdLayout,
  MdSnackbar,
  MdToolbar,
  MdIcon,
  MdField,
  MdCheckbox,
  MdMenu,
  MdDrawer,
  MdList,
  MdAvatar,
  MdEmptyState
} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css';
import router from './router';
import store from './store';
import messages from './locales/messages'



Vue.config.productionTip = false
Vue.use(MdButton)
Vue.use(MdContent)
Vue.use(MdTabs)
Vue.use(MdImage)
Vue.use(MdCard)
Vue.use(MdApp)
Vue.use(MdDivider)
Vue.use(MdLayout)
Vue.use(MdSnackbar)
Vue.use(MdToolbar)
Vue.use(MdIcon)
Vue.use(MdField)
Vue.use(MdCheckbox)
Vue.use(MdMenu)
Vue.use(MdDrawer)
Vue.use(MdList)
Vue.use(MdAvatar)
Vue.use(MdEmptyState)
Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en',
  messages
});

new Vue({
  i18n,
  router,
  store,
  render: h => h(App),
}).$mount('#app')
