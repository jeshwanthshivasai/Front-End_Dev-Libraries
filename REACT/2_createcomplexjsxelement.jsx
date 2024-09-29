/*
JSX can represent more complex HTML as well.
One important thing to know about nested JSX is that it must return a single element.
This one parent element would wrap all of the other levels of nested elements.
For instance, several JSX elements written as siblings with no parent wrapper element will not transpile.

Here's an example:
Valid JSX:
<div>
  <p>Paragraph One</p>
  <p>Paragraph Two</p>
  <p>Paragraph Three</p>
</div>

Invalid JSX:
<p>Paragraph One</p>
<p>Paragraph Two</p>
<p>Paragraph Three</p>
*/

const JSX = 
<div>
    <h1>hello</h1>
    <p>world</p>
    <ul>
        <li>rapper</li>
        <li>zapper</li>
        <li>napper</li>
    </ul>
</div>