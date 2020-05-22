export const addItemToCart = (cartItems, newItem) => {
   const existingItem = cartItems.find(item => item.id === newItem.id);
   if(existingItem){
      return cartItems.map(item => (
         item.id === newItem.id?
         { ...item, quantity: item.quantity + 1 }:
         item
      ));
   }
   return [...cartItems, { ...newItem, quantity: 1 }];
}

export const removeItemFromCart = (cartItems, itemToRemove) => (
   cartItems.map(item => (
      item.id === itemToRemove.id?
      { ...item, quantity: item.quantity - 1 }:
      item
   ))
)