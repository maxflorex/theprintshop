import React, { useRef, useEffect, useCallback } from 'react';
import { FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import styled from 'styled-components';

const Slideshow = ({
    children,
    navigation = false,
    autoplay = false,
    speed = '500',
    intervalo = '5000',
}) => {
    const slideshow = useRef(null);
    const slideshowIntervals = useRef(null);

    const next = useCallback(() => {
        // CHECK IF THE SLIDESHOW HAS SLIDES
        if (slideshow.current.children.length > 0) {
            // GET FIRST SLIDE
            const firstSlide = slideshow.current.children[0];

            // SLIDESHOW TRANSITION
            slideshow.current.style.transition = `${speed}ms ease-out all`;

            // SLIDE SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;

            // SLIDE MOVEMENT
            slideshow.current.style.transform = `translateX(-${slideSize})`;

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

            // SLIDESHOW TRANSITION
            slideshow.current.style.transition = 'none';

            // SLIDE SIZE
            const slideSize = slideshow.current.children[0].offsetWidth;

            // SLIDE MOVEMENT
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
            }, intervalo);

            // DELETE INTERVALS
            slideshow.current.addEventListener('mouseenter', () => {
                clearInterval(slideshowIntervals.current);
            });

            // PUT BACK INTERVALS WHEN MOUSE LEAVE
            slideshow.current.addEventListener('mouseleave', () => {
                slideshowIntervals.current = setInterval(() => {
                    next();
                }, intervalo);
            });
        }
    }, [autoplay, intervalo, next]);

    return (
        <Container>
            <SlideContainer ref={slideshow}>
                {children}
            </SlideContainer>
            {navigation && (
                <Controllers>
                    <Boton onClick={previous}>
                        <FiArrowLeft />
                    </Boton>
                    <Boton right onClick={next}>
                        <FiArrowRight />
                    </Boton>
                </Controllers>
            )}
        </Container>
    );
};

const Container = styled.div`
    position: relative;
`;

const SlideContainer = styled.div`
    display: flex;
    flex-wrap: nowrap;
`;

const Slide = styled.div`
    min-width: 100%;
    overflow: hidden;
    transition: 0.3s ease all;
    z-index: 10;
    /* max-height: 500px; */
    position: relative;
    img {
        width: 100%;
        vertical-align: top;
    }
`;

const TextSlide = styled.div`
    background: ${(props) =>
        props.colorFondo ? props.colorFondo : 'rgba(0,0,0,.3)'};
    color: ${(props) => (props.colorTexto ? props.colorTexto : '#fff')};
    width: 100%;
    padding: 10px 60px;
    text-align: center;
    position: absolute;
    bottom: 0;
    @media screen and (max-width: 700px) {
        position: relative;
        background: #000;
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

const Boton = styled.button`
    pointer-events: all;
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
    width: 50px;
    height: 100%;
    text-align: center;
    position: absolute;
    transition: 0.3s ease all;
    /* &:hover {
		background: rgba(0,0,0,.2);
		path {
			fill: #fff;
		}
	} */
    path {
        filter: ${(props) =>
            props.right
                ? 'drop-shadow(-2px 0px 0px #fff)'
                : 'drop-shadow(2px 0px 0px #fff)'};
    }
    ${(props) => (props.right ? 'right: 0' : 'left: 0')}
`;

export { Slideshow, Slide, TextSlide };
