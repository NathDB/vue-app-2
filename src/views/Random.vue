<template>
  <div class="random container d-flex justify-content-center">
    <h1>cououcuu</h1>
    <p>A venir...</p>

  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'Random',
  data(){
    return {
      cocktail_random:[],
    }
  },
  beforeCreate() {
    axios
        .get('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(res => {
          this.cocktails = res.data.drinks
          console.log(res.data.drinks)
        })
        .catch((e) => {
          this.error = "Erreur lors de la récupération des données.";
        });
  }
}


</script>
