import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import rootReducer from './reducers/index';
import persistDataLocally from './middleware/persist-data-locally';

let retrievedState;
try {
  retrievedState = localStorage.getItem('reduxStore');
  if (retrievedState === null) {
    retrievedState ={};
  }
  retrievedState = JSON.parse(retrievedState);
} catch (err) {
  retrievedState ={};
}

const store = createStore(rootReducer, applyMiddleware(persistDataLocally));

store.subscribe(() =>
  // eslint-disable-next-line no-console
  console.log(store.getState())
);

const render = (Component) => {
  ReactDOM.render (
    <AppContainer>
      <HashRouter>
        <Provider store={store}>
          <Component/>
        </Provider>
      </HashRouter>
    </AppContainer>,
    document.getElementById('react-app-root')
  );
};

render(App);
/*eslint-disable */
if (module.hot) {
    module.hot.accept('./components/App', () => {
        render(App);
    });
}
/*eslint-enable */
