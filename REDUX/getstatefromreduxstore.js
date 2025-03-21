// The Redux store object provides several methods that allow you to interact with it. 
// For example, you can retrieve the current state held in the Redux store object with the getState() method.
// Use store.getState() to retrieve the state from the store, and assign this to a new variable currentState.

const store = Redux.createStore(
  (state = 5) => state
);

// Change code below this line

const currentState = store.getState();