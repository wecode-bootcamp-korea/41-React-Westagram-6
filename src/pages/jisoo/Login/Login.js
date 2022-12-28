import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './Login.scss';

function LoginJisoo() {
  const [inputValues, setInputValues] = useState({
    id: '',
    pw: '',
  });

  const handleValue = event => {
    const { value } = event.target;
    setInputValues({ ...inputValues, [event.target.name]: value });
  };

  const { id, pw } = inputValues;

  const loginBtn = !(id.includes('@') && pw.length >= 5);

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
            name="id"
            onChange={handleValue}
          />
          <input
            type="password"
            id="pw_input"
            name="pw"
            placeholder="비밀번호"
            onChange={handleValue}
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
