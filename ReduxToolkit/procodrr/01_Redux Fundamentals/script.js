import {createStore, legacy_createStore} from "redux"
console.dir(createStore)

let initialState = {
  post: 0,
  name: "Aman",
  age: 23,
};

const INCREMENT = "post/increment"
const DECREMENT = "post/decrement"
const INCREASE_BY = "post/incrementBy"
const DECREMENT_BY = "post/decrementBy";

function reducer(state =initialState, action) {

    switch(action.type){
        case INCREMENT :
            return { ...state, post: state.post + 1 };
        case DECREMENT :
             return { ...state, post: state.post - 1 };
        case INCREASE_BY :
            return { ...state, post: state.post + action.payload };
        case DECREMENT_BY :
            return { ...state, post: state.post - action.payload };
        default : return state
    }
}

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__?.());
console.log(store)

store.subscribe(()=>{
    console.log(store.getState())
})

store.dispatch({ type: INCREMENT });
// store.dispatch({ type: DECREMENT });
// store.dispatch({ type: INCREASE_BY, payload:10 });
// store.dispatch({ type: DECREMENT_BY, payload:20 });
