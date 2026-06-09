import { combineReducers, createStore } from "redux";
import { productReducer } from "./productsReducer";
import { wishlistReducer } from "./wishListReducer";
import { addCardItem, addToCardReducer } from "./cartReducer";


const reducer =combineReducers({
  products: productReducer,
  wishlist: wishlistReducer,
  addToCards: addToCardReducer
})

export const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store)

const product =store.subscribe(productReducer)

console.log(product)

// store.dispatch(addCardItem(2));