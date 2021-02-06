<template>
  <div id="app">
    <google-map />
<!--    <div id="nav">
      <b-navbar toggleable="lg" type="dark" variant="info">
        <b-navbar-brand href="#">
          <div>
            <img src="public/img/icons/logo_navbar.png" rounded="true"  alt="Logo">
          </div>
        </b-navbar-brand>

        <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

        <b-collapse id="nav-collapse" is-nav>
          <b-navbar-nav class="right">
            &lt;!&ndash; v-bind récupère les routes déclarées dans router/index.js&ndash;&gt;
            <b-nav-item v-bind:to="'/'">Accueil</b-nav-item>
            <b-nav-item v-bind:to="'/favoris'">Favoris</b-nav-item>
            <b-nav-item v-bind:to="'/trouver-un-bar'">Trouver un bar</b-nav-item>
            <b-avatar></b-avatar>
          </b-navbar-nav>
        </b-collapse>
      </b-navbar>

    </div>
    &lt;!&ndash; Nécessaire pour afficher le contenu des routes&ndash;&gt;
    <router-view/>-->
  </div>
</template>

<script>
import GoogleMap from "./components/GoogleMap.vue";

export default {
  name: "App",
  components: {
    GoogleMap
  }
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Acme&display=swap');
{
  font-family: 'Acme', sans-serif;
}
</style>

