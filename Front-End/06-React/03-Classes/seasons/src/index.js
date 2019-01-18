import React from 'react';
import ReactDom from 'react-dom';


const App = () => {
  window.navigator.geolocation.getCurrentPosition(
    //if an error occurs with above we will log it
    (error) => console.log(error),
    //callback that gets called when above goes as planned
    (position) => console.log(position)
  );

  return <div>Latitude: </div>
};


//refactored to class based componenet
class App extends React.Component {
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
