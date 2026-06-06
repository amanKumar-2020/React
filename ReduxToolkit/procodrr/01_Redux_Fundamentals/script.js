import { createStore, combineReducers, legacy_createStore } from "redux";
import { productsList } from "./productsList";
import cardReducer, {
  cardAddItem,
  cardRemoveItem,
  CART_ITEM_INCREASE_QUANTITY,
} from "./cartReducer";
import productsReducer from "./productsReducer";
console.dir(createStore);

// let initialState = { products: productsList, cardItem: [], wishList: [] };

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cardReducer,
});

const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(cardAddItem(1,2));
// store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 2, quantity: 1 } });
// store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 13, quantity: 3 } });

store.dispatch(cardRemoveItem(1));

// store.dispatch({ type: CARD_ADD_ITEM, payload: { id: 14, quantity: 3 } });
// store.dispatch({type: CART_ITEM_INCREASE_QUANTITY,payload: { id: 15, quantity: 3 }});
