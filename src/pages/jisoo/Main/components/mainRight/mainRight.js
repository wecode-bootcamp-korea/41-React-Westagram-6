import './mainRight.scss';

function MainRight() {
  return (
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
  );
}

export default MainRight;
