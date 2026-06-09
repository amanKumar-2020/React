const CARD_ADD_ITEM = "card/addItem";
const CARD_REMOVE_ITEM = "card/removeItem";
const CARD_ITEM_INCREASE_QUANTITY = "card/increaseQuantity";
const CARD_ITEM_DECREASE_QUANTITY = "card/decreaseQuantity";

export function addCardItem(
  productId,
  title,
  price,
  rating,
  image,
  quantity = 1,
) {
  return {
    type: CARD_ADD_ITEM,
    payload: {
      productId,
      title,
      price,
      rating,
      image,
      quantity,
    },
  };
}
export function removeCardItem(productId) {
  return { type: CARD_REMOVE_ITEM, payload: productId };
}
export function increaseCardItemQuantity(productId) {
  return { type: CARD_ITEM_INCREASE_QUANTITY, payload: productId };
}
export function decreaseCardItemQuantity(productId) {
  return { type: CARD_ITEM_DECREASE_QUANTITY, payload: productId };
}

export function addToCardReducer(state = [], action) {
  switch (action.type) {
    case CARD_ADD_ITEM:
      const existingItem = state.find(
        (item) => item.productId == action.payload.productId,
      );
     if (existingItem) {
       return state.map((cardItem) =>
         cardItem.productId === existingItem.productId
           ? { ...cardItem, quantity: cardItem.quantity + 1 }
           : cardItem,
       );
     }
      return [...state, { ...action.payload, quantity: 1 }];
  }
  return state;
}
