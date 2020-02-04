<template>
  <div class="home">
    <WelcomeMessage />
  </div>
</template>

<script>
// @ is an alias to /src
import WelcomeMessage from '../components/WelcomeMessage.vue';

export default {
  name: 'home',
  components: {
    WelcomeMessage,
  },
};
</script>
