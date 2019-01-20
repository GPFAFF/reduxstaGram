import React from 'react';
import { render } from 'react-dom';

import css from './styles/styles.styl';

import App from '../app/components/App';
import SinglePhoto from '../app/components/SinglePhoto';
import PhotoGrid from '../app/components/PhotoGrid';

import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { store, history } from './store';

console.log(store);

const router = (
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={PhotoGrid}/>
          <Route path="/view/:postId" component={SinglePhoto} />
      </Route>
    </Router>
  </Provider>
)

render(router, document.getElementById('root'));
