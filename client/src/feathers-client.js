import feathers from '@feathersjs/feathers';
import rest from '@feathersjs/rest-client';
import auth from '@feathersjs/authentication-client';
import axios from 'axios';

import { iff, discard } from 'feathers-hooks-common';
import feathersVuex from 'feathers-vuex';

const app = feathers();

// Connect to backend
const restClient = rest('http://localhost:3030');

const feathersClient = feathers()
  .configure(restClient.fetch(window.fetch))
  .configure(auth({ storage: window.localStorage }))
  .hooks({
    before: {
      all: [
        iff(
          context => ['create', 'update', 'patch'].includes(context.method),
          discard('__id', '__isTemp'),
        ),
      ],
    },
  });

export default feathersClient;

// Configure an AJAX library (see below) with that client
app.configure(restClient.axios(axios));

// Connect to the `http://feathers-api.com/` services
// const users = app.service('users');
// const boards = app.service('boards');

// Setting up feathers-vuex
const {
  makeServicePlugin, makeAuthPlugin, BaseModel, models, FeathersVuex,
} = feathersVuex(
  feathersClient,
  {
    serverAlias: 'travel-budget-api', // optional for working with multiple APIs (this is the default value)
    idField: 'id', // Must match the id field in your database table/collection
    whitelist: ['$regex', '$options'],
  },
);

export {
  makeAuthPlugin, makeServicePlugin, BaseModel, models, FeathersVuex,
};
