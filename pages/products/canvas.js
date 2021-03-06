import { Backdrop, BackdropDark, Column, Flex, Hero, Items6 } from '../../Styled/divs/Styled'
import { Para, Title, Title2 } from '../../Styled/fonts/Styled'
import Head from 'next/head'
import { dataPrintDetails } from '../api/dataPrintDetails';
import { BtnBlack } from '../../Styled/buttons/Styled'
import Floaters from '../components/Floaters'
import Stretchers from '../components/Stretchers'
import GalleryWrap from '../components/GalleryWrap'
import Tabs from '../components/Tabs';
import { useState } from 'react';
import Modal from '../components/Modal';
import GalleryCanvas from '../components/Galleries/GalleryCanvas';
import CarouselDetails from '../components/CarouselDetails/CarouselCanvas';
import Carousel from '../components/Carousel';



const TAB = {
	'floaters': <Floaters />,
	'stretchers': <Stretchers />,
	'wrap': <GalleryWrap />
}



const Canvas = () => {

	const link = 'https://images.unsplash.com/photo-1525116848140-a3b75fdf4eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'

	const [selectedTab, setSelectedTab] = useState('stretchers');
	const [selectedImg, setSelectedImg] = useState(undefined)

	return (

		<>
			<Head>
				<title>The Printshop - Canvas</title>
			</Head>
			{/* TITLE & HERO */}

			<section>
				<Hero img={link} imgMd={link} m='2rem' mSm='0' radius='0' >

					<Backdrop width='auto' h='100%' p='4rem'>
						<Title size='4rem' sizeSm='3rem'>Canvas</Title>
					</Backdrop>

				</Hero>
			</section>
			<section>
				<Hero width='50%' gap='2rem' m='auto' widthMd='100%' pSm='2rem'>
					<Title size='2rem'>Get High Quality Canvas Prints With Us.</Title>
					<Para color='dark' font='Roboto' alignW='center'>You can display your photos like fine art or repreduce your very own artwork. Canvas Prints can be made from prints on Professional Photo Papers bonded onto museum quality canvas, or Fine Art Prints printed directly onto the canvas material. The resulting prints can then be stretched and stapled onto a wood artists stretcher bar frame, mounted on gatorfoam board, or delivered loose (unmounted).</Para>
				</Hero>

				{/* DETAILS OF PRODUCT */}

				<CarouselDetails />

				{/* COMPONENTS */}


				<Flex m='auto' color='none' justify='center' pt='2rem' pb='4rem'>
					<BtnBlack m='auto' font='Oswald' p='0' href='/order'>
						PLACE AN ORDER
					</BtnBlack>
				</Flex>



				<Tabs setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
				{TAB[selectedTab]}

				<Carousel />

				<GalleryCanvas selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
				{selectedImg && <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />}
			</section>
		</>
	)
};

export default Canvas;
