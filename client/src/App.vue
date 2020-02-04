<template>
  <!-- App.vue -->
<v-app>


  <header app>
    <NavBar />
  </header>

  <!-- Sizes your content based upon application components -->
  <v-content transition="slide-x-transition">
    <!-- Provides the application the proper gutter -->
      <router-view></router-view>
    <!-- </v-container> -->
  </v-content>

  <v-footer app>
    <!-- footer goes here -->
  </v-footer>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';


import NavBar from './components/NavBar.vue';


export default Vue.extend({
  name: 'App',
  components: {
    NavBar,
  },
});
</script>
