import React, { useState } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

import TrendingStreamsCard from '../components/cards/TrendingStreamsCard';

import streamer from '../img/streamer-3.jpg';
import { ReactComponent as LeftChevron } from '../img/left-chevron.svg';
import { ReactComponent as RightChevron } from '../img/right-chevron.svg';

const CarouselWrapper = styled.div`
  width: 335px;
  height: 184px;
  margin: auto;

  .carousel {
    border-radius: 1em;
    transition: box-shadow 150ms ease-in-out;
  }

  .carousel:hover {
    -webkit-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    -moz-box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
    box-shadow: -1px 8px 20px 0px rgba(0, 0, 0, 0.5);
  }

  .carousel li .selected {
    background: transparent;
  }

  .carousel .slide {
    text-align: left;
  }

  .carousel .slide .legend {
    display: none;
  }

  .carousel .control-disabled.control-arrow {
    opacity: 0;
    filter: alpha(opacity=0);
    cursor: inherit;
    display: none;
  }

  .carousel-root {
    outline: none;
  }

  .carousel {
    position: relative;
    width: 100%;
  }
  .carousel * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
  }
  .carousel img {
    width: 100%;
    display: inline-block;
    pointer-events: none;
  }
  .carousel .carousel {
    position: relative;
  }

  .carousel.carousel-slider {
    position: relative;
    margin: 0;
    overflow: hidden;
  }

  .carousel .slider-wrapper {
    overflow: hidden;
    margin: auto;
    width: 100%;
    -webkit-transition: height 0.15s ease-in;
    -moz-transition: height 0.15s ease-in;
    -ms-transition: height 0.15s ease-in;
    -o-transition: height 0.15s ease-in;
    transition: height 0.15s ease-in;
  }
  .carousel .slider-wrapper.axis-horizontal .slider {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }
  .carousel .slider-wrapper.axis-horizontal .slider .slide {
    flex-direction: column;
    flex-flow: column;
  }
  .carousel .slider-wrapper.axis-vertical {
    -ms-box-orient: horizontal;
    display: -webkit-box;
    display: -moz-box;
    display: -ms-flexbox;
    display: -moz-flex;
    display: -webkit-flex;
    display: flex;
  }
  .carousel .slider-wrapper.axis-vertical .slider {
    -webkit-flex-direction: column;
    flex-direction: column;
  }
  .carousel .slider {
    margin: 0;
    padding: 0;
    position: relative;
    list-style: none;
    width: 100%;
  }
  .carousel .slider.animated {
    -webkit-transition: all 0.35s ease-in-out;
    -moz-transition: all 0.35s ease-in-out;
    -ms-transition: all 0.35s ease-in-out;
    -o-transition: all 0.35s ease-in-out;
    transition: all 0.35s ease-in-out;
  }
  .carousel .slide {
    min-width: 100%;
    margin: 0;
    position: relative;
    background: transparent;
  }
  .carousel .slide img {
    width: 100%;
    vertical-align: top;
    border: 0;
  }
  .carousel .slide iframe {
    display: inline-block;
    width: calc(100% - 80px);
    margin: 0 40px 40px;
    border: 0;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    width: 562px;
    height: 294px;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}) {
    width: 810px;
    height: 454px;
  }
`;

const CardFooterWrapper = styled.div`
  button {
    background: transparent;
    border: none;
    height: 3.5em;
    width: 3.5em;
    border-radius: 50vh;
    cursor: pointer;
  }

  button:hover {
    background: ${(props) => props.theme.colors.hoverSecondary};
  }
  .card-footer {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 1em;
  }

  .card-footer .user {
    display: flex;
    align-items: center;
  }

  .card-footer .avatar {
    height: 2.5em;
    width: 2.5em;
    border-radius: 50vh;
    background: grey;
    margin-right: 0.75em;
  }

  .card-footer .avatar img {
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .card-footer .user .username {
    font-weight: 700;
    font-size: 1em;
  }

  .username a {
    color: ${(props) => props.theme.colors.textPrimary};
  }

  .username a:hover {
    color: ${(props) => props.theme.colors.hoverPrimary};
  }

  .card-footer .nav {
    display: none;
  }

  @media (min-width: ${(props) => props.theme.breakpoints.lg}) {
    .card-footer .nav {
      display: flex;
    }

    .card-footer .avatar {
      height: 3em;
      width: 3em;
      border-radius: 50vh;
      background: grey;
      margin-right: 1em;
    }

    .card-footer .nav svg {
      width: 100%;
      height: 100%;
      stroke: ${(props) => props.theme.colors.textThird};
    }

    .card-footer .nav button:first-child {
      margin-right: 1em;
    }
  }
`;

const CardCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide(currentSlide + 1);
  };

  const prevSlide = () => {
    setCurrentSlide(currentSlide - 1);
  };

  const updateCurrentSlide = (index) => {
    if (currentSlide !== index) {
      setCurrentSlide(index);
    }
  };

  return (
    <CarouselWrapper>
      <Carousel
        infiniteLoop
        centerMode
        centerSlidePercentage={100}
        width='100%'
        showStatus={false}
        showArrows={false}
        showIndicators={false}
        showThumbs={false}
        selectedItem={currentSlide}
        onChange={updateCurrentSlide}
      >
        <div>
          <TrendingStreamsCard />
        </div>
        <div>
          <TrendingStreamsCard />
        </div>
        <div>
          <TrendingStreamsCard />
        </div>
      </Carousel>
      <CardFooterWrapper>
        <div className='card-footer'>
          <div className='user'>
            <div className='avatar'>
              <img src={streamer} alt='streamer' />
            </div>
            <span className='username'>
              <a href='#!'>Autophil</a>
            </span>
          </div>
          <div className='nav'>
            <button className='left' onClick={prevSlide}>
              <LeftChevron className='arrow' />
            </button>
            <button className='right' onClick={nextSlide}>
              <RightChevron className='arrow' />
            </button>
          </div>
        </div>
      </CardFooterWrapper>
    </CarouselWrapper>
  );
};

export default CardCarousel;
