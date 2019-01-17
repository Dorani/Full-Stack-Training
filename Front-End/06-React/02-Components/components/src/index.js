import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';

import CommentDetail from './CommentDetail';



const App = () => {
  return (
    <div className="ui container comments">
      <CommentDetail
        author="sam"
        timeAgo="Today at 4:45PM"
        content="hello teams!"
      />
      <CommentDetail
        author="ryan"
        timeAgo="Today at 2:15PM"
        content="missing javascript.."
      />
      <CommentDetail 
        author="ryan"
        timeAgo="Today at 2:15PM"
        content="why does code rule"
      />
    </div>
  );
};

ReactDOM.render(<App />, document.querySelector('#root'));
