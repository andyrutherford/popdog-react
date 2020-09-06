import React from 'react';
import styled from 'styled-components';

import { ReactComponent as Logo } from '../img/logo-icon.svg';
import { ReactComponent as DiscordIcon } from '../img/discord.svg';
import { ReactComponent as TwitterIcon } from '../img/twitter.svg';
import { ReactComponent as InstagramIcon } from '../img/instagram.svg';

const FooterWrapper = styled.div`
  background: rgba(0, 0, 0, 0) ${(props) => props.theme.colors.footerBackground}
    repeat scroll 0% 0%;
  padding-top: 1.5em;
  padding-bottom: 2em;
  font-size: 0.875rem;
  font-weight: 300;

  a,
  a:visited,
  p {
    color: ${(props) => props.theme.colors.footerLink};
  }

  a:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  .footer-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: auto;
  }
  .footer-left {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1rem;
  }

  .logo {
    width: 56px;
    margin-bottom: 2rem;
  }

  .footer-links {
    display: flex;
  }

  .footer-links-left {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    border-right: 1px solid ${(props) => props.theme.colors.linePrimary};
    padding-right: 1.5rem;
    width: 50%;
  }

  .footer-links-right {
    display: flex;
    flex-direction: column;
    padding-left: 1.5rem;
    width: 50%;
    white-space: nowrap;
  }

  .social-icons {
    color: #919597;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 1.5rem 0;
  }

  .social-icons-link:hover {
    color: ${(props) => props.theme.colors.socialLinkHover};
  }

  .social-icons svg {
    margin: 0 0.5rem;
  }

  .legal {
    text-align: center;
  }

  @media (min-width: 972px) {
    padding-top: 5em;
    padding-bottom: 5em;
    .footer-content {
      flex-direction: row;
      justify-content: space-between;
      max-width: 908px;
    }

    .footer-left {
      flex-direction: row;
    }

    .logo {
      margin: auto;
      margin-right: 3rem;
    }

    .footer-links-left {
      align-items: flex-start;
    }

    .social-icons {
      justify-content: flex-end;
      align-items: center;
    }

    .legal {
      text-align: right;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    .footer-content {
      max-width: 1260px;
    }
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <div className='footer-content'>
        <div className='footer-left'>
          <Logo className='logo' />
          <div className='footer-links'>
            <div className='footer-links-left'>
              <a href='#!' target='_blank' rel='noopener noreferrer'>
                Contact us
              </a>
              <a href='#!' target='_blank' rel='noopener noreferrer'>
                Careers
              </a>
              <a href='#!' target='_blank' rel='noopener noreferrer'>
                Blog
              </a>
            </div>
            <div></div>
            <div className='footer-links-right'>
              <a href='#!' target='_blank' rel='noopener noreferrer'>
                Terms of Use
              </a>
              <a href='#!' target='_blank' rel='noopener noreferrer'>
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
        <div className='footer-right'>
          <div className='social-icons'>
            <a
              className='social-icons-link'
              href='#!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <DiscordIcon width='24px' />
            </a>
            <a
              className='social-icons-link'
              href='#!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <TwitterIcon width='24px' />
            </a>
            <a
              className='social-icons-link'
              href='#!'
              target='_blank'
              rel='noopener noreferrer'
            >
              <InstagramIcon width='24px' />
            </a>
          </div>
          <div className='legal'>
            <p>© 2020 Popdog, Inc. All rights reserved.</p>
            <a href='#!' target='_blank' rel='noopener noreferrer'>
              Data collection preferences
            </a>
          </div>
        </div>
      </div>
    </FooterWrapper>
  );
};

export default Footer;
