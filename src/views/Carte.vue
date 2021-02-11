<template>
  <div class="carte">
    <GoogleMap />
<!--
    <h1>Trouver une carte</h1>
    <b-button @click="locatorButtonPressed">
      <b-icon-circle></b-icon-circle>
    </b-button>
    <div class="ui grid">
      <div class="six wide column">
        <form class="ui segment large form">
          <div class="ui segment">
            <div class="field">
              <div class="ui right icon input large">
                &lt;!&ndash;coordinates correspond aux coordonnées saisies par l’uti&ndash;&gt;
                <input type="text" placeholder="Enter your address" v-model="coordinates" />
                &lt;!&ndash;locatorButtonPressed est relié à un event JS&ndash;&gt;
                <i class="dot circle link icon" @click="locatorButtonPressed"></i>
              </div>
            </div>
            <div class="field">
              <div class="two fields">
                <div class="field">
                  <select v-model="type">
                    <option value="restaurant">Restaurant</option>
                  </select>
                </div>
                <div class="field">
                  <select v-model="radius">
                    <option value="5">5 KM</option>
                    <option value="10">10 KM</option>
                    <option value="15">15 KM</option>
                    <option value="20">20 KM</option>
                  </select>
                </div>
              </div>
            </div>
            <b-button class="ui button" @click="findCloseBuyButtonPressed">Find CloseBuy</b-button>
          </div>
        </form>
      </div>
      <div class="ten wide column segment ui" ref="map"></div>
    </div>
-->


  </div>
</template>
<script>
import GoogleMap from "../components/GoogleMap.vue";

export default {
  name: "Carte",
  components: {
    GoogleMap
  }
};
</script>

<!--
<script>

import axios from "axios";
import { Loader } from "@googlemaps/js-api-loader"
import Cocktails from "@/components/Cocktails";
const loader = new Loader({
  apiKey: "AIzaSyBqd-wFOtpvWaLwrjih3DbeP-thR0Em_0k",
  version: "weekly",
});
loader.load().then(() => {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
});
export default {
  name:"Carte",
  data() {
    return {
      lat: 0,
      lng: 0,
      type: "",
      radius: "",
      places: [],

    };

  },
  computed: {
    coordinates() {
      return `${this.lat}, ${this.lng}`;
    }
  },

  methods: {

    //fonction permettant de vérifier que le navigateur supporte la géolocalisation
    locatorButtonPressed() {
      if (navigator.geolocation) {
        console.log("Your browser supports Geolocation API");
        //on demande la géoloc
        navigator.geolocation.getCurrentPosition(
            position => {
              console.log(position.coords.latitude);
              console.log(position.coords.longitude);
            },
            error => {
              console.log(error.message); //"User denied Geolocation"
            }
        );
      } else {
        console.log("Your browser does not support Geolocation API");
      }
    },
    // on utilise ici l’outil Nearby Search Request de Google Places APi afin de récup les lieux les plus proches à partir des coordonnées entrées, du type de lieux (Restaurant) et des radius.
    findCloseBuyButtonPressed() {
      const URL = `https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${
        this.lat
      },${this.lng}&type=${this.type}&radius=${this.radius * 1000}&key=AIzaSyBqd-wFOtpvWaLwrjih3DbeP-thR0Em_0k`;

      axios.get(URL).then(response => {
        this.places = response.data.results;
        this.addLocationsToGoogleMaps();
      }).catch(error => {
        console.log(error.message);
      });
    }

  }
}
</script>
-->
