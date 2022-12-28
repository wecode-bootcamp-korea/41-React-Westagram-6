import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
    <div className="login_wrapper">
      <div className="container">
        <div className="logo_section">
          <h1 className="logo_text">Westagram</h1>
        </div>
        <div className="login_section">
          <input
            type="text"
            id="id_input"
            placeholder="전화번호, 사용자 이름 또는 이메일"
            onChange={saveUserId}
          />
          <input
            type="password"
            id="pw_input"
            placeholder="비밀번호"
            onChange={saveUserPw}
          />
          <button
            className="login_btn"
            disabled={loginBtn}
            onClick={moveToMain}
          >
            로그인
          </button>
        </div>
        <div className="forget_section">
          <Link to="/">
            <p className="forget_pw">비밀번호를 잊으셨나요?</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginJisoo;
