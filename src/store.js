import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootReducer, { rootSaga } from './modules';
import { reducer as formReducer } from 'redux-form'

const createAppStore = () => {
 const sagaMiddleware = createSagaMiddleware();

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(sagaMiddleware),
      window.__REDUX_DEVTOOLS_EXTENSION__
        ? window.__REDUX_DEVTOOLS_EXTENSION__()
        : f => f
    )
  );

  sagaMiddleware.run(rootSaga);
  return store;
};

export default createAppStore;
