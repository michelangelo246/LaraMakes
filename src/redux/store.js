import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'; // funcao para redux debug
import rootReducer from './root.reducer'

const middlewares = [ logger ]; // coloca middlewares aqui para facilitar passagem abaixo

const store = createStore(rootReducer, applyMiddleware(...middlewares)); // cria store usando o reducer principal e os middlewares

export default store;