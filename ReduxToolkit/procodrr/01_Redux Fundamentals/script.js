import {createStore, legacy_createStore} from "redux"
console.dir(createStore)

let initialState = {
  post: 0,
  name: "Aman",
  age: 23,
};

function reducer(state =initialState, action) {
  if (action.type === "post/increment") {
    return { ...state, post: state.post + 1 };
  } 
  else if (action.type === "post/decrement") {
    return { ...state, post: state.post - 1 };
  }
   else if (action.type === "post/incrementBy") {
     return { ...state, post: state.post - action.payload };
   } return state
}

const store = createStore(reducer)
console.log(store)

console.log(store.getState());

store.dispatch({ type: "post/decrement" });
console.log(store.getState())