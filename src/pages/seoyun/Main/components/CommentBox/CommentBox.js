import React from 'react';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faHeart } from '@fortawesome/free-solid-svg-icons';

import './CommentBox.scss';

function CommentBox({ comment, onDelete }) {
  // const { comment } = props;

  let [smallHeart, setSmallHeart] = useState(false);

  const pressCommentHeart = () => {
    setSmallHeart(!smallHeart);
  };

  const smallRedHeart = smallHeart ? ' Activate' : ' Deactivate';

  // let [commentObj, setCommentObj] = useState([
  //   {
  //     username: 'phdjay',
  //     content: 'beautiful work',
  //   },
  //   {
  //     username: 'ch.w.ch',
  //     content: 'wow',
  //   },
  // ]);

  // const deleteComment = () => {
  //   let copy = [...commentObj];
  //   copy.splice(comment, 1);
  //   setCommentObj(copy);
  // };

  return (
    <div className="comment">
      <div className="commentLineLeft">
        <span className="commentId">{comment.username}</span>
        <span className="commentContent">{comment.content}</span>
      </div>
      <div className="commentLineRight">
        <FontAwesomeIcon
          icon={faHeart}
          className={'smallHeart' + smallRedHeart}
          onClick={pressCommentHeart}
        />
        <button className="xmarkButton" onClick={() => onDelete(comment.id)}>
          <FontAwesomeIcon icon={faXmark} className="xmark" />
        </button>
      </div>
    </div>
  );
}

export default CommentBox;
