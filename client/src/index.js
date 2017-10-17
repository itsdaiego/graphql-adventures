import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import UsersListFeed from './components/UsersListFeed';
import registerServiceWorker from './registerServiceWorker';
import { 
  ApolloClient,
  ApolloProvider, 
  createNetworkInterface,
} from 'react-apollo';

const client = new ApolloClient({
  networkInterface: createNetworkInterface({
    uri: 'http://localhost:4000/graphql',
  }),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <UsersListFeed /> 
  </ApolloProvider>,
  document.getElementById('root')
);
registerServiceWorker();
