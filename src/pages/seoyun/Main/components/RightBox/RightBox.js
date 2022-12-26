import React from 'react';
// import { compileStringAsync } from 'sass';
import './RightBox.scss';

function RightBox() {
  return (
    <>
      <div className="rightContainer">
        <div className="myProfileBox">
          <img
            src="https://images.unsplash.com/photo-1574158622682-e40e69881006?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
            alt="myPic"
          />
          <div className="myBox">
            <div className="myId">marshmellowthecat</div>
            <div className="explanation">a grey cat from London</div>
          </div>
        </div>
        <div className="storyBox">
          <div className="storyTitle">
            <span className="story">스토리</span>
            <span className="showMeAll">모두 보기</span>
          </div>
          <div className="otherUsers">
            <div className="user1">
              <img
                src="https://images.unsplash.com/photo-1525498128493-380d1990a112?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80"
                alt="profile"
              />
              <div className="userInfo">
                <div className="userId">greenplants.official</div>
                <div className="storyUploadTime">15분 전</div>
              </div>
            </div>
            <div className="user2">
              <img
                src="https://images.unsplash.com/photo-1665932572907-3157f036b740?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1473&q=80"
                alt="profile"
              />
              <div className="userInfo">
                <div className="userId">puppynana</div>
                <div className="storyUploadTime">50분 전</div>
              </div>
            </div>
            <div className="user2">
              <img
                src="https://images.unsplash.com/photo-1632965053530-2475c7b91f58?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="profile"
              />
              <div className="userInfo">
                <div className="userId">we_can_nail_it</div>
                <div className="storyUploadTime">1시간 전</div>
              </div>
            </div>
            <div className="user2">
              <img
                src="https://images.unsplash.com/photo-1588097211669-71cefc744956?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="profile"
              />
              <div className="userInfo">
                <div className="userId">angelakelson</div>
                <div className="storyUploadTime">2시간 전</div>
              </div>
            </div>
          </div>
        </div>
        <div className="recommendationBox">
          <div className="recommendationTitle">
            <span className="recommend">회원님을 위한 추천</span>
            <span className="showMeAll">모두 보기</span>
          </div>
          <div className="youMightKnowThem">
            <div className="user2">
              <img
                src="https://images.unsplash.com/photo-1626203049137-2f90726e5bff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="profile"
              />
              <div className="userInfo">
                <div className="userId">bonappetit.ny</div>
                <div className="commonFriends">
                  hope.luv님 외 2명이 팔로우 ...
                </div>
              </div>
              <div className="follow">팔로우</div>
            </div>
            <div className="user2">
              <img
                src="https://images.unsplash.com/photo-1563181529-106672fccf0c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1480&q=80"
                alt="profile"
              />
              <div className="userInfo">
                <div className="userId">music.collection</div>
                <div className="commonFriends">Westagram 신규 가입</div>
              </div>
              <div className="follow">팔로우</div>
            </div>
          </div>
        </div>
        <p className="info">
          소개&nbsp;∙&nbsp;도움말&nbsp;∙&nbsp;홍보&nbsp;센터&nbsp;∙&nbsp;API&nbsp;∙&nbsp;채용&nbsp;정보&nbsp;∙&nbsp;개인정보처리방침&nbsp;∙
          <br />
          약관&nbsp;∙&nbsp;위치&nbsp;∙&nbsp;언어
          <br />
          <br />@ 2022 INSTAGRAM FROM META
        </p>
      </div>
      ;
    </>
  );
}

export default RightBox;
