import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';
import persistedReducer from './persistConfig'; // If using Redux Persist
import rootSaga from './sagas/rootSaga'; // If using Redux Saga

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  persistedReducer, // Use rootReducer directly if not using Redux Persist
  applyMiddleware(sagaMiddleware)
);

export const persistor = persistStore(store); // If using Redux Persist

sagaMiddleware.run(rootSaga); // If using Redux Saga