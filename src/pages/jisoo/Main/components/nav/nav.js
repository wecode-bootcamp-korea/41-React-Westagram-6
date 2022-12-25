import './nav.scss';

function Nav() {
  return (
    <div className="nav">
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
    </div>
  );
}

export default Nav;
