// The code editor has a store, actions, and action creators set up for you.
// Fill in the reducer function to handle multiple authentication actions.
// Use a JavaScript switch statement in the reducer to respond to different action events.
// This is a standard pattern in writing Redux reducers.
// The switch statement should switch over action.type and return the appropriate authentication state.

// Note: At this point, don't worry about state immutability, since it is small and simple in this example.
// For each action, you can return a new object — for example, {authenticated: true}.
// Also, don't forget to write a default case in your switch statement that returns the current state.
// This is important because once your app has multiple reducers, they are all run any time an action dispatch is made, even when the action isn't related to that reducer.
// In such a case, you want to make sure that you return the current state.



const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {
  // Change code below this line
  switch (action.type) {
    case 'LOGIN' :
    return {
      authenticated : true
    };
    case 'LOGOUT' :
    return {
      authenticated : false
    }
    default :
    return state;
  }
  // Change code above this line
};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: 'LOGIN'
  }
};

const logoutUser = () => {
  return {
    type: 'LOGOUT'
  }
};