import React, { useState } from 'react';

function ReceiveComment({ comment, handleCommentInput }) {
  return (
    <input
      type="text"
      placeholder="댓글달기..."
      id="comment_input"
      value={comment}
      onChange={handleCommentInput}
    />
  );
}

export default ReceiveComment;
