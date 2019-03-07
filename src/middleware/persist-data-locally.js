/* eslint-disable no-console */
const persistDataLocally = store  => next => action => {
  next (action);
  localStorage['reduxStore'] = JSON.stringify(store.getState());
  console.log('LocalStorage: ', localStorage['reduxStore']);
};

export default persistDataLocally;