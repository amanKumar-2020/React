const CARD_ADD_ITEM = "card/add_Item";
const CART_REMOVE_ITEM = "card/remove_Item";
export const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";

export default function cardReducer(cardItem = [], action) {
  switch (action.type) {
    case CARD_ADD_ITEM:
      return [...cardItem, action.payload];
    case CART_REMOVE_ITEM:
      return [cardItem.filter((item) => item.id !== action.payload.id)];
    case CART_ITEM_INCREASE_QUANTITY:
      return [
        ...cardItem,
        cardItem.map((item) =>
          item.id == action.payload.id
            ? (item.quantity = action.payload.quantity + 1)
            : item,
        ),
      ];

    default:
      return cardItem;
  }
}

export function cardAddItem(itemID,quantity) {
  return { type: CARD_ADD_ITEM, payload: { id: itemID, quantity: quantity } };
}
export function cardRemoveItem(itemID) {
  return { type: CART_REMOVE_ITEM, payload: { id: itemID } };
}