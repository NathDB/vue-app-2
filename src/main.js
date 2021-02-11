import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
import 'leaflet/dist/leaflet.css';

import * as VueGoogleMaps from "vue2-google-maps";
import VueGoogleMap from 'vuejs-google-maps'

// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

Vue.component('l-map', LMap);
Vue.component('l-tile-layer', LTileLayer);
Vue.component('l-marker', LMarker);

Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBqd-wFOtpvWaLwrjih3DbeP-thR0Em_0k",
    libraries: "places" // necessary for places input
  }
});
Vue.use(VueGoogleMap, {
  load: {
    apiKey: 'AIzaSyBqd-wFOtpvWaLwrjih3DbeP-thR0Em_0k',
    libraries: ['places']// necessary for places input
  }
});
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



