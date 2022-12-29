import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
// import { compileStringAsync } from 'sass';
import './FeedBox.scss';
import {
  faArrowUpFromBracket,
  faEllipsis,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import CommentBox from '../CommentBox/CommentBox';

function FeedBox({
  profilePic,
  username,
  pic,
  likeId,
  likeProfilePic,
  likeNumber,
  feedContent,
}) {
  let [countLike, setPlusLike] = useState(likeNumber);
  let [likeHeart, setLikeHeart] = useState(false);

  let [commentObj, setCommentObj] = useState([
    {
      id: 1,
      username: 'phdjay',
      content: 'beautiful work',
    },
    {
      id: 2,
      username: 'ch.w.ch',
      content: 'wow',
    },
  ]);

  let [commentBoxValue, setCommentBoxValue] = useState('');

  const pressHeart = () => {
    setLikeHeart(!likeHeart);
    likeHeart ? setPlusLike(countLike - 1) : setPlusLike(countLike + 1);
  };

  // const pressCommentHeart = () => {
  //   setSmallHeart(!smallHeart);
  // };

  // const deleteComment = () => {
  //   let copy = [...commentObj];
  //   copy.splice(0, 1);
  //   setCommentObj(copy);
  // };

  const redHeart = likeHeart ? ' Activate' : ' Deactivate';
  // const smallRedHeart = smallHeart ? ' Activate' : ' Deactivate';

  return (
    <main>
      <div className="feedsContainer">
        <div className="profileBox">
          <div className="profile">
            <img src={profilePic} alt="profile" />
            <div className="idBox">
              <p>{username}</p>
            </div>
          </div>
          <div className="moreOptions">
            <FontAwesomeIcon icon={faEllipsis} className="ellipsis" />
          </div>
        </div>
        <div className="feedPic">
          <img src={pic} alt="feed" />
        </div>
        <div className="options">
          <FontAwesomeIcon
            icon={faHeart}
            className={'likeHeart' + redHeart}
            onClick={pressHeart}
          />
          <FontAwesomeIcon icon={faComment} className="comment" />
          <FontAwesomeIcon icon={faArrowUpFromBracket} className="arrowup" />
          <FontAwesomeIcon icon={faBookmark} className="bookmark" />
        </div>
        <div className="liked">
          <img src={likeProfilePic} alt="heart" />
          <p style={{ fontWeight: 'bold' }}>{likeId}</p>님&nbsp;
          <p style={{ fontWeight: 'bold' }}>외</p>&nbsp;
          <p style={{ fontWeight: 'bold' }}>{countLike}</p>
          <p style={{ fontWeight: 'bold' }}>명</p>
          <p>이 좋아합니다</p>
        </div>
        <div className="feedContent">
          <div className="feedContent_MyId">{username}</div>
          <div className="feedContent_MyWords">{feedContent}</div>
        </div>
        <div className="moreComments">댓글 10개 모두 보기</div>
        <div className="commentBox">
          {commentObj.map(function (a, i) {
            return (
              <CommentBox
                key={a.id}
                comment={a}
                onDelete={() => {
                  // console.dir(id);
                  let copy = [...commentObj];
                  copy.splice(i, 1);
                  setCommentObj(copy);
                }}
                // key 는 map 이랑 짝꿍이라서 여기에 있어야 해 / key 는 react 에서 가져가는 거라서 의미 없음 / props 로 못 넘김
                // 다른 변수들은 CommentBox Component 에서 관리하기 (comment 부분이니까)
                // 삭제하는 함수(onDelete) 는 Comment 데이터가 저장되어있는 모든 배열을 알아야 하는데 CommentBox Component 는 단 한 줄! 모든 데이터를 다 아는 게 이상해야 함
                // 따라서 onDelete 는 commentObj 를 아는 현재 Component 에서 관리하고 함수 이름만 CommentBox 에 넘겨주기
              />
            );
          })}
        </div>
        <div className="postUploadTime">2시간 전</div>
        <div className="writeComments">
          <input
            className="commentInput"
            type="text"
            placeholder="댓글 달기 ..."
            value={commentBoxValue}
            onChange={e => {
              setCommentBoxValue(e.target.value);
            }}
          />
          <button
            className="submitBtn"
            onClick={() => {
              let copy = [...commentObj];
              copy.push({
                id: commentObj.slice(-1)[0].id + 1,
                username: 'marshmellowthecat',
                content: commentBoxValue,
              });
              setCommentObj(copy);
              setCommentBoxValue('');
            }}
          >
            게시
          </button>
        </div>
      </div>
    </main>
  );
}

function FeedBoxContinue() {
  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(result => setMockData(result));
  });

  return (
    <div className="feedBoxes">
      {mockData.map(mockmock => {
        return (
          <FeedBox
            profilePic={mockmock.profilePic}
            username={mockmock.username}
            pic={mockmock.pic}
            likeId={mockmock.likeId}
            likeProfilePic={mockmock.likeProfilePic}
            likeNumber={mockmock.likeNumber}
            feedContent={mockmock.feedContent}
          />
        );
      })}
    </div>
  );
}

export default FeedBoxContinue;
