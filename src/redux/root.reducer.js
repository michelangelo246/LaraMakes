import { combineReducers } from 'redux'; // combina os reducers em um principal
import userReducer from './user/user.reducer';


export default combineReducers({
   user: userReducer // da um nome para cada reducer
})