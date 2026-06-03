import { createStore, legacy_createStore } from "redux";
import { productsList } from "./productsList";
console.dir(createStore);

let initialState = { products: productsList, cardItem: [], wishList: [] };

const CARD_ADD_ITEM = "card/add_Item";
const CART_REMOVE_ITEM = "card/remove_Item";
const CART_ITEM_INCREASE_QUANTITY = "cart/increaseItemQuantity";

function reducer(state = initialState, action) {
  switch (action.type) {
    case CARD_ADD_ITEM:
      return { ...state, cardItem: [...state.cardItem, action.payload] };
    case CART_REMOVE_ITEM:
      return {
        ...state,
        cardItem: state.cardItem.filter(
          (item) => item.id !== action.payload.id,
        ),
      };
    case CART_ITEM_INCREASE_QUANTITY:
      return {
        ...state,
        cardItem: state.cardItem.map((item) =>
          item.id == action.payload.id
            ? (item.quantity = action.payload.quantity + 1)
            : item,
        ),
      };
    
    default:
      return state;
  }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 1, quantity: 1 } });
store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 2, quantity: 1 } });
store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 13, quantity: 3 } });

store.dispatch({ type: CART_REMOVE_ITEM, payload: { id: 13 } });

store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 14, quantity: 3 } });
store.dispatch({
  type: CART_ITEM_INCREASE_QUANTITY,
  payload: { id: 15, quantity: 3 },
});
