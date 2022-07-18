import React from 'react';
import Router from './app/router';
import {Provider} from 'react-redux';
import {store} from './app/redux/store';
const App = () => {
  return (
    <Provider store={store}>
      <Router />
    </Provider>
  );
};

export default App;
