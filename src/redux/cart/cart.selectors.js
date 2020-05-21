import { createSelector } from 'reselect';

// input selector: serve para pegar fatias (1º grau geralmente) do estado
const selectCart = state => state.cart;

// createSelector cria memoizacao para o seletor, 
// assim, componentes dependentes dessas props não serão rerenderizados
// enquanto não houver alterações nos cartItems
export const selectCartItems = createSelector(
   [selectCart],
   (cart) => cart.cartItems
);

export const selectCartItemsCount = createSelector(
   [selectCartItems],
   cartItems => cartItems.reduce((acumulator, item) => (
      acumulator + item.quantity
   ), 0)
);