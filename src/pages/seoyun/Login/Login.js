import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.scss';

function Login() {
  const navigate = useNavigate();

  let [idValue, setIdValue] = useState('');
  let [pwValue, setPwValue] = useState('');

  const saveUserId = e => {
    setIdValue(e.target.value);
  };

  const saveUserPw = e => {
    setPwValue(e.target.value);
  };

  const idPwCheck = idValue.includes('@') && pwValue.length > 5;

  const giveClass = idPwCheck ? ' Activate' : ' Deactivate';

  return (
    <>
      <div className="container">
        <div className="header">
          <h1>Westagram</h1>
        </div>
        <input
          className="idBox"
          type="text"
          placeholder="전화번호, 사용자 이름 또는 이메일"
          onChange={saveUserId}
          value={idValue}
        />
        <input
          className="pwBox"
          type="password"
          placeholder="비밀번호"
          onChange={saveUserPw}
          value={pwValue}
        />
        <button
          className={'loginBtn' + giveClass}
          onClick={() => {
            idPwCheck
              ? navigate('/main-seoyun')
              : alert('아이디 또는 비밀번호를 확인하세요');
          }}
          isabled={idPwCheck}
        >
          로그인
        </button>
        {/* <button
          className={'loginBtn' + giveClass}
          onClick={() => {
            fetch('http://10.58.52.180:3000/signin', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json;charset=utf-8' },
              body: JSON.stringify({
                email: idValue,
                password: pwValue,
              }),
            })
              .then(response => response.json())
              .then(data => {
                console.log(data);
                localStorage.setItem('token', data.accessToken);
              });
          }}
        >
          Sign In
        </button> */}
        <div className="findPW">
          <p>비밀번호를 잊으셨나요?</p>
        </div>
      </div>
      <div className="signUpBox">
        <p>계정이 없으신가요?&nbsp;</p>
        <button
          className="signUp"
          onClick={() => {
            navigate('/signup-seoyun');
          }}
        >
          가입하기
        </button>
      </div>
    </>
  );
}

export default Login;
