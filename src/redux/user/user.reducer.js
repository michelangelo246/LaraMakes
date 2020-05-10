const INITIAL_STATE = { // esse é o estado inicial do reducer, similar ao 'this.state =' do construtor
   currentUser: null
}

// state: antigo estado; action.type: nome da ação; action.payload: conteudo da ação
const userReducer = (state = INITIAL_STATE, action) => { // define valor padrão para state
   switch(action.type){
      case 'SET_CURRENT_USER':
         return {
            currentUser: action.payload, // altera somente o desejado
            ...state // espalha os demais atributos do estado no novo estadi-objeto retornado
         }
      default:
         return state;
   }
}

export default userReducer;