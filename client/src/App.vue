<template>
  <!-- App.vue -->
<v-app>
  <v-app-bar app color="grey"
            dense
            dark
            >
    <!-- nav bar goes here-->
    <router-link to="/login">Login</router-link>
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-content>
    <!-- Provides the application the proper gutter -->
    <v-container fluid>
      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-content>

  <v-footer app>
    <!-- footer goes here -->
  </v-footer>
</v-app>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'App',

  components: {
  },

  data: () => ({
    //
  }),
});
</script>
