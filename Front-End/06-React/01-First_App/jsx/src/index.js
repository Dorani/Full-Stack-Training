//Import the React and ReactDom libraries
import React from 'react'
import ReactDom from 'react-dom'

//Creacte a react component
const App = () => {
  const buttonText = {text: "Click Me!"}

  return (
    <div>
      <label className="label" htmlFor="name">Enter Name:</label>
      <input id="name" type="text"/>
      <button style={{backgroundColor: 'blue', color: 'white'}}>
      {buttonText.text}
      </buttonText>
    </div>
  );
};

//Take the react componenent and show it on the browser
ReactDom.render(
  <App />,
  document.querySelector('#root')
);
