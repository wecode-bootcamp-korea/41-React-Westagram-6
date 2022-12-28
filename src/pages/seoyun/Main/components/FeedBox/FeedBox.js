import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment } from '@fortawesome/free-regular-svg-icons';
import React, { useState } from 'react';
// import { compileStringAsync } from 'sass';
import './FeedBox.scss';
import {
  faArrowUpFromBracket,
  faEllipsis,
  faXmark,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';

function FeedBox() {
  let [countLike, setPlusLike] = useState(507);
  let [likeHeart, setLikeHeart] = useState(false);

  let [smallHeart, setSmallHeart] = useState(false);

  let [commentObj, setCommentObj] = useState([
    {
      username: 'phdjay',
      content: 'beautiful work',
    },
    {
      username: 'ch.w.ch',
      content: 'wow',
    },
  ]);
  let [commentBoxValue, setCommentBoxValue] = useState('');

  const pressHeart = () => {
    setLikeHeart(!likeHeart);
    likeHeart ? setPlusLike(countLike - 1) : setPlusLike(countLike + 1);
  };

  const pressCommentHeart = () => {
    setSmallHeart(!smallHeart);
  };

  const redHeart = likeHeart ? ' Activate' : ' Deactivate';
  const smallRedHeart = smallHeart ? ' Activate' : ' Deactivate';

  return (
    <main>
      <div className="feedsContainer">
        <div className="profileBox">
          <div className="profile">
            <img
              src="https://images.unsplash.com/photo-1571975795053-950dbde7dacc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80"
              alt="profile"
            />
            <div className="idBox">
              <p>cluesandkeys</p>
            </div>
          </div>
          <div className="moreOptions">
            <FontAwesomeIcon icon={faEllipsis} className="ellipsis" />
          </div>
        </div>
        <div className="feedPic">
          <img
            src="https://images.unsplash.com/photo-1604782206219-3b9576575203?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3097&q=80"
            alt="feed"
          />
        </div>
        <div className="options">
          <FontAwesomeIcon
            icon={faHeart}
            className={'likeHeart' + redHeart}
            onClick={pressHeart}
          />
          <FontAwesomeIcon icon={faComment} className="comment" />
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="arrowup" />
          <FontAwesomeIcon icon={faBookmark} className="bookmark" />
        </div>
        <div className="liked">
          <img
            src="https://images.unsplash.com/photo-1615593249123-212337d9f4fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2980&q=80"
            alt="heart"
          />
          <p style={{ fontWeight: 'bold' }}>rhinocw</p>님&nbsp;
          <p style={{ fontWeight: 'bold' }}>외</p>&nbsp;
          <p style={{ fontWeight: 'bold' }}>{countLike}</p>
          <p style={{ fontWeight: 'bold' }}>명</p>
          <p>이 좋아합니다</p>
        </div>
        <div className="feedContent">
          <div className="feedContent_MyId">cluesandkeys</div>
          <div className="feedContent_MyWords">Coming Soon</div>
        </div>
        <div className="moreComments">댓글 10개 모두 보기</div>
        <div className="commentBox">
          {commentObj.map(function (a, i) {
            return (
              <div className="comment" key={i}>
                <div className="commentLineLeft">
                  <span className="commentId">{a.username}</span>
                  <span className="commentContent">{a.content}</span>
                </div>
                <div className="commentLineRight">
                  <FontAwesomeIcon
                    icon={faHeart}
                    className={'smallHeart' + smallRedHeart}
                    onClick={pressCommentHeart}
                  />
                  <button
                    className="xmarkButton"
                    onClick={() => {
                      let copy = [...commentObj];
                      copy.splice(i, 1);
                      setCommentObj(copy);
                    }}
                  >
                    <FontAwesomeIcon icon={faXmark} className="xmark" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        <div className="postUploadTime">2시간 전</div>
        <div className="writeComments">
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기 ..."
            value={commentBoxValue}
            onChange={e => {
              setCommentBoxValue(e.target.value);
            }}
          />
          <button
            className="submitBtn"
            onClick={() => {
              let copy = [...commentObj];
              copy.push({
                username: 'marshmellowthecat',
                content: commentBoxValue,
              });
              setCommentObj(copy);
              setCommentBoxValue('');
            }}
          >
            게시
          </button>
        </div>
      </div>
    </main>
  );
}

export default FeedBox;
