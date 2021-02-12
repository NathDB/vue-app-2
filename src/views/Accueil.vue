<template>
  <div class="accueil container d-flex p-2 justify-content-center flex-column">
    <b-col class="m-3 d-flex justify-content-center flex-column ">
      <h1 class="text-center m-5">CO'DRINKS</h1>
      <h2 class="text-center m-5">LES BOISSONS 100% CONNECTEES !</h2>
      <div class="container d-flex flex-column">
        <h3 class="text-center">Que voulez-vous boire ?</h3>
        <div class="d-flex justify-content-center flex-row">
          <b-button class="m-1" variant="outline-info" v-on:click="rechercherParAlcool(alcool[0])">Vodka</b-button>
          <b-button class="m-1" variant="outline-info" v-on:click="rechercherParAlcool(alcool[1])">Rhum</b-button>
          <b-button class="m-1" variant="outline-info" v-on:click="rechercherParAlcool(alcool[2])">Tequila</b-button>
          <b-button class="m-1" variant="outline-info" v-on:click="rechercherParAlcool(alcool[3])">Champagne</b-button>
          <b-button class="m-1" variant="outline-info" v-on:click="rechercherParAlcool(alcool[4])">Gin</b-button>
          <b-button class="m-1" variant="outline-info" v-on:click="rechercherParAlcool(alcool[5])">Whisky</b-button>
        </div>
      </div>

      </b-col>
    <div class="justify-content-center d-flex flex-column">
      <b-card-group deck class="d-flex justify-content-center m-2 flex-md-wrap">
        <div v-if="display" v-for="cocktail in cocktails">
          <CocktailDetails :cocktail="cocktail"/>
        </div>
      </b-card-group>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import CocktailDetails from "@/components/CocktailDetails";
import axios from "axios";

export default {
  name: 'Accueil',
  components: {
    CocktailDetails,
  },
  data(){
    return{
      cocktails:"",
      alcool: ["Vodka", "Rum", "Tequila", "Champagne", "Gin", "Whiskey"]
    }
  },
  methods: {
    rechercherParAlcool(alcool) {
      this.cocktail = alcool
      axios
          .get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=' + alcool)
          .then(res => {
            this.cocktails = res.data.drinks
            this.display = true
            console.log(res.data.drinks)
          })
          .catch((e) => {
            this.error = "Erreur lors de la récupération des données.";
          });    }
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
h1 {
  font-family: 'Nunito', sans-serif;
}
</style>

