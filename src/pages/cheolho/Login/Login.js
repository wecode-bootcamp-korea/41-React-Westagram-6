import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../../styles/seoyun/common.scss';
import '../../../styles/seoyun/reset.scss';
import './Login.scss';

const Login = () => {
  const navigate = useNavigate();
  const [id, setId] = useState('');
  const [pw, setPw] = useState('');

  const goToMain = () => {
    navigate('/main');
  };

  function handleInput(event) {
    setId(event.target.value);
  }

  function handlePwInput(event) {
    setPw(event.target.value);
    console.log('pw', pw);
  }

  return (
    <div className="Login">
      <div className="wrap">
        <div className="container">
          <div className="inner">
            <header className="header">
              <h1>
                <span className="header_tit">로고</span>
                <a href="#" className="page_move">
                  <img src="images/cheolho/1600px-Instagram_logo.svg.png" />
                </a>
              </h1>
            </header>
            <form className="form">
              <div className="input_box">
                <input
                  id="id"
                  type="text"
                  placeholder="전화번호, 사용자 이름 또는 이메일"
                  onChange={handleInput}
                />
              </div>
              <div className="input_box">
                <input
                  id="password"
                  type="password"
                  placeholder="비밀번호"
                  onChange={handlePwInput}
                />
              </div>
              <div className="button_box">
                <button
                  type="button"
                  className={
                    id.includes('@') && pw.length >= 5 ? 'btnOn' : 'btn'
                  }
                  onClick={goToMain}
                  disabled={id.includes('@') && pw.length >= 5 ? false : true}
                >
                  <span>로그인</span>
                </button>
              </div>
            </form>
            <div className="password_forget">
              <a href className="page_move">
                <span>비밀번호를 잊으셨나요?</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
