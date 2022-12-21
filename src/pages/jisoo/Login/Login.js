import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginJisoo() {
  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/main-jisoo');
  };

  return (
    <div className="outer-box">
      <div className="container">
        <div className="logo_sec">
          <h1 className="logo_text">Westagram</h1>
        </div>
        <div className="login_sec">
          <input
            type="text"
            id="id_input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input type="password" id="pw_input" placeholder="비밀번호" />
          <button className="login_btn" onClick={moveToMain}>
            로그인
          </button>
        </div>
        <div className="forgot_sec">
          <a className="move_to_find_pw" href="#">
            <p className="forgot_pw">비밀번호를 잊으셨나요?</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginJisoo;
