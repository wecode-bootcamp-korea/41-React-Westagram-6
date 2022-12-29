import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons';
import {
  faCompass,
  faHeart,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import React from 'react';
// import { compileStringAsync } from 'sass';
import './Nav.scss';

function Nav() {
  return (
    <>
      <nav>
        <div className="navContainer">
          <div className="logo">
            <FontAwesomeIcon icon={faInstagram} className="instagram" />
            <div className="header">
              <h1>Westagram</h1>
            </div>
          </div>
          <div>
            <input className="searchUsers" placeholder="검색" />
          </div>
          <div className="userOptions">
            <FontAwesomeIcon icon={faCompass} className="compass" />
            <FontAwesomeIcon icon={faHeart} className="heart" />
            <FontAwesomeIcon icon={faUser} className="user" />
          </div>
        </div>
      </nav>
      ;
    </>
  );
}

export default Nav;
