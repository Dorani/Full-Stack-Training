import React from 'react';



class SearchBar extends React.Component {
  // //handler with event object
  // onInputChange(event) {
  //   //containts the text the user types in
  //   console.log(event.target.value);
  // }

  render() {
    return (
    <div className="ui segment">
      <form className="ui form">
        <div className="field">
        <label>Image Search</label>
        //prop named onChange is used for wiring up callback
        <input type="text" onChange={(event) => console.log(event.target.value)} />
        </div>
      </form>
    </div>
  );
  }
}

export default SearchBar;
