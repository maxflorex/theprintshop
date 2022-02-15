import React, { useRef, useState } from 'react';
import { slides } from '../api/dataOtherServices';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Pagination, Navigation, Autoplay } from 'swiper';
import { Column, Hero } from './Styled/divs/Styled';
import { Title, Title2 } from './Styled/fonts/Styled';
import Image from 'next/image';
import { Btn, BtnBlack, Button } from './Styled/buttons/Styled';

const Infinite = () => {
    return (
        <Column pt="8rem">
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
                loop={true}
                loopFillGroupWithBlank={true}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
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
                            m="0"
                            p="0"
                            h="25vh"
                        >
                            <Column img={data.img} m="0" p='0' radius="0">
                                <Column color="var(--gradient)" m="0" h="25vh" className='backdrop'/>
                            </Column>
                            <Title size="2rem">{data.title}</Title>
                            <Title2 font="Roboto" size="1rem">
                                {data.desc}
                            </Title2>
                            <BtnBlack
                                bgH="black"
                                bg="var(--off2)"
                                color="var(--off4)"
                                radius="0"
                                size="1rem"
                            >
                                Know More
                            </BtnBlack>
                        </Column>
                    </SwiperSlide>
                ))}
            </Swiper>
        </Column>
    );
};

export default Infinite;
