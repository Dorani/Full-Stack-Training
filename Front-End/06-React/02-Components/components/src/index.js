import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';



const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail author="sam" />
      <CommentDetail author="ryan" />
      <CommentDetail author="tommy" />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
