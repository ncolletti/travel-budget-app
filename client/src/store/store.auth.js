import { makeAuthPlugin } from '../feathers-client';

export default makeAuthPlugin({

  userService: 'users',
  logout: () => {
    window.console.log('hello!');
  },
});
