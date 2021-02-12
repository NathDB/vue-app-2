<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info" class="bg-dark">
        <b-navbar-brand href="">
          <img alt="CO'DRINKS Logo" src="./assets/logo_navbar.png" class="w-50 p-3">
        </b-navbar-brand>
        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav>
            <!-- v-bind récupère les routes déclarées dans router/index.js-->
            <b-nav-item v-bind:to="'/'">Accueil</b-nav-item>
            <b-nav-item v-bind:to="'/recherche'">Rechercher</b-nav-item>
            <b-nav-item v-bind:to="'/favoris'">Favoris</b-nav-item>
            <b-nav-item v-bind:to="'/random'">Random !</b-nav-item>
<!--            <b-nav-item v-bind:to="'/trouver-un-bar'">Trouver un bar</b-nav-item>-->
            <b-avatar></b-avatar>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    </div>
    <!-- Nécessaire pour afficher le contenu des routes-->
    <router-view/>
  </div>
</template>


<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
h1, h2{
  font-family: 'Acme', sans-serif;
}
</style>

