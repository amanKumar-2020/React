import {createStore, legacy_createStore} from "redux"
import { products } from "./productsList";
console.dir(createStore)

let initialState = products;

const CARD_ADD_ITEM = "card/add_Item"

function reducer(state =initialState, action) {

    switch(action.type){
        
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({type: CARD_ADD_ITEM , payload: {}})