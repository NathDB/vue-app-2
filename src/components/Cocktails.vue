<template>
  <!--ICI METTRE LE BOARD DES COCKTAILS-->
  <div v-if="display" class="cocktails d-flex flex-column">
    <div class="container d-flex p-2 justify-content-center flex-column">
      <h2>Résultats pour : {{searchString}}</h2>
      <div class="justify-content-center d-flex flex-column">
        <b-card-group deck class="d-flex justify-content-center m-2 flex-md-wrap">
          <!--          On affiche une card Cocktail (qui est le component CocktailDetails) pour chaque résultat de la recherche-->
          <div v-if="display" v-for="cocktail in filteredCocktails">
            <!--            On envoie au component CocktailDetails l'objet cocktail qui rassemble toutes les données du cocktail-->
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
    // On fait un nouvel appel API afin d'aller chercher les cocktails qui correspondent à la saisie
    console.log(this.searchString)
    axios
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
    // Fonction de recherche en fonction des caractères saisis
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