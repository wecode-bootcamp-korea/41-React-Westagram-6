import React, { useState } from 'react';
import './Main.scss';

//jsx
const Main = () => {
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

  return (
    <div className="Main">
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
      <title>westargram</title>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.8.2/css/all.min.css"
      />
      <div className="wrap">
        {/* header */}
        <header className="header">
          <div className="header_wrap">
            <div className="inner">
              <h1 className="logo">
                <img
                  src="images/cheolho/instagram.png"
                  alt="instagram"
                  className="instagram_img"
                />
                <div className="vl" />
                <a href="login.html">
                  <img
                    src="images/cheolho/1600px-Instagram_logo.svg.png"
                    alt="main_logo"
                    className="instagram_logo"
                  />
                </a>
              </h1>
              <div className="input_box">
                <input type="text" placeholder="검색" id="search" />
              </div>
              <nav className="nav">
                <ul className="link_list">
                  <li>
                    <a href>
                      <i className="fas fa-compass" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fas fa-heart" />
                    </a>
                  </li>
                  <li>
                    <a href>
                      <i className="fas fa-user-circle" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </header>
        {/* //header */}
        {/* main */}
        <div className="main">
          <div className="container">
            {/*left */}
            <div className="contents_left">
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
                      <img
                        src="images/cheolho/feed_img.jpg
                              "
                        alt="feed_img"
                      />
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
                                <span className="user_id">아이디</span>
                                <span className="comment_contents">
                                  쿠킹클래스
                                </span>
                              </div>
                            </li>
                          </ul>
                          <div className="feed_time">
                            <p className="time">4시30분</p>
                            {commentArray.map(function (a, i) {
                              return <p>{commentArray[i]}</p>;
                            })}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* comment form */}
                    <form className="comments_form" onSubmit={onSubmit}>
                      <div className="input_box">
                        <input
                          type="text"
                          placeholder="댓글달기..."
                          id="comment_input"
                          value={comment}
                          onChange={handleCommentInput}
                        />
                      </div>
                      <div className="button_box">
                        <button
                          type="button"
                          className="btn"
                          onClick={onSubmit}
                          disabled=""
                        >
                          <span
                            className={comment ? 'spanSubmitOn' : 'spanSubmit'}
                          >
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
            {/* rigth */}
            <div className="contents_right">
              {/* aside */}
              <aside className="aside">
                <div className="feed_profile aside_profile">
                  <div className="profile">
                    <img
                      src="images/cheolho/profile-img.png"
                      alt="profile"
                      className="profile_img"
                    />
                    <div className="pofile_info">
                      <p className="profile_id">아이디</p>
                      <p className="profile_intro">자기소개</p>
                    </div>
                  </div>
                </div>
                <div className="follow">
                  <div className="follow_info follow_story">
                    <div className="follow_title">
                      <span className="text_tit">스토리</span>
                      <a href="#">
                        <span className="sub_tit">모두보기</span>
                      </a>
                    </div>
                    <div className="follow_list_wrap feed_profile">
                      <ul className="profile follow_list scroll">
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">1시간 전</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="follow_info">
                    <div className="follow_title">
                      <span className="text_tit">회원님을 위한 추천</span>
                      <a href="#">
                        <span className="sub_tit">모두보기</span>
                      </a>
                    </div>
                    <div className="follow_list_wrap feed_profile">
                      <ul className="profile follow_list">
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">
                              아아디 외 2명이 팔로우
                            </p>
                          </div>
                          <div className="follow_btn">
                            <button type="button" className="btn">
                              <span>팔로우</span>
                            </button>
                          </div>
                        </li>
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">
                              ABCDEFGHIJK 외 2명이 팔로우
                            </p>
                          </div>
                          <div className="follow_btn">
                            <button type="button" className="btn">
                              <span>팔로우</span>
                            </button>
                          </div>
                        </li>
                        <li>
                          <img
                            src="images/cheolho/profile-img.png"
                            alt="profile"
                            className="profile_img"
                          />
                          <div className="pofile_info">
                            <p className="profile_id">아이디</p>
                            <p className="profile_intro">
                              아아디 외 2명이 팔로우
                            </p>
                          </div>
                          <div className="follow_btn">
                            <button type="button" className="btn">
                              <span>팔로우</span>
                            </button>
                          </div>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </aside>
              {/* //aside */}
              {/* footer */}
              <footer className="footer">
                <a
                  href="https://www.flaticon.com/free-icons/user"
                  title="user icons"
                >
                  User icons created by Freepik - Flaticon
                </a>
              </footer>
              {/* //footer */}
            </div>
            {/* // rigth */}
          </div>
        </div>
        {/* //main */}
      </div>
    </div>
  );
};

export default Main;
