import { applyMiddleware, createStore } from 'redux';
import logger from 'redux-logger';
import { persistStore } from 'redux-persist';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './root-saga';
import rootReducer from './root.reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [sagaMiddleware]; // coloca middlewares aqui para facilitar passagem abaixo

if (process.env.NODE_ENV !== 'production') {
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // cria store usando o reducer principal e os middlewares

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);

export default { store, persistor };