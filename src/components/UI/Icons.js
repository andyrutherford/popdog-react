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

export const TwitchIcon = ({ size }) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 80 80'>
    <defs />
    <path
      fill='#fff'
      d='M68.572 37.143L57.143 48.57H45.715l-10 10v-10H22.858V5.714h45.714v31.429z'
    />
    <path
      fill='#9146FF'
      d='M20 0L5.714 14.286v51.428h17.143V80l14.286-14.286h11.429L74.286 40V0H20zm48.572 37.143L57.143 48.57H45.715l-10 10v-10H22.857V5.714h45.715v31.429z'
    />
    <path
      fill='#9146FF'
      d='M60 15.714h-5.714v17.143H60V15.714zM44.286 15.714h-5.714v17.143h5.714V15.714z'
    />
  </svg>
);

export const YoutubeIcon = ({ size }) => (
  <svg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 80 80'>
    <defs />
    <path
      fill='red'
      d='M78.327 20.618a10.053 10.053 0 00-7.073-7.118C65.018 11.818 40 11.818 40 11.818s-25.018 0-31.255 1.682a10.053 10.053 0 00-7.072 7.118C0 26.9 0 40 0 40s0 13.1 1.673 19.382A10.053 10.053 0 008.745 66.5C14.982 68.182 40 68.182 40 68.182s25.018 0 31.254-1.682a10.053 10.053 0 007.073-7.118C80 53.1 80 40 80 40s0-13.1-1.673-19.382z'
    />
    <path fill='#fff' d='M31.818 51.895L52.728 40l-20.91-11.895v23.79z' />
  </svg>
);
