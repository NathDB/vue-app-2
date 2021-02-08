<template>
  <!--ICI METTRE LE BOARD DES COCKTAILS-->
  <div class="cocktails">
    <div class="container d-flex p-2 justify-content-center">
      <h1>{{searchString}}</h1>
      <div class="justify-content-center d-flex">
        <b-card-group deck class="d-flex justify-content-center m-2 flex-md-wrap">
          <div v-for="cocktail in filteredCocktails">
            <b-card
                v-bind:title="cocktail.strDrink"
                v-bind:src="cocktail.strDrinkThumb"
                img-alt="Image"
                img-top
                tag="cocktail"
                style="max-width: 20rem;"
                class="mb-2 d-flex"
            >
              <b-button v-b-modal.modal variant="primary" data-toggle="modal" data-target="#exampleModal" v-on:click="toggleDetails(cocktail)">Show details</b-button>
              <b-button href="#" class="m-1" variant="danger" data-toggle="button"><b-icon-heart></b-icon-heart></b-button>
            </b-card>
          </div>
        </b-card-group>
      </div>
    </div>
    <b-modal id="modal" v-bind:title="cocktail_details.strDrink">
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
    </b-modal>
  </div>



</template>

<script>
import axios from "axios";

export default {
  name: "Cocktails",
    props: {
      searchString: String,
      typeAlcool: Number,
    },
    data() {
      return {
        cocktails: [],
        cocktail_details: [],
      }
    },
    beforeCreate() {
    //if saisie nulle alors requete sur les alcools
      //else requête saisie
      console.log(this.searchString) //erreur : undefined
      axios
          .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.searchString)
          .then(res => {
            this.cocktails = res.data.drinks
            console.log(res.data.drinks)
          })
    },
    computed: {
      filteredCocktails: function () {
        let cocktails_array = this.cocktails,
            searchString = this.searchString;

        if(!searchString){
          return cocktails_array;
        }

        searchString = searchString.trim().toLowerCase();

        cocktails_array = cocktails_array.filter(function(item){
          if(item.strDrink.toLowerCase().indexOf(searchString) !== -1){
            return item;
          }
        })

        return cocktails_array;
      }
    },
    methods: {
      toggleDetails: function(c){
        let id = c.idDrink;
        console.log(id);
        axios
            .get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=' + id)
            .then(res => {
              this.cocktail_details = res.data.drinks[0]
              console.log(c.idDrink)
              console.log(res.data.drinks[0])
            })
      },
    }
}
</script>