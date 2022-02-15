import React, { useEffect, useState } from 'react';
import { Btn, Button } from './Styled/buttons/Styled';
import { Column, Flex, Grid } from './Styled/divs/Styled';
import { useSwipeable } from 'react-swipeable';
import styled from 'styled-components';

const Item = styled.div`
    display: inline-flex;
    align-items: center;
    justify-content: center;
    height: 200px;
    background-color: var(--off2);
    color: white;
    width: 25%;
`;

export const CarouselItem = ({ children }) => {
    return <Item>{children}</Item>;
};

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };


    useEffect(() => {
        const interval = setInterval(() => {
            if (!paused) {
                updateIndex(activeIndex + 1);
            }
        }, 4000);

        return () => {
            if (interval) {
                clearInterval(interval);
            }
        };
    });

    const handlers = useSwipeable({
        onSwipedLeft: () => updateIndex(activeIndex + 1),
        onSwipedRight: () => updateIndex(activeIndex - 1),
    });

    return (
        <div className="carousel">
            <div
                {...handlers}
                onMouseEnter={() => setPaused(true)}
                onMouseLeave={() => setPaused(false)}
                className="inner"
                style={{ transform: `translateX(-${activeIndex * 25}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child);
                })}
            </div>

            <Flex gap="2rem" mt="2rem" color="none" justify="center">
                <Flex m="0" p="0" color="none" justify="end">
                    <Button
                        onClick={() => {
                            updateIndex(activeIndex - 1);
                        }}
                    >
                        Prev
                    </Button>
                </Flex>

                {React.Children.map(children, (child, index) => {
                    return (
                        <Flex m="0" p="0" color="none" justify="center">
                            <Button
                                className={`${
                                    index === activeIndex ? 'active' : ''
                                }`}
                                onClick={() => {
                                    updateIndex(index);
                                }}
                            >
                                {index + 1}
                            </Button>
                        </Flex>
                    );
                })}

                <Flex m="0" p="0" color="none" justify="start">
                    <Button
                        onClick={() => {
                            updateIndex(activeIndex + 1);
                        }}
                    >
                        Next
                    </Button>
                </Flex>
            </Flex>
        </div>
    );
};

export default Carousel;
