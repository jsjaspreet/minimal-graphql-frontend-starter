import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom'

const render = (Component) => {
  ReactDOM.render(
    <Router>
      <div>Hello World!</div>
    </Router>,
    document.getElementById('app')
  )
};

render();

// HMR
if (module.hot) {
  module.hot.accept();
}
