// Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method.
// You'll see that store.dispatch() is called three times in a row, each time directly passing in an action object.
// Watch the console output between the action dispatches to see the updates take place.


const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
const increment = () => {count += 1}
store.subscribe(increment);
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);






// Problem Explanation
// Let’s break the instructions down to figure exactly what it’s asking.

// Write a callback function that increments the global variable count every time the store receives an action, and pass this function in to the store.subscribe() method.

// We can summarize these steps into small chunks:

// write a callback function
// increment the global variable count
// pass function to store.subscribe() method.
// Awesome! Now let’s review some of the basics again.

// What is a “callback function” in plain English?
// A callback function is simply a function that gets called after another function is done being executed. In the real-world, it might be something like this:

// // You drop your car off at the mechanic and you want the shop to 'call you back' when your car is fixed.
// let carIsBroken = true;
// const callCarOwner = () => console.log("Hello your car is done!");
// const fixCar = (carIsBroken, callCarOwner) => {
//   if (carIsBroken === true) {
//     carIsBroken = false;
//   }
//   console.log(carIsBroken);
//   // After the car is fixed, the last thing we do is call the car owner - that's our 'callback function'.
//   callCarOwner();
// };
// fixCar(carIsBroken, callCarOwner);
// How do you increase a number variable?
// We can do this by using the “+=” operator.

// let count = 1;
// const addOne = () => (count += 1);
// How do you pass a function to a method?
// We can pass a function to a method the same way we might pass a variable to a method. Just pass it in as an argument!

// function sayHi() {
//   console.log("Hi!");
// }
// store.subscribe(sayHi);