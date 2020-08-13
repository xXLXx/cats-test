import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from "redux-saga";

import reducers from '../reducers';
import RootSaga from '../sagas';

// create the saga middleware
const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware];

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore (initialState) {
  // mount it on the Store
  const store = createStore(
    reducers,
    initialState,
    composeEnhancers(applyMiddleware(...middlewares))
  );

  // then run the saga
  sagaMiddleware.run(RootSaga);

  return store;
}
