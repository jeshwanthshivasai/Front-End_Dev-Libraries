// The Redux store in the code editor has an initialized state that's an object containing a login property currently set to false.
// There's also an action creator called loginAction() which returns an action of type LOGIN.
// Dispatch the LOGIN action to the Redux store by calling the dispatch method, and pass in the action created by loginAction().

const store = Redux.createStore(
  (state = {login: false}) => state
);

const loginAction = () => {
  return {
    type: 'LOGIN'
  }
};

// Dispatch the action here:
store.dispatch(loginAction());