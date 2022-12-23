import React from 'react';
import './Login.scss';

function LoginJihwan() {
  return (
    <div class="loginContainer">
      <div className="loginWrap">
        <header>
          <h1>Westagram</h1>
        </header>
        <div class="inputWrap">
          <input
            class="loginId"
            type="text"
            placeholder="전화번호, 사용자 이름 또는 이메일"
          />
          <input class="loginPw" type="password" placeholder="비밀번호" />
          <button class="loginBtn">로그인</button>
        </div>
        <div class="forgotPw">
          <a href="#">비밀번호를 잊으셨나요?</a>
        </div>
      </div>
    </div>
  );
}

export default LoginJihwan;
