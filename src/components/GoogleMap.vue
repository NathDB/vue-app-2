<template>
  <div class="carte container d-flex justify-content-center flex-column">
    <div>
      <h2 class="text-center m-5">Recherche et ajoute un bar à ta liste !</h2>
      <label>
        <gmap-autocomplete
            @place_changed="setPlace">
        </gmap-autocomplete>
        <button @click="addMarker">Add</button>
      </label>
    </div>
    <gmap-map
        :center="center"
        :zoom="12"
        style="width:100%;  height: 400px;"
    >
      <gmap-marker
          :key="index"
          v-for="(m, index) in markers"
          :position="m.position"
          @click="center=m.position"
      ></gmap-marker>
    </gmap-map>
    <div class="d-flex justify-content-center p-2 flex-column">
      <h1 class="text-center m-5">Mes bars favoris</h1>
      <div class="d-flex justify-content-center p-2 d-inline">
        <b-card-group v-for="bar in listeBars">
          <b-card tag="bar" style="max-width: 20rem;" class="m-3 d-flex justify-content-center">
            <b-card-title class="text-center">{{bar.name}}</b-card-title>
            <p v-if="bar.opening_hours['open_now'] = true " class="danger">Fermé</p>
            <p v-else class="succes">Ouvert en ce moment</p>
            <img class="img-thumbnail justify-content-center" :src="bar.icon"/>
            <p>{{bar.international_phone_number}}</p>
            <p>Commentaire rédigé par : {{bar.reviews[0]['author_name']}}</p>
            <p class="font-italic">{{bar.reviews[0]['relative_time_description']}}</p>
            <p>"{{bar.reviews[0]['text']}}"</p>
            <!--            <b-button v-b-modal.modal-scrollable variant="primary" v-on:click="toggleComments(bar)">Voir les commentaires</b-button>-->
          </b-card>
        </b-card-group>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoogleMap",
  data() {
    return {
      // Par défaut, la map est centrée sur la ville de Nantes
      center: { lat: 47.218, lng: -1.553 },
      markers: [],
      places: [],
      currentPlace: null,
      listeBars:[],
      comments:[]
    };
  },
  // Géolocalisation automatique de l'utilisateur après compilation du code
  mounted() {
    this.geolocate();
  },
  methods: {
    // Fonction permettant de récupérer la saisie utilisateur via le component gmap-autocomplete
    // (component du module qui utilise la fonction Autocomplete de l'API Google Maps)
    setPlace(place) {
      this.currentPlace = place;
    },
    // Fonction permettant d'ajouter une épingle rouge lorsque l'utilisateur cherche et ajoute un bar
    addMarker() {
      if (this.currentPlace) {
        const marker = {
          lat: this.currentPlace.geometry.location.lat(),
          lng: this.currentPlace.geometry.location.lng()
        };
        this.markers.push({ position: marker });
        this.places.push(this.currentPlace);
        this.listeBars.push(this.currentPlace);
        this.center = marker;
        this.currentPlace = null;
      }
    },
    //Géolocalision de l'utilisateur : situe la position de l'utilisateur et centre la map sur sa position
    geolocate: function() {
      navigator.geolocation.getCurrentPosition(position => {
        this.center = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
      });
    }
    /*const app = new Vue({
      el: '#app',
      data: {
        name: ''
      },
      mounted() {
        if (localStorage.name) {
          this.name = localStorage.name;
        }
      },
      watch: {
        name(newName) {
          localStorage.name = newName;
        }
      }*/
  }
};
</script>