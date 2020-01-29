<template>
    <div class="logout"></div>
</template>

<script lang="ts">

import Vue from 'vue';

export default Vue.extend({
  name: 'Logout',
  beforeRouteEnter(to, from, next) {
    next(() => {
      console.log('hello');
      this.$store.dispatch('auth/logout', {
        strategy: 'local',
      });
      this.$router.push({ path: '/login' });
      next(false);
    });
  },
});
</script>
