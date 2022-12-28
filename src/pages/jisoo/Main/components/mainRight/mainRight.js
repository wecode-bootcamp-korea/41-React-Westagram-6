import { Aside } from '../aside/aside';
import './mainRight.scss';

function MainRight() {
  return (
    <div className="main_right_wrapper">
      <div className="my_profile">
        <img
          alt="프로필"
          src="/images/jisoo/penguin.jpg"
          className="profile_img"
        />
        <div className="my_name_section">
          <span className="my_name">love_penguin</span>
          <p className="my_name_under">WeCode | 위코드</p>
        </div>
      </div>
      <div className="story_section">
        <div className="story_nav">
          <span className="category">스토리</span>
          <a href="#x" className="link_to_view">
            <span className="view_all">모두 보기</span>
          </a>
        </div>
        <div className="story_user_list">
          <div className="user_info">
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
          <div className="user_info">
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
          <div className="user_info">
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
          <div className="user_info">
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
          <div className="user_info">
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
      <div className="follow_section">
        <div className="follow_nav">
          <span className="category">회원님을 위한 추천</span>
          <a href="#x" className="link_to_view">
            <span className="view">모두 보기</span>
          </a>
        </div>
        <div className="follow_user_info">
          <div className="follow_user_img_section">
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
        <div className="follow_user_info">
          <div className="follow_user_img_section">
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
        <div className="follow_user_info">
          <div className="follow_user_img_section">
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
      <aside>
        <Aside />
        <p className="aside_instagram">@ 2019 INSTAGRAM</p>
      </aside>
    </div>
  );
}

export default MainRight;
