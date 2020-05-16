import { UserActionTypes } from './user.types'

// aqui, definimos o nome da ação e coletamos os dados necessários para a ação,
// os quais serão passados ao reducer responsável

export const setCurrentUser = user => ({
   type: UserActionTypesSET_CURRENT_USER,
   payload: user
});