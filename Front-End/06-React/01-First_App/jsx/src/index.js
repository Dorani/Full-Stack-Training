//Import the React and ReactDom libraries
import React from 'react'
import ReactDom from 'react-dom'

//Creacte a react component
const App = () => {
  return (
    <div>
      <label class="label" for="name">Enter Name:</label>
      <input id="name" type="text"/>
      <button style="background-color:blue; color:white">Submit</submit>
    </div>
  );
};

//Take the react componenent and show it on the browser
ReactDom.render(
  <App />,
  document.querySelector('#root')
);
