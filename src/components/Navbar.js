import React from 'react';
import styled from 'styled-components';

import { SearchIcon, ThemeIcon } from '../components/UI/Icons';
import { ReactComponent as Logo } from '../img/logo.svg';

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
  border-bottom: 1px solid grey;

  a {
    padding-top: 8px;
    padding-bottom: 4px;
    margin-right: 0.5em;
    color: #000;
    text-decoration: none;
    font-weight: 600;
    font-size: 0.875rem;
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

  .nav-left-links li a {
    color: ${(props) => props.theme.colors.textPrimary};
    transition: 250ms;
    margin-right: 1.5em;
  }

  .nav-left-links li a:hover {
    color: ${(props) => props.theme.colors.btnPrimary};
  }

  .divider {
    height: 24px;
    width: 1px;
    display: block;
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }

  .nav-right {
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
  }

  #search-btn {
    padding: 10px;
    display: flex;
    align-items: center;
    margin: 0 15px;
    border-radius: 50vh;
  }

  #search-btn:hover {
    background-color: ${(props) => props.theme.colors.hoverSecondary};
  }

  #search-btn svg {
    stroke: ${(props) => props.theme.colors.textThird};
  }

  #theme-btn {
    width: 3.5em;
    height: 3.5em;
    padding: 1em;
    background-color: ${(props) => props.theme.colors.hoverSecondary};
    border: none;
    border-radius: 100%;
    color: ${(props) => props.theme.colors.textPrimary};
    display: flex;
    align-items: center;
    margin: 0 15px;
  }

  #theme-btn svg {
    stroke: ${(props) => props.theme.colors.textThird};
  }

  #theme-btn:hover {
    background-color: ${(props) => props.theme.colors.textThird};
  }

  #theme-btn:hover svg {
    stroke: ${(props) => props.theme.colors.mainBackground};
  }

  #login-btn {
    color: ${(props) => props.theme.colors.btnPrimary};
    display: inline-block;
    border-radius: 50vh;
    padding: 11px 24px;
    line-height: 1rem;
  }

  #login-btn:hover {
    background: ${(props) => props.theme.colors.btnSecondary};
  }
  #join-btn {
    display: inline-block;
    line-height: 1rem;
    background: ${(props) => props.theme.colors.btnPrimary} none repeat scroll
      0% 0%;
    color: #fff;
    border-radius: 50vh;
    padding: 11px 24px;
    margin: 0;
  }
`;

const Navbar = ({ themeHandler, isDarkMode }) => {
  return (
    <NavbarWrapper>
      <div className='nav-left'>
        <Logo />
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
        <a href='#!'>
          <div id='search-btn'>
            <SearchIcon size={18} />
          </div>
        </a>
        <div className='divider'></div>
        <div>
          <button id='theme-btn' onClick={() => themeHandler()}>
            <ThemeIcon size={18} backgroundColor='#f6f7f7' />
          </button>
        </div>{' '}
        <div>
          <a id='login-btn' href='#!'>
            Log in
          </a>
        </div>
        <div>
          <a id='join-btn' href='#!'>
            Join Now
          </a>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
