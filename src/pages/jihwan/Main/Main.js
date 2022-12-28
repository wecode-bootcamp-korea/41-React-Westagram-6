import React, { Component } from 'react';
import Comment from './Comment';
import './Main.scss';
import Nav from '../../../components/Nav';
import '../../../components/Nav.scss';

const Main = () => {
  return (
    <>
      <Nav />
      <section className="main">
        {/* <nav className="nav">
        <div className="westaWrap">
          <img
            className="westaLogo"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/logo.png"
            alt="westaLogo"
          />
          <img
            className="westaLine"
            src="images/jihwan/line.png"
            alt="westaLine"
          />
          <span className="logo">Westagram</span>
        </div>
        <div>
          <input className="inputSearch" type="text" placeholder="검색" />
        </div>
        <div className="navImgWrap">
          <img
            className="explore"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
            alt="explore"
          />
          <img
            className="heart"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
            alt="heart"
          />
          <img
            className="profile"
            src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
            alt="profile"
          />
        </div>
      </nav> */}
        <main className="mainContainer">
          <div className="feed">
            <div className="article">
              <div className="user">
                <img
                  className="userImg"
                  src="/images/jihwan/a.png"
                  alt="이미지"
                />
                <div className="infoBox">
                  <span className="title">wecode_bootcamp</span>
                  <span className="subTitle">weCode - 위코드</span>
                </div>
                <div>
                  <img
                    className="dotImg"
                    src="/images/jihwan/dot.png"
                    alt="dot"
                  />
                </div>
              </div>
              <div className="feedContainer">
                <img
                  className="feedImg"
                  src="images/jihwan/feedImg.png"
                  alt="feedImg"
                />
                <Comment />
              </div>
            </div>
          </div>
          <div className="mainRight">
            <div className="user">
              <img
                className="userImg"
                src="/images/jihwan/a.png"
                alt="이미지"
              />
              <div className="infoBox">
                <span className="title">wecode_bootcamp</span>
                <span className="subTitle">weCode - 위코드</span>
              </div>
            </div>
            <div className="storyWrap">
              <div className="storySpan">
                <span className="story">스토리</span>
                <span className="viewAll">모두 보기</span>
              </div>
            </div>
            <div>3</div>
            <div>4</div>
          </div>
        </main>
      </section>
    </>
  );
};

export default Main;
