<template>
  <div class="accueil container d-flex p-2 justify-content-center">
    <div class="d-flex justify-content-center flex-column">
      <h1 class="text-center m-5">CO'DRINKS</h1>
      <b-row class="m-5 justify-content-center">
        <b-col sm="10">
          <b-form-input id="saisie" size="lg" placeholder="Une petite soif ?"></b-form-input>
        </b-col>
        <b-col class="m-3 d-flex justify-content-center ">
          <b-button class="m-1" size="sm" variant="outline-info">Vodka</b-button>
          <b-button class="m-1" size="sm" variant="outline-info">Rhum</b-button>
          <b-button class="m-1" size="sm" variant="outline-info">Tequila</b-button>
          <b-button class="m-1" size="sm" variant="outline-info">Champagne</b-button>
          <b-button class="m-1" size="sm" variant="outline-info">Gin</b-button>
          <b-button class="m-1" size="sm" variant="outline-info">Whisky</b-button>
        </b-col>
      </b-row>

      <div class="d-flex justify-content-center flex-column bd-highlight m-5">
        <div class="d-flex d-inline justify-content-center m-5">
          <b-button size="lg" class="d-inline">Mes favoris !</b-button>
          <b-button size="lg" class="d-inline">Trouver le bar le plus proche !</b-button>
        </div>

        <p class="text-center">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
          It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
          desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      </div>
      <Cocktails searchString="margarita"/>

    </div>


  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import Cocktails from "@/components/Cocktails";

export default {
  name: 'Accueil',
  components: {
    Cocktails,
    HelloWorld
  }
}

</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@800&display=swap');
h1 {
  font-family: 'Nunito', sans-serif;
}
</style>

