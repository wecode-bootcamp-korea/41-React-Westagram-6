import React from 'react';
import Nav from '../../../components/Nav/Nav';
import FeedBoxContinue from './components/FeedBox/FeedBox';
import RightBox from './components/RightBox/RightBox';
import './Main.scss';

function Main() {
  return (
    <>
      <Nav />
      <div className="mainWrapper">
        <FeedBoxContinue />
        <RightBox />
      </div>
    </>
  );
}

export default Main;
