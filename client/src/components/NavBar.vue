<template>
<div>
  <v-app-bar  dense dark>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor: pointer">{{ appTitle }}</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-xs-only">
            <v-btn text dark to="/">Home</v-btn>
            <v-btn text dark to="/register" v-if="!isAuthenticated">Register</v-btn>
            <v-btn text dark to="/login" v-if="!isAuthenticated">Login</v-btn>
            <v-btn text dark to="/login" v-if="isAuthenticated" on="logout()">Logout</v-btn>
        </v-toolbar-items>

    <div class="hidden-md-and-up">
        <v-app-bar-nav-icon @click.stop="sidebar = !sidebar">
            <v-icon left dark>menu</v-icon>
        </v-app-bar-nav-icon>
    </div>
    </v-app-bar>

    <v-navigation-drawer
        v-model="sidebar"
        absolute
        side
        temporary
        >
        <v-list
            nav
            dense
        >
            <v-list-item-group
            active-class="deep-purple--text text--accent-4"
            >
            <v-list>
                <v-list-item to="/register">
                    <v-list-item-content>
                        <v-list-item-title>Register</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/login" v-if="!isAuthenticated">
                    <v-list-item-content>
                        <v-list-item-title>Login</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
                <v-list-item to="/logout" v-if="isAuthenticated" v-on="logout()">
                    <v-list-item-content>
                        <v-list-item-title>Logout</v-list-item-title>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
            </v-list-item-group>
        </v-list>
    </v-navigation-drawer>
</div>
</template>

<script lang="ts">
import Vue from 'vue';

import { mapGetters } from 'vuex';

export default Vue.extend({
  name: 'NavBar',
  computed: {
    ...mapGetters([
      'isAuthenticated',
    ]),
  },
  methods: {
    logout() {
      this.$store.dispatch('auth/logout');
    },
  },
  data() {
    return {
      appTitle: 'Travel Budget App',
      sidebar: false,
    };
  },
});
</script>
