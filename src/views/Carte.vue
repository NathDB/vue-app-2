<template>
  <div class="carte">
    <h1>Trouver une carte</h1>
    <GoogleMap />

  </div>
</template>

<script>
import GoogleMap from "../components/GoogleMap.vue";
export default {
  name: "Carte",
  components: {
    GoogleMap
  }
};
</script>
