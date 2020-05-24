import { createStore, applyMiddleware } from 'redux';
import { persistStore } from 'redux-persist';
import logger from 'redux-logger'; // funcao para redux debug
import rootReducer from './root.reducer'

const middlewares = []; // coloca middlewares aqui para facilitar passagem abaixo

if(process.env.NODE_ENV) {
   middlewares.push(logger);
}

export const store = createStore(rootReducer, applyMiddleware(...middlewares)); // cria store usando o reducer principal e os middlewares

export const persistor = persistStore(store);

export default { store, persistor };