import React, { useState } from 'react';
import { Column, Items3, Flex, BackdropDark } from './components/Styled/divs/Styled';
import { Para, Title, Title2 } from './components/Styled/fonts/Styled';
import { slides } from './api/dataOtherServices';
import { BiRightArrow } from "react-icons/bi";
import ServicesSlider from './components/ServicesSlider';
import { BtnBlack } from './components/Styled/buttons/Styled'

const services = () => {

	const colorOpa = 'rgba(0, 0, 0, 0.5)'

	const [onHover, setOnHover] = useState(null)

	return <>
		<section>
			<Column p='2rem' attach='fixed'>
				<Title size='4rem'>Other Services</Title>
				<Para color='black' m='auto' font='Roboto'><span style={{fontWeight:'600'}}>We do a lot more than awesome prints!</span> Hover over the cards to know more about our services</Para>
			</Column>
			<Items3 m='2rem' p='0'>

				{slides.map((data, index) => (
					<Column m='0' p='0' key={index} onMouseEnter={() => setOnHover(data.title)} onMouseLeave={() => setOnHover(null)}>
						{onHover !== data.title ? (
							(<Flex img={data.img} p='0' m='0'>
								<Flex color={colorOpa} h='40vh' p='0' m='0' width='100%'>
									<Title size='2rem' color='white' align='center' m='auto'>{data.title}</Title>
								</Flex>
							</Flex>)
						) : (<Column img={data.img} h='40vh' m='0' gap='2rem' p='0'>
							<BackdropDark h='40vh' m='0' p='4rem'>
								<Flex color='none' p='0' m='0' justify='start'>

									<Title size='2rem' color='white'>{data.title}</Title>
									<Para m='auto' font='Roboto'>{data.desc}</Para>
									<BtnBlack bg='var(--accent)' bgH='var(--color)'>CONTACT US</BtnBlack>
								</Flex>
							</BackdropDark>
						</Column>)}
					</Column>
				))}
			</Items3>
		</section>
		<section>
			<ServicesSlider />
		</section>
	</>;
};

export default services;
