import React from 'react';
import './Main.scss';

function MainJisoo() {
  return (
    <div className="wrapper">
      <nav_bar>
        <div className="logo_section">
          <img
            alt="인스타그램_로고"
            className="instagram"
            src="images/jisoo/instagram.png"
          />
          <span className="slash"> | </span>
          <span className="logo">Westagram</span>
        </div>
        <div className="search_section">
          <img
            alt="돋보기"
            className="search_icon"
            src="/images/jisoo/search.png"
          />
          <input type="text" className="search_input" placeholder="검색" />
        </div>
        <div className="my_info_section">
          <a className="link_to_search" href="">
            <img
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/explore.png"
              alt="나침반"
              className="compass"
            />
          </a>
          <a href="#" className="link_to_like">
            <img
              alt="찜"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/heart.png"
              className="like"
            />
          </a>
          <a href="#" className="link_to_my_profile">
            <img
              alt="나의페이지"
              src="https://s3.ap-northeast-2.amazonaws.com/cdn.wecode.co.kr/bearu/profile.png"
              className="myPage"
            />
            <div id="nav_my_menu_box">
              <ul className="my_menu">
                <li className="profile_list">
                  <img src="/images/jisoo/user.png" />
                  프로필
                </li>
                <li className="bookmark_list">
                  <img src="/images/jisoo/bookmark-white.png" />
                  저장됨
                </li>
                <li className="setting_list">
                  <img src="/images/jisoo/settings.png" />
                  설정
                </li>
                <hr className="my_menu_line" />
                <li className="logout_list">로그아웃</li>
              </ul>
            </div>
          </a>
        </div>
      </nav_bar>
      <main>
        <div className="feeds_container">
          <article>
            <div className="feeds_user_info">
              <img
                src="/images/jisoo/penguin.jpg"
                alt="프로필"
                className="profile_img"
              />
              <span className="user_name">love_penguin</span>
            </div>
            <div className="feeds_content">
              <img
                alt="피드_이미지"
                src="/images/jisoo/babyPenguin.jpeg"
                className="feeds_content_img"
              />
              <div className="feeds_icon_section">
                <div className="feeds_icon_section_left">
                  <a href="#">
                    <img
                      alt="좋아요"
                      src="/images/jisoo/redHeart.png"
                      className="heart_img"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt="메세지"
                      src="/images/jisoo/speech-bubble.png"
                      className="bubble_img"
                    />
                  </a>
                  <a href="#">
                    <img
                      alt="공유"
                      src="/images/jisoo/upload.png"
                      className="upload_img"
                    />
                  </a>
                </div>
                <div className="feeds_icon_section_right">
                  <a href="#">
                    <img
                      alt="북마크"
                      src="/images/jisoo/bookmark-white.png"
                      className="bookmark_img"
                    />
                  </a>
                </div>
              </div>
            </div>
            <div className="feeds_under_section">
              <div className="feeds_count_like_user">
                <img
                  alt="유저프로필"
                  src="/images/jisoo/fox.jpg"
                  className="like_img"
                />
                <p className="count_like">
                  <span className="user_name">aineworld</span>님 외
                  <span className="count_people">10</span>명이 좋아합니다.
                </p>
              </div>
              <p className="feeds_user_content">
                <span className="user_name">love_penguin</span> 날씨가 추워서
                펭귄모드됨ㅠ
              </p>
              <div id="feeds_comment_section">
                <p className="comment">
                  <span className="user_name">naceosecius</span> 지금 눈 펑펑
                  온다 감기 조심해😖
                </p>
              </div>
              <div className="feeds_comment_register_section">
                <input
                  type="text"
                  className="comment_input"
                  placeholder="댓글 달기..."
                />
                <button className="comment_btn_register" disabled="true">
                  게시
                </button>
              </div>
            </div>
          </article>
        </div>
        <div className="feeds_container_right">
          <div className="feeds_right_user_info">
            <img
              alt="프로필"
              src="/images/jisoo/penguin.jpg"
              className="right_profile_img"
            />
            <div className="user_name_section">
              <span className="user_name">love_penguin</span>
              <p className="user_under_name">WeCode | 위코드</p>
            </div>
          </div>
          <div className="feeds_right_story_section">
            <div className="feeds_right_story_nav">
              <span className="feeds_right_category">스토리</span>
              <a href="#" className="link_to_view">
                <span className="feeds_right_view">모두 보기</span>
              </a>
            </div>
            <div className="feeds_right_story_user_list">
              <div className="feeds_right_user_info">
                <div className="user_profile_rectangle">
                  <img
                    alt="프로필"
                    src="/images/jisoo/sleepy_dog.jpeg"
                    className="story_profile_img"
                  />
                </div>
                <div className="user_name_section">
                  <span className="user_name">I_am_Sleepy</span>
                  <p className="user_last_visit">1시간 전</p>
                </div>
              </div>
              <div className="feeds_right_user_info">
                <div className="user_profile_rectangle">
                  <img
                    alt="프로필"
                    src="/images/jisoo/so_cute.jpg"
                    className="story_profile_img"
                  />
                </div>
                <div className="user_name_section">
                  <span className="user_name">SoCuteCow</span>
                  <p className="user_last_visit">4시간 전</p>
                </div>
              </div>
              <div className="feeds_right_user_info">
                <div className="user_profile_rectangle">
                  <img
                    alt="프로필"
                    src="/images/jisoo/meong_cat.jpeg"
                    className="story_profile_img"
                  />
                </div>
                <div className="user_name_section">
                  <span className="user_name">mumu_00</span>
                  <p className="user_last_visit">2시간 전</p>
                </div>
              </div>
              <div className="feeds_right_user_info">
                <div className="user_profile_rectangle">
                  <img
                    alt="프로필"
                    src="/images/jisoo/squirrel.jpg"
                    className="story_profile_img"
                  />
                </div>
                <div className="user_name_section">
                  <span className="user_name">whereIsDotori</span>
                  <p className="user_last_visit">1시간 전</p>
                </div>
              </div>
              <div className="feeds_right_user_info">
                <div className="user_profile_rectangle">
                  <img
                    alt="프로필"
                    src="/images/jisoo/panda.jpg"
                    className="story_profile_img"
                  />
                </div>
                <div className="user_name_section">
                  <span className="user_name">paaaanda</span>
                  <p className="user_last_visit">2시간 전</p>
                </div>
              </div>
            </div>
          </div>
          <div className="feeds_right_follow_section">
            <div className="feeds_right_follow_nav">
              <span className="feeds_right_category">회원님을 위한 추천</span>
              <a href="#" className="link_to_view">
                <span className="feeds_right_view">모두 보기</span>
              </a>
            </div>
            <div className="feeds_right_follow_user_info">
              <div className="feeds_follow_user_img_section">
                <img
                  alt="프로필"
                  src="/images/jisoo/squirrel.jpg"
                  className="follow_profile_img"
                />
              </div>
              <div className="user_follow_name_section">
                <div className="user_follow_row">
                  <span className="user_name">whereIsDotori</span>
                  <p className="user_follow">회원님을 팔로우합니다</p>
                </div>
                <button className="user_follow_btn">팔로우</button>
              </div>
            </div>
            <div className="feeds_right_follow_user_info">
              <div className="feeds_follow_user_img_section">
                <img
                  alt="프로필"
                  src="/images/jisoo/panda.jpg"
                  className="follow_profile_img"
                />
              </div>
              <div className="user_follow_name_section">
                <div className="user_follow_row">
                  <span className="user_name">paaaanda</span>
                  <p className="user_follow">회원님을 팔로우합니다</p>
                </div>
                <button className="user_follow_btn">팔로우</button>
              </div>
            </div>
            <div className="feeds_right_follow_user_info">
              <div className="feeds_follow_user_img_section">
                <img
                  alt="프로필"
                  src="/images/jisoo/meong_cat.jpeg"
                  className="follow_profile_img"
                />
              </div>
              <div className="user_follow_name_section">
                <div className="user_follow_row">
                  <span className="user_name">mumu_00</span>
                  <p className="user_follow">회원님을 팔로우합니다</p>
                </div>
                <button className="user_follow_btn">팔로우</button>
              </div>
            </div>
          </div>
          <footer>
            <ul className="footer_top">
              <a href="">
                <li>instagram 정보</li>
              </a>
              ・
              <a href="">
                <li>지원</li>
              </a>
              ・
              <a href="">
                <li>홍보 센터</li>
              </a>
              ・
              <a href="">
                <li>API</li>
              </a>
              ・
              <a href="">
                <li>채용 정보</li>
              </a>
            </ul>
            <ul className="footer_bottom">
              <a href="">
                <li>개인정보처리방침</li>
              </a>
              ・
              <a href="">
                <li>약관</li>
              </a>
              ・
              <a href="">
                <li>디렉터리</li>
              </a>
              ・
              <a href="">
                <li>프로필</li>
              </a>
              ・
              <a href="">
                <li>해시태그</li>
              </a>
              ・
              <a href="">
                <li>언어</li>
              </a>
            </ul>
            <p className="footer_instagram">@ 2019 INSTAGRAM</p>
          </footer>
        </div>
      </main>
    </div>
  );
}

export default MainJisoo;
