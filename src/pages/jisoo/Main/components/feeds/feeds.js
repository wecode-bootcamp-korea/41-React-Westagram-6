import './feeds.scss';

function Feeds() {
  return (
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
              <span className="user_name">naceosecius</span> 지금 눈 펑펑 온다
              감기 조심해😖
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
  );
}

export default Feeds;
