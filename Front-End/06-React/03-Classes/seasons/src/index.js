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
    //state object that will eventually contain data
    this.state = { lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      //callback that gets called when above goes as planned
      (position) => {
        console.log(position)
        //take Latitude to update state object
        //don't forget set state!!
        this.setState({ lat: position.coords.latitude });
      },
      //if an error occurs with above we will log it
      (error) => {
        this.setState({errorMessage: error.message});
      }
    );
  }
  //React says we have to define render!\
  //3 diff combo of state:
    //lat and no error msg = show lat
  render() {
    if (this.state.errorMessage && !this.state.lat){
      return <div>Error: {this.state.errorMessage} </div>
    }

    if (!this.state.errorMessage && this.state.lat) {
      return <div> Lattitude: {this.state.lat} </div>
    }

    return <div>Loading!</div>
  }
}

ReactDom.render(<App />, document.querySelector("#root"));
