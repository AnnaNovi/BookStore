import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import store from './store';
import VueGoogleMaps from '@fawmi/vue-google-maps';
import { MAP_KEY } from './values';

createApp(App).use(store).use(router).use(VueGoogleMaps, {
  load: {
    key: MAP_KEY,
  },
}).mount('#app')
