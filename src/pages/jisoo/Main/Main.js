import React from 'react';
import Nav from './../../../components/Nav/Nav';
import Feeds from './components/feeds/feeds';
import MainRight from './components/mainRight/mainRight';
import './Main.scss';

function MainJisoo() {
  return (
    <>
      <Nav />
      <div className="wrapper">
        <Feeds />
        <MainRight />
      </div>
    </>
  );
}

export default MainJisoo;
