import React, { useState, useEffect } from 'react';
import './Main.scss';
import ReceiveComment from './components/ReceiveComment';
import FeedList from './components/FeedList';
import { ASIDE_UI } from './components/AsideUi';
import Nav from '../../../components/Nav';

const Main = () => {
  const [feedList, setFeedList] = useState([]);

  useEffect(() => {
    fetch('/data/feedList.json')
      .then(res => res.json())
      .then(result => setFeedList(result));
  }, []);

  return (
    <div className="Main">
      <div className="wrap">
        <Nav />
        <div className="main">
          <div className="container">
            <div>
              {feedList.map(feed => {
                return (
                  <FeedList
                    feedImage={feed.image}
                    feedUser={feed.user_id}
                    feedComment={feed.comment_contents}
                  />
                );
              })}
            </div>
            <div className="contents_right">
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
              <footer className="footer">
                {
                  <ul>
                    {ASIDE_UI.map(info => (
                      <span key={info.id}>{info.text}</span>
                    ))}
                  </ul>
                }
              </footer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
