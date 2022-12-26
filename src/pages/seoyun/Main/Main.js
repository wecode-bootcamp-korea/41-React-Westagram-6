import React from 'react';
import Nav from '../../../components/Nav/Nav';
import FeedBox from './components/FeedBox/FeedBox';
import RightBox from './components/RightBox/RightBox';
import './Main.scss';

function Main() {
  return (
    <>
      <Nav />
      <div className="mainWrapper">
        <FeedBox />
        <RightBox />
      </div>
    </>
  );
}

export default Main;
