import { useState } from 'react';
import Comments from './../comments/comments';
import './feeds.scss';

function Feeds() {
  const [commentList, setCommentList] = useState([]);
  const [content, setContent] = useState('');

  const saveComment = e => {
    setContent(e.target.value);
  };

  const pushCommentList = () => {
    setCommentList([
      ...commentList,
      {
        id: commentList.length + 1,
        user: 'love_penguin',
        content: content,
      },
    ]);
    setContent('');
  };

  const keyPressEnter = e => {
    if (e.key === 'Enter') {
      pushCommentList();
    }
  };

  return (
    <div className="feeds_wrapper">
      <article>
        <div className="user_Info">
          <img
            src="/images/jisoo/penguin.jpg"
            alt="프로필"
            className="profile_img"
          />
          <span className="user_name">love_penguin</span>
        </div>
        <div className="contents">
          <img
            alt="피드_이미지"
            src="/images/jisoo/babyPenguin.jpeg"
            className="feeds_img"
          />
          <div className="icon_section">
            <div className="icon_section_left">
              <img
                alt="좋아요"
                src="/images/jisoo/redHeart.png"
                className="heart_img"
              />
              <img
                alt="메세지"
                src="/images/jisoo/speech-bubble.png"
                className="bubble_img"
              />
              <img
                alt="공유"
                src="/images/jisoo/upload.png"
                className="upload_img"
              />
            </div>
            <div className="icon_section_right">
              <img
                alt="북마크"
                src="/images/jisoo/bookmark-white.png"
                className="bookmark_img"
              />
            </div>
          </div>
        </div>
        <div className="under_section">
          <div className="count_user">
            <img
              alt="유저프로필"
              src="/images/jisoo/fox.jpg"
              className="like_img"
            />
            <p className="count_like">
              <span className="user_name">aineworld</span>님 외
              <span className="count_people"> 10</span>명이 좋아합니다.
            </p>
          </div>
          <p className="user_content">
            <span className="user_name">love_penguin</span> 날씨가 추워서
            펭귄모드됨ㅠ
          </p>
          <div id="comment_section">
            <div className="comment">
              <span className="user_name">naceosecius</span>
              <span className="comment_content">
                날이 많이 추워 감기 조심해 !!
              </span>
            </div>
            {commentList.map(comment => {
              return (
                <div key={comment.id} className="comment">
                  <Comments comment={comment} />
                </div>
              );
            })}
          </div>
          <div className="comment_register_section">
            <input
              type="text"
              className="comment_input"
              placeholder="댓글 달기..."
              onChange={saveComment}
              value={content}
              onKeyPress={keyPressEnter}
            />
            <button className="comment_btn_register" onClick={pushCommentList}>
              게시
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Feeds;
