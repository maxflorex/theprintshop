import { Backdrop, BackdropDark, Column, Flex, Hero, Items6 } from '../components/Styled/divs/Styled'
import { Para, Title, Title2 } from '../components/Styled/fonts/Styled'
import Image from 'next/image';
import { dataPrintDetails } from '../api/dataPrintDetails';
import { BtnBlack } from '../components/Styled/buttons/Styled'
import Floaters from '../components/Floaters'
import Stretchers from '../components/Stretchers'
import GalleryWrap from '../components/GalleryWrap'
import Tabs from '../components/Tabs';
import { useState } from 'react';
import Modal from '../components/Modal';
import GalleryCanvas from '../components/Galleries/GalleryCanvas';
import Carousel from '../components/CarouselOtherServices';



const TAB = {
	'floaters': <Floaters />,
	'stretchers': <Stretchers />,
	'wrap': <GalleryWrap />
}



const Canvas = () => {

	const link = 'https://images.unsplash.com/photo-1525116848140-a3b75fdf4eb4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80'

	const [selectedTab, setSelectedTab] = useState('stretchers');
	const [selectedImg, setSelectedImg] = useState(null)

	return (

		<>
			{/* TITLE & HERO */}

			<section>
				<Hero img={link} imgMd={link} m='2rem' h='25vh'>
					<Column>
						<Backdrop w='100%' p='4rem'>
							<Title size='4rem'>Canvas</Title>
						</Backdrop>
					</Column>
				</Hero>
			</section>
			<section>
				<Hero width='50%' gap='2rem' m='auto' widthMd='100%'>
					<Title size='2rem'>Get High Quality Canvas Prints With Us.</Title>
					<Para color='dark' font='Roboto' alignW='center'>You can display your photos like fine art or repreduce your very own artwork. Canvas Prints can be made from prints on Professional Photo Papers bonded onto museum quality canvas, or Fine Art Prints printed directly onto the canvas material. The resulting prints can then be stretched and stapled onto a wood artists stretcher bar frame, mounted on gatorfoam board, or delivered loose (unmounted).</Para>
				</Hero>

				{/* DETAILS OF PRODUCT */}

				<Items6 width='100%' color='white' m='2rem' p='0'>
					{dataPrintDetails.map((dataPrintDetails, index) => (
						<Column gap='1rem' key={index} p='1rem'>
							<Image src={dataPrintDetails.img} alt={dataPrintDetails.title} objectFit='contain' />
							<div>
								<Title>{dataPrintDetails.title}</Title>
								<Para color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetails.sub}</Para>
							</div>
						</Column>
					))}
				</Items6>

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
