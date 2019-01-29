import React from 'react';



class SearchBar extends React.Component {

  state = { term: ''}
  //prevent form from submitting itself
  onFormSubmit(event) {
    event.preventDefault();
  }
  render() {
    return (
    <div className="ui segment">
      <form onSubmit={this.onFormSubmit} className="ui form">
        <div className="field">
        <label>Image Search</label>

        <input
          type="text"
          value={this.state.term}
          onChange={(event) => this.setState({term: event.target.value})}
        />
        </div>
      </form>
    </div>
  );
  }
}

export default SearchBar;
