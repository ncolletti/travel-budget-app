<template>
  <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            sm="8"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="primary"
                dark
                flat
              >
                <v-toolbar-title>Login</v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form >
                  <v-text-field
                    id="email"
                    label="Email"
                    name="email"
                    prepend-icon="person"
                    type="text"
                    v-model="email"
                  />

                  <v-text-field
                    id="password"
                    label="Password"
                    name="password"
                    prepend-icon="lock"
                    type="password"
                    v-model="password"
                  />
                </v-form>
              </v-card-text>
              <v-card-actions>
                  <v-spacer />
                <v-btn color="primary" @click.prevent="login">Login</v-btn>
                </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'Login',
  data: () => ({
    email: '',
    password: '',
  }),
  mounted() {
    // console.log('hello from login component');
  },
  methods: {
    login() {
      console.log(`${this.email}  ${this.password}`);
      this.$store.dispatch('auth/authenticate', {
        strategy: 'local',
        email: this.email,
        password: this.password,
      });
      this.$router.push({ name: 'home' });
    },
  },
});
</script>
