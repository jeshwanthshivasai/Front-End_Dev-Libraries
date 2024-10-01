/*
Components are the core of React. 
Everything in React is a component and here you will learn how to create one.

There are two ways to create a React component. 
The first way is to use a JavaScript function. 
Defining a component in this way creates a stateless functional component. 
For now, think of a stateless component as one that can receive data and render it, but does not manage or track changes to that data. 

To create a component with a function, you simply write a JavaScript function that returns either JSX or null. 
One important thing to note is that React requires your function name to begin with a capital letter. 
Here's an example of a stateless functional component that assigns an HTML class in JSX:

const DemoComponent = function() {
  return (
    <div className='customClass' />
  );
};

Because a JSX component represents HTML, you could put several components together to create a more complex HTML page. 
This is one of the key advantages of the component architecture React provides. 
It allows you to compose your UI from many separate, isolated components. 
This makes it easier to build and maintain complex user interfaces.
*/

const MyComponent = function() {
    // Change code below this line
    return (
        <div>
            <p>Hello, World!</p>
        </div>
    )
    // Change code above this line
}