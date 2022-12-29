import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

// 철호의 컴포넌트
import LoginCheolho from './pages/cheolho/Login/Login';
import MainCheolho from './pages/cheolho/Main/Main';

// 지환의 컴포넌트
import LoginJihwan from './pages/jihwan/Login/Login';
import MainJihwan from './pages/jihwan/Main/Main';

// 지수의 컴포넌트
import LoginJisoo from './pages/jisoo/Login/Login';
import MainJisoo from './pages/jisoo/Main/Main';

// 서윤의 컴포넌트
import LoginSeoyun from './pages/seoyun/Login/Login';
import MainSeoyun from './pages/seoyun/Main/Main';
import SignupSeoyun from './pages/seoyun/Signup/Signup';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-cheolho" element={<LoginCheolho />} />
        <Route path="/main-cheolho" element={<MainCheolho />} />
        <Route path="/login-jihwan" element={<LoginJihwan />} />
        <Route path="/main-jihwan" element={<MainJihwan />} />
        <Route path="/login-jisoo" element={<LoginJisoo />} />
        <Route path="/main-jisoo" element={<MainJisoo />} />
        <Route path="/login-seoyun" element={<LoginSeoyun />} />
        <Route path="/main-seoyun" element={<MainSeoyun />} />
        <Route path="/signup-seoyun" element={<SignupSeoyun />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
