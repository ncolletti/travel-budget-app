<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          State is here!
        </h1>
        <p class="subheading font-weight-regular">

        </p>
      </v-flex>


      <!-- <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Welcome to Vuetify
        </h1>
        <p class="subheading font-weight-regular">
          For help and collaboration with other Vuetify developers,
          <br>please join our online
          <a href="https://community.vuetifyjs.com" target="_blank">Discord Community</a>
        </p>
      </v-flex> -->

    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'HelloWorld',
  mounted() {
    console.log(this.$store.state.users);
  },
});
</script>
