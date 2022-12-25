import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function LoginJisoo() {
  const [idValue, setIdValue] = useState('');
  const [pwValue, setPwValue] = useState('');

  const saveUserId = event => {
    setIdValue(event.target.value);
  };

  const saveUserPw = event => {
    setPwValue(event.target.value);
  };

  const loginBtn = !(idValue.includes('@') && pwValue.length >= 5);

  const navigate = useNavigate();

  const moveToMain = () => {
    navigate('/main-jisoo');
  };

  return (
    <div className="loginWrapper">
      <div className="container">
        <div className="logoSection">
          <h1 className="logoText">Westagram</h1>
        </div>
        <div className="loginSection">
          <input
            type="text"
            id="idInput"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            type="password"
            id="pwInput"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button className="loginBtn" disabled={loginBtn} onClick={moveToMain}>
            로그인
          </button>
        </div>
        <div className="forgetSection">
          <a className="moveToFindPw" href="#x">
            <p className="forgetPw">비밀번호를 잊으셨나요?</p>
          </a>
        </div>
      </div>
    </div>
  );
}

export default LoginJisoo;
