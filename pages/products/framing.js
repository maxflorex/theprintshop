import Head from 'next/head'
import React, { useState } from 'react';
import { dataPrintDetailFraming } from '../api/dataPrintDetails';
import BlackFrames from '../components/BlackFrames';
import NaturalFrames from '../components/NaturalFrames';
import { Backdrop, Column, Flex, Hero, Items3, Items6, Row } from '../../Styled/divs/Styled';
import { Para, Title, Title2 } from '../../Styled/fonts/Styled';
import WhiteFrames from '../components/WhiteFrames';
import TabsFrames from '../components/TabsFrames';
import Floaters from '../components/Floaters'
import { BtnBlack } from '../../Styled/buttons/Styled';
import Mats from '../components/Mats';
import FrameSizes from '../components/FrameSizes';
import CarouselDetails from '../components/CarouselDetails/CarouselFraming';


const TAB = {
	'black': <BlackFrames />,
	'white': <WhiteFrames />,
	'natural': <NaturalFrames />
}


const Framing = () => {
	const link = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
	const link3 = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'


	const [selectedTab, setSelectedTab] = useState('black');


	return (
		<>
			<Head>
				<title>The Printshop - Framing</title>
			</Head>
			{/* TITLE & HERO */}

			<section>
				<Hero img={link} imgMd={link} m='2rem' mSm='0' radius='0' >

					<Backdrop width='auto' h='100%' p='4rem'>
						<Title size='4rem' sizeSm='3rem'>Custom Framing</Title>
					</Backdrop>

				</Hero>
			</section>
			<section>
				<Hero width='50%' gap='2rem' m='auto' widthMd='100%' pSm='2rem'>
					<Title size='2rem'>Proffessional Quality Fine Art Framing</Title>
					<Para color='dark' font='Roboto' alignW='center'>Get your pictures framed with the bests! Choose between moulding and floaters frames for your canvas up to three colors (Custom moulding types on request). From old and trusted glass to acrylic (Regular and Nonreflective) to enhance the longevity of your beloved piece of art or photo.</Para>
				</Hero>

				{/* DETAILS OF PRODUCT */}

				<CarouselDetails />
			</section>
			<section>

				<Column m='0' p='0'>
					<Column p='2rem'>
						<Title size='2rem'>Frames Vailable</Title>
						<Title2 font='Roboto'>Select between our three different color options</Title2>
					</Column>
					<TabsFrames setSelectedTab={setSelectedTab} selectedTab={selectedTab} />
					{TAB[selectedTab]}
				</Column>
				<FrameSizes />
			</section>
			<section>
				<Column img={link3} imgMd={link3} p='2rem' attach='fixed' mSm='1rem'>
					<Floaters />
				</Column>
			</section>
			<section>
				<Hero color='none' m='auto'>
					<BtnBlack m='auto' font='Oswald' href='/order'>
						PLACE AN ORDER NOW
					</BtnBlack>
				</Hero>
			</section>
			<section>
				<Mats />
			</section>
		</>
	);
};

export default Framing;
