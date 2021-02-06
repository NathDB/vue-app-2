<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <div>
            <img src="public/img/icons/logo_navbar.png" rounded="true"  alt="Logo">
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="right">
            <!-- v-bind récupère les routes déclarées dans router/index.js-->
            <b-nav-item v-bind:to="'/'">Accueil</b-nav-item>
            <b-nav-item v-bind:to="'/favoris'">Favoris</b-nav-item>
            <b-nav-item v-bind:to="'/trouver-un-bar'">Trouver un bar</b-nav-item>
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
{
  font-family: 'Acme', sans-serif;
}
</style>

