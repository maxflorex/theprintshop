import React, { useRef, useEffect, useCallback, useState } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';
import { Title } from './Styled/fonts/Styled';
import userWindow, { useMediaQuery } from './UserWindow';

const Slideshow = ({
    children,
    navigation = false,
    autoplay = false,
    speed = '500',
    interval = '5000',
}) => {
    const slideshow = useRef(null);
    const slideshowIntervals = useRef(null);

    const next = useCallback(() => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current.children.length > 0) {
            // GET FIRST SLIDE OF SLIDER
            const firstSlide = slideshow.current.children[0];
            // SLIDESHOW TRANSITION - HANDLED BY PROPS
            slideshow.current.style.transition = `${speed}ms ease-out all`;
            // GET SLIDE UNIT SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;
            // SLIDE MOVEMENT
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            const transition = () => {
                // RESTART SLIDESHOW POSITION
                slideshow.current.style.transition = 'none';
                slideshow.current.style.transform = `translateX(0)`;
                // SEND FIRST SLIDE AND SEND TO THE END
                slideshow.current.appendChild(firstSlide);
                slideshow.current.removeEventListener(
                    'transitionend',
                    transition
                );
            };
            // LISTERNER WHEN ANIMATION ENDS
            slideshow.current.addEventListener('transitionend', transition);
        }
    }, [speed]);

    const previous = () => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current.children.length > 0) {
            // GET LAST ELEMENT FROM SLIDESHOW
            const index = slideshow.current.children.length - 1;
            // GET LAST SLIDE
            const lastSlide = slideshow.current.children[index];
            slideshow.current.insertBefore(
                lastSlide,
                slideshow.current.firstChild
            );
            // GET SLIDE SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;

            // SLIDESHOW TRANSITION
            slideshow.current.style.transition = 'none';
            // SLIDE MOVEMENT
            // slideshow.current.style.transform = `translateX(-${slideSize}px)`;
            slideshow.current.style.transform = `translateX(-${slideSize}px)`;

            setTimeout(() => {
                slideshow.current.style.transition = `${speed}ms ease-out all`;
                slideshow.current.style.transform = `translateX(0)`;
            }, 30);
        }
    };

    useEffect(() => {
        // AUTOPLAY
        if (autoplay) {
            slideshowIntervals.current = setInterval(() => {
                next();
            }, interval);

            // DELETE INTERVALS
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(slideshowIntervals.current);
            });

            // PUT BACK INTERVALS WHEN MOUSE LEAVE
            slideshow.current.addEventListener('mouseleave', () => {
                slideshowIntervals.current = setInterval(() => {
                    next();
                }, interval);
            });
        }
    }, [autoplay, interval, next]);

    return (
        <Container>
            <SlideContainer ref={slideshow}>{children}</SlideContainer>
            {navigation && (
                <Controllers>
                    <Btn onClick={previous}>
                        <FiArrowLeft style={{ fontSize: '2rem' }} />
                    </Btn>
                    <Btn right onClick={next}>
                        <FiArrowRight style={{ fontSize: '2rem' }} />
                    </Btn>
                </Controllers>
            )}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
    overflow: hidden;
`;

const SlideContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    overflow: hidden;
    transition: 0.8s ease all;
    z-index: 10;
    position: relative;
    img {
        width: 100%;
        vertical-align: top;
    }
    @media (min-width: 1024px) {
        min-width: 33.3333%;
        transition: 0.8s ease all;
    }
    @media (max-width: 1024px) {
        min-width: 50%;
        transition: 0.8s ease all;
    }
    @media (max-width: 758px) {
        min-width: 100%;
        transition: 0.8s ease all;
    }
`;

const Controllers = styled.div`
    position: absolute;
    top: 0;
    z-index: 20;
    width: 100%;
    height: 100%;
    pointer-events: none;
`;

const Btn = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    border-radius: 0.6rem;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: 0.8s ease all;
    &:hover {
        background: rgba(0, 0, 0, 0.2);
        path {
            fill: #fff;
        }
    }
    path {
        filter: ${(props) =>
            props.right
                ? 'drop-shadow(-2px 0px 0px #fff)'
                : 'drop-shadow(2px 0px 0px #fff)'};
    }
    ${(props) => (props.right ? 'right: 0' : 'left: 0')}
`;

export { Slideshow, Slide };
