<template>
  <!--ICI METTRE LE BOARD DES COCKTAILS-->
  <div v-if="display" class="cocktails d-flex flex-column">
    <div class="container d-flex p-2 justify-content-center flex-column">
      <h2>Résultats pour : {{searchString}}</h2>
      <div class="justify-content-center d-flex flex-column">
        <b-card-group deck class="d-flex justify-content-center m-2 flex-md-wrap">
          <div v-if="display" v-for="cocktail in filteredCocktails">
            <CocktailDetails :cocktail="cocktail" />
          </div>
        </b-card-group>
      </div>
    </div>

  </div>



</template>

<script>
import axios from "axios";
import CocktailDetails from "@/components/CocktailDetails";

export default {
  name: "Cocktails",
  components: {CocktailDetails},
  props: {
      searchString: String,
      typeAlcool: Number,
    },
    data() {
      return {
        cocktails: [],
        cocktail_details: [],
        display: false
      }
    },
    mounted() {
    //if saisie nulle alors requete sur les alcools :
      //else requête saisie
      console.log(this.searchString) //erreur : undefined
      axios
          //.get('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Rum')
          .get('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + this.searchString)
          .then(res => {
            this.cocktails = res.data.drinks
            this.display = true
            console.log(res.data.drinks)
          })
          .catch((e) => {
            this.error = "Erreur lors de la récupération des données.";
          });
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

    }
}

</script>

