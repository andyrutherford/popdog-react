import React from 'react';
import styled from 'styled-components';

import { SearchIcon, ThemeIcon } from '../components/UI/Icons';

const NavbarWrapper = styled.div`
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  max-width: 1260px;
  margin: auto;

  a {
    padding-top: 8px;
    padding-bottom: 4px;
    margin-right: 24px;
    color: #000;
    text-decoration: none;
    font-weight: bold;
  }

  li {
    display: flex;
    align-items: center;
  }

  nav {
    margin: auto;
  }
  nav ul {
    display: flex;
  }

  .nav-left {
    display: flex;
  }

  .nav-left-links {
    margin-left: 40px;
  }

  .logo {
    font-weight: 1000;
    color: #f84443;
    letter-spacing: -3px;
  }

  .divider {
    height: 24px;
    width: 1px;
    display: block;
    background-color: rgb(227, 232, 235);
  }

  .nav-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    right: 16px;
  }

  #search-btn {
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 0 15px;
  }

  #theme-btn {
    padding: 10px;
    background-color: #f6f7f7;
    border-radius: 100%;
    display: flex;
    align-items: center;
    margin: 0 15px;
  }

  #login-btn {
    color: ${(props) => props.theme.colors.btnPrimary};
  }
  #join-btn {
    background: ${(props) => props.theme.colors.btnPrimary} none repeat scroll
      0% 0%;
    color: #fff;
    border-radius: 50vh;
    padding: 11px 24px;
  }
`;

const Navbar = () => {
  return (
    <NavbarWrapper>
      <div className='nav-left'>
        <h1 className='logo'>Popdog</h1>
        <nav>
          <ul className='nav-left-links'>
            <li>
              <a href='#!'>Games</a>
            </li>
            <li>
              <a href='#!'>Streams</a>
            </li>
            <li>
              <a href='#!'>Esports</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className='nav-right'>
        <div id='search-btn'>
          <SearchIcon size={18} />
        </div>
        <div className='divider'></div>
        <div id='theme-btn'>
          <ThemeIcon size={18} backgroundColor='#f6f7f7' />
        </div>{' '}
        <a id='login-btn' href='#!'>
          Log in
        </a>
        <a id='join-btn' href='#!'>
          Join Now
        </a>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
