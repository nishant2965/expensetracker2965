import {createStore} from "redux";

const increment = ({ incrementBy = 1} = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrement = ({ decrementBy = 1} = {}) => {
  return {
    type: 'DECREMENT',
    decrementBy
  };
};

const set = ({ count } = {}) => ({
  type: 'SET',
  count
});

const reset = () => ({
  type: 'RESET'
});

const countReducer = (state = {count: 0}, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        count: state.count + action.incrementBy
      }
    case 'DECREMENT':
      return {
        count: state.count - action.decrementBy
      }
    case 'RESET':
      return {
        count: 0
      }

    case 'SET':
      return {
        count: action.count
      }
    default:
      return state;
  }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(increment({incrementBy: 1}));

store.dispatch(decrement());

store.dispatch(decrement({decrementBy: 10}));

store.dispatch(reset());

store.dispatch(set({expenseCount:-101}));
