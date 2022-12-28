import React, { useState, useEffect } from 'react';
import ReceiveComment from './ReceiveComment';

const FeedList = props => {
  const [comment, setComment] = useState('');
  const [commentArray, setCommentArray] = useState([]);

  const handleCommentInput = event => {
    setComment(event.target.value);
  };

  const onSubmit = event => {
    event.preventDefault();
    let copy = [...commentArray];
    copy.push(comment);
    setCommentArray(copy);
    setComment('');
  };

  function CommentOutput({ commentArray }) {
    return commentArray.map(function (a, i) {
      return <p>{commentArray[i]}</p>;
    });
  }

  return (
    <div className="contents_left">
      <div className="feed-left">
        <div className="inner">
          <ul className="feeds_list">
            <li className="feeds_list_li">
              <div className="feed_profile">
                <div className="profile">
                  <img
                    src="images/cheolho/profile-img.png"
                    alt="profile"
                    className="profile_img"
                  />
                  <p className="profile_id">아이디</p>
                </div>
                <div className="profile_add link_list">
                  <button type="button" className="state_btn">
                    <img
                      src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/more.png"
                      alt=""
                    />
                  </button>
                </div>
              </div>
              <div className="feed_box">
                <img src={props.feedImage} alt="feed_img" />
              </div>
              <div className="feed_info">
                <div className="feed_state">
                  <ul className="link_list">
                    <li>
                      <button type="button" className="state_btn">
                        <img
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png
                                      "
                          alt="like_img"
                        />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="state_btn">
                        <img
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/comment.png"
                          alt="comment_img"
                        />
                      </button>
                    </li>
                    <li>
                      <button type="button" className="state_btn">
                        <img
                          src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/share.png"
                          alt="share_img"
                        />
                      </button>
                    </li>
                  </ul>
                  <div className="link_list">
                    <button type="button" className="state_btn">
                      <img
                        src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/bookmark.png"
                        alt="bookmark_img"
                      />
                    </button>
                  </div>
                </div>
                <div className="feed_comments">
                  <div className="feed_likes comments_margin">
                    <div className="likes_user profile">
                      <img
                        src="images/cheolho/profile-img.png"
                        alt="profile"
                        className="profile_img"
                      />
                    </div>
                    <div className="comments_info">
                      <p className="comments_tit">
                        <span className="user_id">000</span>님{' '}
                        <span>
                          외 <span className="likes_number">10명</span>
                        </span>
                        이 좋아합니다.
                      </p>
                    </div>
                  </div>
                  <div className="comment_list comments_margin">
                    <ul className="comments_info comment_list_ul">
                      <li>
                        <div className="comments_tit">
                          <span className="user_id">{props.feedUser}</span>
                          <span className="comment_contents">
                            {props.feedComment}
                          </span>
                        </div>
                      </li>
                    </ul>
                    <div className="feed_time">
                      <p className="time">4시30분</p>
                      <CommentOutput commentArray={commentArray} />
                    </div>
                  </div>
                </div>
              </div>
              {/* comment form */}
              <form className="comments_form" onSubmit={onSubmit}>
                <div className="input_box">
                  <ReceiveComment
                    comment={comment}
                    handleCommentInput={handleCommentInput}
                  />
                </div>
                <div className="button_box">
                  <button
                    type="button"
                    className="btn"
                    onClick={onSubmit}
                    disabled=""
                  >
                    <span className={comment ? 'spanSubmitOn' : 'spanSubmit'}>
                      게시
                    </span>
                  </button>
                </div>
              </form>
              {/* //comment form */}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FeedList;
