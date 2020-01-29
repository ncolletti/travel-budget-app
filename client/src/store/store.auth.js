import { makeAuthPlugin } from '../feathers-client';

export default makeAuthPlugin({
  userService: 'users',
  state: {
    accessToken: window.localStorage.getItem('feathers-jwt') || null,
  },

  getters: {
    isAuthenticated: state => !!state.accessToken,
  },

  mutations: {
    setAccessToken(state, accessToken) {
      state.accessToken = accessToken;
      window.localStorage.setItem('feathers-jwt', accessToken);
    },
  },
  mounted() {
    console.log(window.localStorage.getItem('feathers-jwt'));
  },
  actions: {
    responseHandler({ commit }, response) {
      if (response.accessToken) {
        commit('setAccessToken', response.accessToken);
        // Decode the token and set the payload, but return the response
        // Populate the user if the userService was provided
        // if (state.userService && payload.hasOwnProperty(state.entityIdField)) {
        //   return dispatch('populateUser', payload[state.entityIdField]).then(() => {
        //     commit('unsetAuthenticatePending');
        //     return response;
        //   });
        // }
        commit('unsetAuthenticatePending');
        return response;

        // If there was not an accessToken in the response,
        // allow the response to pass through to handle two-factor-auth
      }
      return response;
    },
  },
});
