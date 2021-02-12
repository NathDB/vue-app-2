import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Import Bootstrap an BootstrapVue CSS files (order is important)
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

//importation du module pour utilisation de l'API Google Maps
import * as VueGoogleMaps from "vue2-google-maps";


// Make BootstrapVue available throughout your project
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

//Connexion à l'API et utilisation de la librairie Places
Vue.use(VueGoogleMaps, {
  load: {
    key: "AIzaSyBqd-wFOtpvWaLwrjih3DbeP-thR0Em_0k", //obtention de la clé via Google Cloud Platform
    libraries: "places" // necessary for places input
  }
});

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')



