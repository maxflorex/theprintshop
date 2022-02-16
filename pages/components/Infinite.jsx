import React, { useRef, useState } from 'react';
import { slides } from '../api/dataOtherServices';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Autoplay } from 'swiper';
import { Column, Hero } from './Styled/divs/Styled';
import { Title, Title2 } from './Styled/fonts/Styled';

const link = 'https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2370&q=80'

const Infinite = () => {
    return (
        <Column pt="8rem" color='var(--off2)' img={link} p='4rem' mt='4rem' attach='fixed'>
            <Swiper
                slidesPerView={1}
                spaceBetween={48}
                breakpoints={{
                    640: {
                        slidesPerView: 1,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1024: {
                        slidesPerView: 4,
                    },
                }}
                slidesPerGroup={1}
                pagination={{
                    dynamicBullets: true,
                }}
                loop={true}
                loopFillGroupWithBlank={true}
                modules={[Autoplay, Pagination]}
                grabCursor={true}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                className="mySwiper"
            >
                {slides.map((data, index) => (
                    <SwiperSlide>
                        <Column
                            key={index}
                            color="white"
                            width="100%"
                            ml="0"
                            mr="0"
                            mt="0"
                            mb="4rem"
                            p="0"
                        >
                            <a href={data.link}>
                                <Column img={data.img} m="0" p="0" radius="0">
                                    <Column
                                        color="var(--gradient)"
                                        m="0"
                                        h="10vh"
                                        className="backdrop"
                                        radius="0"
                                    />
                                </Column>
                                <Title size="2rem">{data.title}</Title>
                                <Title2 font="Roboto" size="1rem" mb="1rem">
                                    {data.desc}
                                </Title2>
                            </a>
                        </Column>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Column>
    );
};

export default Infinite;




