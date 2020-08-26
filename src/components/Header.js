import React from 'react';
import styled from 'styled-components';

import dog from '../img/dog.png';
import twitch from '../img/twitch.svg';
import youtube from '../img/youtube.svg';
import stars from '../img/stars.svg';

const HeaderWrapper = styled.div`
position: relative;

h1 {
    font-size: 1.8rem;
    font-weight: 600;
    letter-spacing: -1px;
    margin: .5em 0;
}

p {
    font-size: 0.9rem;
    font-weight: 400;
    margin: 16px 0 32px;
}

a {

    padding: 10px 20px;
    background: ${(props) => props.theme.colors.btnPrimary};
    color: #fff;
    border-radius: 50vh;
    text-decoration: none;
}

.header-background {
    background-image: url(${stars});
    background-position: right center;
    background-size: contain;
    background-repeat: no-repeat;
    opacity: 0.2;
    inset: 0px 0px 20%;
    position: absolute;
}

.header-content {
    padding: 32px 0;
}

.header-left {
    text-align: center;
}

.social-icons-right {
    width: 175px;
    position: relative;
}



.dog-img {
    display: none;
    max-width: 328px;
    z-index: 1;
}

@media (min-width: 956px) {
    h1 {
        font-size: 3rem;
        font-weight: 800;
        line-height: 1;
    }

    .header-content {
        display: flex;
        justify-content: space-between;
    }

    .header-left {
        max-width: 600px;
        text-align: left;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: flex-start;
    }

    .header-right {
        display: flex;
    }

    .social-icons-right {
        width: 175px;
        position: relative;
    }

    .dog-img {
        display: inline;
    }

    #twitch {
        position: relative;
        top: 54px;
        left: calc(100% - 111px);
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
        background-image: url(${twitch});
    }
    #youtube {
        position: relative;
        top: 118px;
        left: calc(100% - 167px);
        width: 80px;
        height: 80px;
        background-repeat: no-repeat;
        background-image: url(${youtube});
    }
})
`;

const Header = () => {
  return (
    <HeaderWrapper>
      <div className='header-background'></div>
      <div className='header-content'>
        {' '}
        <div className='header-left'>
          <h1 className='header-intro'>A new way to find out what's on.</h1>
          <p className='header-description'>
            Sign up with your Twitch or YouTube (soon!) account and watch all of
            your favorite streams here on Popog. Want more info? Check out our
            video.
          </p>
          <a className='btn' href='#!'>
            Sign up with Popdog
          </a>
          <div className='social-icons-left'></div>
        </div>
        <div className='header-right'>
          <div className='social-icons-right'>
            <div id='twitch'></div>
            <div id='youtube'></div>
          </div>
          <img className='dog-img' src={dog} alt='dog' />
        </div>
      </div>
    </HeaderWrapper>
  );
};

export default Header;
