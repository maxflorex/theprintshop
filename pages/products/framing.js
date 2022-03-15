import Image from 'next/image';
import React, { useState } from 'react';
import { dataPrintDetailFraming } from '../api/dataPrintDetails';
import BlackFrames from '../components/BlackFrames';
import NaturalFrames from '../components/NaturalFrames';
import { Backdrop, Column, Flex, Hero, Items3, Items6, Row } from '../components/Styled/divs/Styled';
import { Para, Title, Title2 } from '../components/Styled/fonts/Styled';
import WhiteFrames from '../components/WhiteFrames';
import TabsFrames from '../components/TabsFrames';
import Floaters from '../components/Floaters'
import { BtnBlack } from '../components/Styled/buttons/Styled';
import Mats from '../components/Mats';



const TAB = {
	'black': <BlackFrames />,
	'white': <WhiteFrames />,
	'natural': <NaturalFrames />
}


const framing = () => {
	const link = 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2670&q=80'
	const link2 = 'https://images.unsplash.com/photo-1565555334121-4a4f177af7b2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
	const link3 = 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1964&q=80'


	const [selectedTab, setSelectedTab] = useState('black');


	return (
		<>
			{/* TITLE & HERO */}

			<section>
				<Hero img={link} imgMd={link} m='2rem' h='25vh'>
					<Column>
						<Backdrop w='100%' p='4rem'>
							<Title size='4rem'>Custom Framing</Title>
						</Backdrop>
					</Column>
				</Hero>
			</section>
			<section>
				<Hero width='50%' gap='2rem' m='auto' widthMd='100%'>
					<Title size='2rem'>Proffessional Quality Fine Art Framing</Title>
					<Para color='dark' font='Roboto' alignW='center'>Get your pictures framed with the bests! Choose between moulding and floaters frames for your canvas up to three colors (Custom moulding types on request). From old and trusted glass to acrylic (Regular and Nonreflective) to enhance the longevity of your beloved piece of art or photo.</Para>
				</Hero>

				{/* DETAILS OF PRODUCT */}

				<Items6 width='100%' color='white' m='2rem' p='0'>
					{dataPrintDetailFraming.map((dataPrintDetailFraming, index) => (
						<Column gap='1rem' key={index} p='1rem'>
							<Image src={dataPrintDetailFraming.img} objectFit='contain' />
							<div>
								<Title>{dataPrintDetailFraming.title}</Title>
								<Para color='dark' align='center' alignW='center' font='Roboto'>{dataPrintDetailFraming.sub}</Para>
							</div>
						</Column>
					))}
				</Items6>
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
			</section>
			<section>
				<Column img={link3} p='2rem' attach='fixed'>
					<Floaters />
				</Column>
			</section>
			<section>
				<Hero color='none' m='auto' pb="2rem">
					<BtnBlack m='auto' font='Oswald'>
						Place an Order now
					</BtnBlack>
				</Hero>
			</section>
			<section>
				<Mats />
			</section>
		</>
	);
};

export default framing;
