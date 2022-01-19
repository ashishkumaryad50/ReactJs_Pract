import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
// import { createStore } from 'redux'

const counterRed = (state = { counter: 0 }, action) => {
    if (action.type === 'INCREMENT') {
        return {
            counter: state.counter + 1
        };
    }
    if (action.type === 'DECREMENT') {
        return {
            counter: state.counter - 1
        };
    }
    return state;
}

// const store = createStore(counterRed);

const store = createStore(counterRed, composeWithDevTools(
//   applyMiddleware(...middleware),
  // other store enhancers if any
));

export default store;
