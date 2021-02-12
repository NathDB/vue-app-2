<template>
  <div class="cocktails">
    <b-card
        v-bind:title="cocktail.strDrink"
        tag="cocktail"
        style="max-width: 20rem;"
        class="mb-2 d-flex"
    >
      <img class="img-thumbnail" :src="cocktail.strDrinkThumb"/>
      <b-button variant="primary" v-on:click="toggleDetails(cocktail)">Show details</b-button>
      <b-button href="#" class="m-1" variant="danger" data-toggle="button" v-on:click="ajouterFavoris(cocktail)"><b-icon-heart></b-icon-heart></b-button>
    </b-card>
<!--    Modal qui affiche les détails du cockatil : le nom, les ingrédients, type de verre et comment le réaliser le cocktail-->
    <b-modal ref="my-modal" hide-footer v-bind:title="cocktail_details.strDrink">
      <div class="d-block">
        <p>{{cocktail_details.strInstructions}}</p>
        <p>Use this kind of glass : {{cocktail_details.strGlass}}</p>
        Ingredients :
        <ul>
          <!--AFFICHAGE DES INGREDIENTS AVEC UNE BOUCLE
              <li v-for="n in 15">
              <p>{{cocktail_details.strIngredient}}{{n}}</p>
          </li>-->
          <li>{{cocktail_details.strIngredient1}}</li>
          <li>{{cocktail_details.strIngredient2}}</li>
          <li>{{cocktail_details.strIngredient3}}</li>
          <li>{{cocktail_details.strIngredient4}}</li>
          <li>{{cocktail_details.strIngredient5}}</li>
          <li>{{cocktail_details.strIngredient6}}</li>
          <!--<li v-if="!{{cocktail_details.strIngredient7}}">{{cocktail_details.strIngredient7}}</li>-->
        </ul>
      </div>
<!--      <b-button class="mt-3" block @click="$bvModal.hide('bv-modal-example')">Close Me</b-button>-->
    </b-modal>
  </div>

</template>

<script>
import axios from "axios";

export default {
  name: "CocktailDetails",
  props: {
    cocktail: {},
    nomCocktail: "",
    imageCocktail: "",
    idCocktail:"",
    fav:""
  },
  data(){
    return{
      cocktail_details:[],
      display:false,
    }
  },
  methods: {
    // On requête l'API pour aller chercher les détails du cocktail sur lequel on a cliqué (en fct de son id)
    toggleDetails(c){
      console.log(c)
      let id = c.idDrink;
      console.log(id);
      axios
          .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
          .then(res => {
            console.log("cocktail :" + this.cocktail)
            this.cocktail_details = res.data.drinks[0]
            this.display = true
            console.log(c.idDrink)
            console.log(res.data.drinks[0])
          })
      this.$refs['my-modal'].show()
    },
    // Amélioration possible : en cours...
    ajouterFavoris(fav) {
      this.$emit("ajouter-favoris", fav)
      console.log(this.listeFavoris);

    },
  }
}
</script>

<style scoped>

</style>