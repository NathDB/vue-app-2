<template>
  <div className="favoris container d-flex justify-content-center p-2 flex-column">
    <h1 className="text-center m-5">Mes cocktails favoris</h1>
    <p>A venir...</p>
    <div>
      <b-list-group v-for="favori in listeFavoris">
        <b-list-group-item className="d-flex justify-content-between">
          {{ listeFavoris }}
          <b-button variant="danger" v-on:click="supprimerFavoris(favori)">Supprimer</b-button>
        </b-list-group-item>
      </b-list-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Cocktails from '@/components/Cocktails.vue'
import axios from "axios";

export default {
  name: 'Favoris',
  components: {
    Cocktails
  },
  data() {
    return {
      listeFavoris: [],
    }
  },
  methods: {
    ajouterFavoris(fav) {
      //ajout du cocktail c à la liste de favoris
      this.listeFavoris.push(fav)
      console.log(this.listeFavoris);
    },
    supprimerFavoris(fav) {
      //supprime un cocktail fav de la liste de favoris : fav est l'objet et 1 est le nombre d'objet supprimé
      this.listeFavoris.splice(fav, 1)
      console.log(this.listeFavoris);
    }
  }
}
</script>