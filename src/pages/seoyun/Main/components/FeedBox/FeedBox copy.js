import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faComment } from '@fortawesome/free-regular-svg-icons';
import React, { useEffect, useState } from 'react';
// import { compileStringAsync } from 'sass';
import './FeedBox.scss';
import {
  faArrowUpFromBracket,
  faEllipsis,
  // faXmark,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import CommentBox from '../CommentBox/CommentBox';

function FeedBox() {
  let [countLike, setPlusLike] = useState(507);
  let [likeHeart, setLikeHeart] = useState(false);

  // let [smallHeart, setSmallHeart] = useState(false);

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

  const [mockData, setMockData] = useState([]);

  useEffect(() => {
    fetch('/data/mock.json')
      .then(response => response.json())
      .then(result => setMockData(result));
  });

  return (
    <main>
      {mockData.map(mockmock => {
        return (
          <div className="feedsContainer" key={mockmock.id}>
            <div className="profileBox">
              <div className="profile">
                <img src={mockmock.profilePic} alt="profile" />
                <div className="idBox">
                  <p>{mockmock.username}</p>
                </div>
              </div>
              <div className="moreOptions">
                <FontAwesomeIcon icon={faEllipsis} className="ellipsis" />
              </div>
            </div>
            <div className="feedPic">
              <img src={mockmock.pic} alt="feed" />
            </div>
            <div className="options">
              <FontAwesomeIcon
                icon={faHeart}
                className={'likeHeart' + redHeart}
                onClick={pressHeart}
              />
              <FontAwesomeIcon icon={faComment} className="comment" />
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                className="arrowup"
              />
              <FontAwesomeIcon icon={faBookmark} className="bookmark" />
            </div>
            <div className="liked">
              <img
                src="https://images.unsplash.com/photo-1615593249123-212337d9f4fd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2980&q=80"
                alt="heart"
              />
              <p style={{ fontWeight: 'bold' }}>{mockmock.likeId}</p>님&nbsp;
              <p style={{ fontWeight: 'bold' }}>외</p>&nbsp;
              <p style={{ fontWeight: 'bold' }}>{countLike}</p>
              <p style={{ fontWeight: 'bold' }}>명</p>
              <p>이 좋아합니다</p>
            </div>
            <div className="feedContent">
              <div className="feedContent_MyId">{mockmock.username}</div>
              <div className="feedContent_MyWords">{mockmock.feedContent}</div>
            </div>
            <div className="moreComments">댓글 10개 모두 보기</div>
            <div className="commentBox">
              {commentObj.map(function (a, i) {
                return (
                  <CommentBox
                    key={a.id}
                    comment={a}
                    onDelete={id => {
                      // console.dir(id);
                      console.log(id);
                      let copy = [...commentObj];
                      copy.splice(i, 1);
                      setCommentObj(copy);
                    }}
                    // key 는 map 이랑 짝꿍이라서 여기에 있어야 해 / key는 react에서 가져가는 거라서 의미 없음 / props 로 못 넘겨
                    // 다른 변수들은 comment 박스에서 관리해
                    // 삭제하는 함수는 모든 배열을 알아야 하는데 코멘트 박스는 한줄인데 다 아는 게 이상함
                    // 삭제하는 함수는 모든 코멘트 (배열)를 아는 여기서 관리하고 함수 이름만 넘겨줘
                  />
                );
                // return (
                //   <div className="comment" key={i}>
                //     <div className="commentLineLeft">
                //       <span className="commentId">{a.username}</span>
                //       <span className="commentContent">{a.content}</span>
                //     </div>
                //     <div className="commentLineRight">
                //       <FontAwesomeIcon
                //         icon={faHeart}
                //         className={'smallHeart' + smallRedHeart}
                //         onClick={pressCommentHeart}
                //       />
                //       <button
                //         className="xmarkButton"
                //         onClick={() => {
                //           let copy = [...commentObj];
                //           copy.splice(i, 1);
                //           setCommentObj(copy);
                //         }}
                //       >
                //         <FontAwesomeIcon icon={faXmark} className="xmark" />
                //       </button>
                //     </div>
                //   </div>
                // );
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
                  console.log(commentObj);
                }}
              >
                게시
              </button>
            </div>
          </div>
        );
      })}
    </main>
  );
}

export default FeedBox;
