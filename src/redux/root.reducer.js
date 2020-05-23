import { combineReducers } from 'redux'; // combina os reducers em um principal
import storage from 'redux-persist/lib/storage'
import { persistReducer } from 'redux-persist'
import userReducer from './user/user.reducer';
import cartReducer from './cart/cart.reducer';
import directoryReducer from './directory/directory.reducer';
import shopReducer from './shop/shop.reducer';

const persistConfig = {
   key: 'root',
   storage,
   whitelist: ['cart']
};

const rootReducer = combineReducers({
   user: userReducer, // da um nome para cada reducer
   cart: cartReducer,
   directory: directoryReducer,
   shop: shopReducer
});

export default persistReducer(persistConfig, rootReducer);