import UserActionTypes from './user.types';

const INITIAL_STATE = { // esse é o estado inicial do reducer, similar ao 'this.state =' do construtor
   currentUser: null,
   error: null
}

// state: antigo estado; action.type: nome da ação; action.payload: conteudo da ação
// aqui, de acordo com a ação, realizamos as operações necessárias e atualizamos o state do app
const userReducer = (state = INITIAL_STATE, action) => { // define valor padrão para state
   switch(action.type){
      case UserActionTypes.SIGN_IN_SUCCESS: 
         return {
            ...state, // espalha os demais atributos do estado no novo estado-objeto retornado
            currentUser: action.payload, // altera somente o desejado; deve vir sempre após ...state, (para sobreescrever)
            error: null
         }
         case UserActionTypes.SIGN_OUT_SUCCESS:
            return {
               ...state,
               currentUser: null,
               error: null
            }
         case UserActionTypes.SIGN_OUT_FAILURE:
         case UserActionTypes.SIGN_IN_FAILURE:
         case UserActionTypes.SIGN_UP_FAILURE:
            return {
               ...state,
               error: action.payload
            }
      default:
         return state;
   }
}

export default userReducer;