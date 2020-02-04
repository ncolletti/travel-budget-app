import Vue from 'vue';
import Vuex from 'vuex';
// @ts-ignore
import { FeathersVuex } from '../feathers-client';
// @ts-ignore
import auth from './store.auth';

Vue.use(Vuex);
Vue.use(FeathersVuex);

const requireModule = require.context(
  // The path where the service modules live
  '../services',
  // Whether to look in subfolders
  false,
  // Only include .js files (prevents duplicate imports`)
  /.js$/,
);
const servicePlugins = requireModule
  .keys()
  .map(modulePath => requireModule(modulePath).default);

export default new Vuex.Store({
  state: {
    accessToken: window.localStorage.getItem('feathers-jwt') || null,
  },
  getters: {
    isAuthenticated: state => !!state.accessToken,
  },
  mutations: {
    LOGOUT(state) {
      state.accessToken = '';
    },
  },
  actions: {
    logout() {
      this.dispatch('auth/logout');
      window.localStorage.removeItem('feathers-jwt');
      Vue.set(this.state, 'accessToken', '');
    },
  },
  plugins: [...servicePlugins, auth],
});
