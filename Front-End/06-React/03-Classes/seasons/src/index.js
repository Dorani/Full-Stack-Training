import React from 'react';
import ReactDom from 'react-dom';

//Refactored to class based componenet
//Our app component is extending, or borrowing functionality
//from the React component base class, it has a constructor function
//of its own that has some code to set up react app for us
//when we create we constructor function, we override react.componenent
// to fix this we call super(), which is a reference to the parents constuctor
class App extends React.Component {

  constructor(props) {
    //pointer to the React.Component constructor
    super(props);
  }

  //React says we have to define render!
  render() {
    window.navigator.geolocation.getCurrentPosition(
      //if an error occurs with above we will log it
      (error) => console.log(error),
      //callback that gets called when above goes as planned
      (position) => console.log(position)
    );

    return <div>Latitude: </div>
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
