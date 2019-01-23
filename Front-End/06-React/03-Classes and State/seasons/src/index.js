import React from 'react';
import ReactDom from 'react-dom';

//Refactored to class based componenet
//Our app component is extending, or borrowing functionality
//from the React component base class, it has a constructor function
//of its own that has some code to set up react app for us
//when we create our constructor function, we override react.componenent
// to fix this we call super(), which is a reference to the parents constuctor

class App extends React.Component {
  //remove constructor and refactor state initialization:
  state = { lat: null, errorMessage: '' };
  //Data loading lifecyle method
  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
        //callback that gets called when above goes as planned
        //take Latitude to update state of object
      (position) => this.setState({ lat: position.coords.latitude }),
        //if an error occurs with above we will log it
      (error) => this.setState({errorMessage: error.message})
    );
  }
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






//Notes:
//React says we have to define render!
//3 diff combo of state:
  //lat and no error msg = show lat
  //no lat and have error = show error
  //no lat and no errorMessage = show "loading"
