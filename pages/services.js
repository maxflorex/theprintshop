import React, { useState } from 'react';
import { Column, Items3, Flex, BackdropDark } from '../Styled/divs/Styled';
import { Para, Title, Title2 } from '../Styled/fonts/Styled';
import { slides } from './api/dataOtherServices';
import { BtnBlack } from '../Styled/buttons/Styled'
import Carousel from './components/Carousel';
import Head from 'next/head'

const Services = () => {

	const colorOpa = 'rgba(0, 0, 0, 0.5)'

	const [onHover, setOnHover] = useState( undefined)

	return <>
		<section>
		<Head>
			<title>The Printshop - Other Services</title>
		</Head>
			<Column p='2rem' attach='fixed'>
				<Title size='4rem' sizeSm='3rem' >Other Services</Title>
				<Para color='black' m='auto' font='Roboto' align='center' alignW='center'><span style={{ fontWeight: '600' }}>We do a lot more than awesome prints!<br /></span> Hover over the cards to know more about our services</Para>
			</Column>
			<Items3 m='2rem' p='0'>
				{slides.map((data, index) => (
					<Column m='0' p='0' key={index} onMouseEnter={() => setOnHover(data.title)} onMouseLeave={() => setOnHover( undefined)}>
						{onHover !== data.title ? (
							(<Flex img={data.img} p='0' m='0'>
								<Flex color={colorOpa} h='24vh'p='0' m='0' width='100%'>
									<Title size='2rem' color='white' align='center' m='auto'>{data.title}</Title>
								</Flex>
							</Flex>)
						) : (<Flex img={data.img} m='0' gap='2rem' p='0'>
							<BackdropDark m='0' p='4rem'>
								<Flex color='none' p='0' m='0' justify='start'>

									<Title size='2rem' color='white'>{data.title}</Title>
									<Para m='auto' font='Roboto'>{data.desc}</Para>
									<BtnBlack bg='var(--accent)' bgH='var(--color)' href='/contact'>CONTACT US</BtnBlack>
								</Flex>
							</BackdropDark>
						</Flex>)}
					</Column>
				))}
			</Items3>
			<div style={{ margin: '6rem 0' }}>
				<Carousel />
			</div>
		</section>
	</>;
};

export default Services;
