import React from 'react';
import styled, { css } from 'styled-components';

import { SearchIcon, ThemeIcon } from '../components/UI/Icons';
import { ReactComponent as Logo } from '../img/logo.svg';

const NavbarWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  padding: 0 1em;
  max-width: 1260px;
  margin: auto;
  background-color: ${(props) => props.theme.colors.mainBackground};
  z-index: 999;
  transition: max-width 300ms ease, padding 300ms ease,
    box-shadow 300ms ease-in-out;
  ${(props) =>
    props.sticky &&
    css`
      max-width: 100%;
      padding: 0 1em;
      box-shadow: rgba(91, 93, 94, 0.1) 0px 8px 24px;
    `}

  a {
    padding-top: 8px;
    padding-bottom: 4px;
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

  .logo {
    width: 90px;
    transition: width 150ms ease;
  }

  .nav-left {
    display: flex;
  }

  .nav-left nav {
    display: none;
  }

  .nav-left-links {
    margin-left: 1em;
  }

  .nav-left-links li a {
    color: ${(props) => props.theme.colors.textPrimary};
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
    margin: 0;
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
    justify-content: center;
    margin: 0 1em;
    position: relative;
  }

  #theme-btn .tooltiptext {
    display: none;
    font-size: 1.4em;
    font-weight: 300;
    width: 150px;
    background-color: ${(props) => props.theme.colors.textPrimary};
    color: ${(props) => props.theme.colors.mainBackground};
    text-align: center;
    padding: 5px 0;
    border-radius: 10px;
    position: absolute;
    top: 100%;
    left: -140%;
    z-index: 1;
    -webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
  }

  #theme-btn:hover .tooltiptext {
    display: block;
  }

  #theme-btn svg {
    fill: ${(props) => props.theme.colors.textThird};
  }

  #theme-btn:hover {
    background-color: ${(props) => props.theme.colors.textThird};
    box-shadow: rgba(0, 0, 0, 0.25) 0px 4px 4px;
  }

  #theme-btn:hover svg {
    fill: ${(props) => props.theme.colors.mainBackground};
  }

  #login-btn {
    color: ${(props) => props.theme.colors.linkPrimary};
    display: inline-block;
    border-radius: 50vh;
    padding: 11px 8px;
    line-height: 1rem;
  }

  #login-btn:hover {
    background: ${(props) => props.theme.colors.btnSecondary};
  }
  #join-btn {
    display: inline-block;
    line-height: 1rem;
    background: #2062e1 none repeat scroll 0% 0%;
    color: #fff;
    border-radius: 50vh;
    padding: 11px 8px;
    margin: 0 0 0 1em;
  }

  #join-btn:hover {
    box-shadow: rgba(32, 98, 225, 0.25) 0px 4px 4px;
    background: rgb(32, 98, 225) none repeat scroll 0% 0%;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    ${(props) =>
      props.sticky &&
      css`
        padding: 0 3em;
      `}

    .nav-left nav {
      display: block;
    }
    .nav-left-links {
      margin-left: 3em;
    }

    #search-btn {
      margin: 0 1em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}) {
    position: sticky;
    top: 0;
    left: 0;
    .logo {
      width: 100%;
    }
    #join-btn,
    #login-btn {
      padding: 11px 24px;
    }
  }
`;

const Navbar = ({ themeHandler, isDarkMode, sticky }) => {
  return (
    <NavbarWrapper sticky={sticky}>
      <div className='nav-left'>
        <Logo className='logo' />
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
        <a href='#!' aria-label='Search'>
          <div id='search-btn'>
            <SearchIcon size={18} />
          </div>
        </a>
        <div className='divider'></div>
        <div>
          <button
            id='theme-btn'
            aria-label='Change Theme'
            onClick={() => themeHandler()}
          >
            <ThemeIcon size={18} backgroundColor='#f6f7f7' />
            <span className='tooltiptext'>
              Enable {isDarkMode ? 'Light' : 'Dark'} Mode
            </span>
          </button>
        </div>{' '}
        <div>
          <a id='login-btn' href='#!'>
            Log in
          </a>
        </div>
        <div>
          <a id='join-btn' href='#!'>
            Join now
          </a>
        </div>
      </div>
    </NavbarWrapper>
  );
};

export default Navbar;
