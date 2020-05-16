const INITIAL_STATE = { // esse é o estado inicial do reducer, similar ao 'this.state =' do construtor
   currentUser: null
}

// state: antigo estado; action.type: nome da ação; action.payload: conteudo da ação
// aqui, de acordo com a ação, realizamos as operações necessárias e atualizamos o state do app
const userReducer = (state = INITIAL_STATE, action) => { // define valor padrão para state
   switch(action.type){
      case 'SET_CURRENT_USER':
         return {
            ...state, // espalha os demais atributos do estado no novo estado-objeto retornado
            currentUser: action.payload // altera somente o desejado; deve vir sempre após ...state, (para sobreescrever)
         }
      default:
         return state;
   }
}

export default userReducer;