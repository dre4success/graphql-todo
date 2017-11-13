import React from 'react';
import ReactDOM from 'react-dom';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import './index.css';
import {App} from './components/App';
import registerServiceWorker from './registerServiceWorker';

const port = process.env.PORT || 2020;

const client = new ApolloClient({
  link: new HttpLink({uri: `http://localhost:${port}/graphql`}),
  cache: new InMemoryCache()
});

const Root = () => (
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);

ReactDOM.render(<Root />, document.getElementById('root'));
registerServiceWorker();
