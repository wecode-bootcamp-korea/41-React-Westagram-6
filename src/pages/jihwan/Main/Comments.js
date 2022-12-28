import React from 'react';
import './Comment.scss';

function Comments({ comments }) {
  return (
    <div className="contentSpanWrap">
      <ul>
        {comments.map(comment => {
          return <li key={Math.random()}>사람 {comment}</li>;
        })}
      </ul>
    </div>
  );
}

export default Comments;
