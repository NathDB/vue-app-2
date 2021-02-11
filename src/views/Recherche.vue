<template>
  <div class="recherche container d-flex p-2 justify-content-center ">
    <div class="d-flex flex-column">
    <div class="d-flex justify-content-center flex-column">
      <h1 class="text-center m-5">CO'DRINKS</h1>
      <b-row class="m-5 justify-content-center">
        <b-col sm="10" class="d-flex d-inline">
<!--          Display détermine un statut au niveau de l'affichage des objets : true ou false-->
          <b-form-input @click="display = false" v-model.lazy="saisie" id="saisie" size="lg" placeholder="Une petite soif ?"></b-form-input>
          <b-button type="submit" @click="rechercher" variant="primary">OK</b-button>
        </b-col>
      </b-row>
    </div>
<!--      Affichage du component Cocktails qui affichera les résultats de la recherche utilisateur-->
    <Cocktails v-if="display" :searchString="cocktail" />
    </div>
  </div>
</template>

<script>
// @ is an alias to /src

import Cocktails from "@/components/Cocktails";
export default {
  name: 'Recherche',
  components: {
    Cocktails
  },
  data(){
    return{
      saisie:"",
      cocktail:"",
      favoris:[],
      display: false
    }
  },
  methods: {
    rechercher() {
      this.cocktail = this.saisie
      this.display = true
    }
  }
}


</script>
