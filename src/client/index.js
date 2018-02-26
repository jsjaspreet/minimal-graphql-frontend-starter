import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import App from './app';

const uri = process.env.NODE_ENV === 'production' ? 'http://0.0.0.0:8181/graphql' : 'http://0.0.0.0:8181/graphql';
const client = new ApolloClient({ uri });

const render = (Component) => {
  ReactDOM.render(
    <ApolloProvider client={client}>
      <Router>
        <Component/>
      </Router>
    </ApolloProvider>,
    document.getElementById('app')
  )
};

render(App);

// HMR
if (module.hot) {
  module.hot.accept();
}
