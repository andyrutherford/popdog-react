import React from 'react';

export const SearchIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-search'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='10' cy='10' r='7' />
    <line x1='21' y1='21' x2='15' y2='15' />
  </svg>
);

export const ThemeIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-brightness'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <circle cx='12' cy='12' r='9' />
    <line x1='12' y1='3' x2='12' y2='21' />
    <line x1='12' y1='9' x2='16.65' y2='4.35' />
    <line x1='12' y1='14.3' x2='19.37' y2='6.93' />
    <line x1='12' y1='19.6' x2='20.85' y2='10.75' />
  </svg>
);

export const RightChevronIcon = ({ size }) => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-chevron-right'
    width={size}
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <polyline points='9 6 15 12 9 18' />
  </svg>
);

export const GameControllerIcon = () => (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    className='icon icon-tabler icon-tabler-device-gamepad'
    width='16'
    height='16'
    viewBox='0 0 24 24'
    strokeWidth='1.5'
    stroke='#000000'
    fill='none'
    strokeLinecap='round'
    strokeLinejoin='round'
  >
    <path stroke='none' d='M0 0h24v24H0z' />
    <rect x='2' y='6' width='20' height='12' rx='2' />
    <path d='M6 12h4m-2 -2v4' />
    <line x1='15' y1='11' x2='15' y2='11.01' />
    <line x1='18' y1='13' x2='18' y2='13.01' />
  </svg>
);
