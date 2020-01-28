<template>
  <v-container>
    <v-layout
      text-center
      wrap
    >
    <v-flex mb-4>
        <h1 class="display-2 font-weight-bold mb-3">
          Login here
        </h1>
        <p class="subheading font-weight-regular">
          User name
        </p>
        <p class="subheading font-weight-regular">
          Password
        </p>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  mounted() {
    console.log('hello from login component');
  },
});
</script>
