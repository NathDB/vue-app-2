<template>
  <div class="aperette">
    <b-card>
      <b-card-title>{{aperette.nom}}</b-card-title>
      <img class="img-thumbnail" :src="aperette.photo"/>
      <b-button v-if="aperette.recette === true" variant="primary" v-on:click="toggleRecette(aperette)">Voir recette</b-button>
    </b-card>
    <!--    Modal pour recette aperette-->
    <b-modal ref="my-modal" hide-footer v-bind:title="aperette.nom">
      <div class="d-block">
        <p>Ingrédients nécessaires</p>
        <ul v-for="ingredient in ingredients">
          <!--AFFICHAGE DES INGREDIENTS AVEC UNE BOUCLE
              <li v-for="n in 15">
              <p>{{cocktail_details.strIngredient}}{{n}}</p>
          </li>-->
          <li>{{ingredient.nom}}</li>
          <!--<li v-if="!{{cocktail_details.strIngredient7}}">{{cocktail_details.strIngredient7}}</li>-->
        </ul>
      </div>
    </b-modal>
  </div>

</template>

<script>
import axios from "axios";
import FicheCocktail from "@/components/FicheCocktail";
export default {
  name: "Aperette",
  components: {FicheCocktail},
  props: {
    aperette:{},
  },
  data(){
    return{
      aperettes:[],
      ingredients:[],
      listeIngredientsRecette:[],
      display:false,
    }
  },
  methods: {
    //fonction permettant de récupérer les noms des ingredients
    getIngredient(ingredient){
      axios
          .get('http://212.47.254.140:8000/ingredients/' + ingredient )
          .then((response) => {
            this.ingredients.push(response.data)
          })
          .catch(console.error)
    },
    //Affichage des ingredients de l'aperette
    toggleRecette(a) {
      let id = a.id;
      this.ingredients.splice(0) //on vide la liste d'ingredients pour la remettre à jour (et éviter les doublons)
      axios
          .get('http://212.47.254.140:8000/aperettes/' + id)
          .then(res => {
            //on ne récupère que les ingredients de l'aperette
            //et on utilise la fonction getIngredient pour afficher le nom
            res.data.ingredients.map((id) => this.getIngredient(id))
            this.listeIngredientsRecette.value = {
              id: res.data.id,
              nom: res.data.nom,
            };
            console.log('listeIngredients' + this.listeIngredientsRecette.values())
          })
      this.$refs['my-modal'].show()
    },
  }
}
</script>

<style scoped>
</style>
