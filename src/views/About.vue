<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Cocktails/>
  </div>
</template>

<script>
// @ is an alias to /src
import Cocktails from '@/components/Cocktails.vue'

export default {
  name: 'About',
  components: {
    Cocktails
  }
}


</script>
