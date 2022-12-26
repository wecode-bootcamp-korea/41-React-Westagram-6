import { useState, React } from 'react';
import './Main.scss';

const Main = () => {
  const [comments, setComments] = useState([]);

  const [commentMsg, setCommentMsg] = useState('');

  const handleInputComment = e => {
    setCommentMsg(e.target.value);
    console.log(e.target.value);
  };

  const handleCommentSubmit = e => {
    e.preventDefault();

    if (commentMsg === '') return alert('댓글 내용을 입력해주세요');

    setComments(prev => [...prev, commentMsg]);
    return setCommentMsg('');
  };

  let activeSubmit = () => {
    if (commentMsg === '') return true;
  };

  let registerBtnOn = activeSubmit() ? 'registerBtn' : 'registerBtnActive';

  return (
    <section className="main">
      <nav className="nav">
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
      </nav>
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
                <img className="dotImg" src="images/jihwan/dot.png" alt="dot" />
              </div>
            </div>
            <div className="feedContainer">
              <img
                className="feedImg"
                src="images/jihwan/feedImg.png"
                alt="feedImg"
              />
              <div className="feedWrap">
                <div className="feedSubImg">
                  <img
                    className="feedHeart"
                    src="images/jihwan/heart.png"
                    alt="feedHeart"
                  />
                  <img
                    className="feedComment"
                    src="images/jihwan/comment.png"
                    alt="feedComment"
                  />
                  <img
                    className="feedUpload"
                    src="images/jihwan/upload.png"
                    alt="feedUpload"
                  />
                  <img
                    className="feedBookmark"
                    src="images/jihwan/bookmark.png"
                    alt="feedBookmark"
                  />
                </div>
                <div className="contents">
                  <img
                    className="contentImg"
                    src="images/jihwan/profile2.png"
                    alt="contentImg"
                  />
                  <span className="spanBold">
                    <span className="spBold1">ddd</span>님
                    <span className="spBold2">외 11명</span>이 좋아합니다
                  </span>
                  <div className="contentSpanWrap">
                    <ul>
                      {comments.map(comment => {
                        return (
                          <li>
                            {}
                            {comment}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <form onSubmit={handleCommentSubmit}>
                    <div className="comment">
                      <input
                        onChange={handleInputComment}
                        value={commentMsg}
                        className="commentInput"
                        type="text"
                        placeholder="댓글 달기..."
                      />
                      <button
                        type="submit"
                        className={registerBtnOn}
                        onClick={handleCommentSubmit}
                      >
                        게시
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mainRight">
          <div className="user">
            <img className="userImg" src="/images/jihwan/a.png" alt="이미지" />
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
  );
};

export default Main;
