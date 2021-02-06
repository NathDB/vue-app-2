<template>
  <div class="favoris">
    <h1>This is an about page</h1>
    <Cocktails/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cocktails from '@/components/Cocktails.vue'

export default {
  name: 'Favoris',
  components: {
    Cocktails
  }
}


</script>
