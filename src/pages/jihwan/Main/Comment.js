import React, { useState } from 'react';
import './Comment.scss';
import Comments from './Comments';
import commentData from './CommentData.json';

const Comment = () => {
  const [comments, setComments] = useState([]);

  const [commentMsg, setCommentMsg] = useState('');

  const handleInputComment = e => {
    setCommentMsg(e.target.value);
    console.log(e.target.value);
  };

  const handleCommentSubmit = e => {
    e.preventDefault();

    if (commentMsg === '') return alert('댓글 내용을 입력해주세요');

    setComments(prev => [...prev, commentMsg]);
    return setCommentMsg('');
  };

  let activeSubmit = () => {
    if (commentMsg === '') return true;
  };

  let registerBtnOn = activeSubmit() ? 'registerBtn' : 'registerBtnActive';

  return (
    <div className="feedWrap">
      <div className="feedSubImg">
        <img
          className="feedHeart"
          src="images/jihwan/heart.png"
          alt="feedHeart"
        />
        <img
          className="feedComment"
          src="images/jihwan/comment.png"
          alt="feedComment"
        />
        <img
          className="feedUpload"
          src="images/jihwan/upload.png"
          alt="feedUpload"
        />
        <img
          className="feedBookmark"
          src="images/jihwan/bookmark.png"
          alt="feedBookmark"
        />
      </div>
      <div className="contents">
        <img
          className="contentImg"
          src="images/jihwan/profile2.png"
          alt="contentImg"
        />
        <span className="spanBold">
          <span className="spBold1">ddd</span>님
          <span className="spBold2">외 11명</span>이 좋아합니다
        </span>

        {commentData.map(i => {
          return (
            <p key={Math.random()}>
              {i.name} {i.comment}
            </p>
          );
        })}
        <Comments comments={comments} />
        <form className="comment" onSubmit={handleCommentSubmit}>
          <input
            onChange={handleInputComment}
            value={commentMsg}
            className="commentInput"
            type="text"
            placeholder="댓글 달기..."
          />
          <button type="submit" className={registerBtnOn}>
            게시
          </button>
        </form>
      </div>
    </div>
  );
};

export default Comment;
