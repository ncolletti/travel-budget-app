<template>
    <v-container
        class="fill-height"
        fluid
      >
      </v-container>
</template>

<script lang="ts">

import Vue from 'vue';
import { mapActions } from 'vuex';

export default Vue.extend({
  name: 'Logout',
  methods: {
    ...mapActions(['logout']),
  },
  // beforeRouteEnter(to, from, next) {
  //   this.logout();
  //   next('/login');
  // },
  // created() {
  //   this.logout();
  //   this.$router.go('/');
  // },
});
</script>
