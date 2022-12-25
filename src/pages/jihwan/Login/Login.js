import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginJihwan() {
  const navigate = useNavigate();
  const toMain = () => {
    navigate('/main-jihwan');
  };

  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const saveUserId = e => {
    setId(e.target.value);
    console.log(e.target.value);
  };
  const saveUserPw = e => {
    setPw(e.target.value);
    console.log(e.target.value);
  };
  //const isValid = id.includes('@' && '.') && pw.length > 4 ? false : true;

  //const activeBtn = isValid === false ? 'activeBtn' : 'loginBtn';

  return (
    <div className="login">
      <div className="loginWrap">
        <header>
          <h1>Westagram</h1>
        </header>
        <div className="inputWrap">
          <input
            className="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            className="loginPw"
            type="password"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button className="loginBtn" onClick={toMain}>
            로그인
          </button>
        </div>
        <div className="forgotPw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginJihwan;
