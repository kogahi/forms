import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Layout from './pages/Layout';
import First from './pages/First';
import Second from './pages/Second';
import Third from './pages/Third';
import Last from './pages/Last';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/reducer';

const app = document.getElementById('app');
const store = createStore(reducer);

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Layout>
        <Route exact path='/' component={First}></Route>
        <Route path='/second' component={Second}></Route>
        <Route path='/third' component={Third}></Route>
        <Route path='/last' component={Last}></Route>
      </Layout>
    </Router>
  </Provider>,
  app
);

export default store;
