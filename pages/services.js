import React, { useState } from 'react';
import { Column, Items3, Flex, BackdropDark } from './components/Styled/divs/Styled';
import { Para, Title, Title2 } from './components/Styled/fonts/Styled';
import { slides } from './api/dataOtherServices';
import { BiRightArrow } from "react-icons/bi";
import ServicesSlider from './components/servicesSlider';
import { BtnBlack } from './components/Styled/buttons/Styled'

const services = () => {

	const link = 'https://images.unsplash.com/photo-1557683304-673a23048d34?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=582&q=80'
	const link2 = 'https://images.unsplash.com/photo-1509612355076-745a6bea8158?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80'
	const colorOpa =  'rgba(0, 0, 0, 0.5)'

	const [onHover, setOnHover] = useState(null)

	return <>
		<section>
			<Column img={link2} p='6rem' attach='fixed'>
				<Title size='4rem'>Other Services</Title>
			</Column>
			<Items3 m='0' p='0'>

				{slides.map((data, index) => (


					<Column m='0' p='0' key={index} onMouseEnter={() => setOnHover(data.title)} onMouseLeave={() => setOnHover(null)}>
						{onHover !== data.title ? (
							(<Column img={data.img} p='0'>
								<Flex color={colorOpa} h='40vh' p='0' m='0'>
									<Title size='2rem' color='white' align='center' m='auto'>{data.title}</Title>
								</Flex>
							</Column>)
						) : (<Column img={data.img} h='40vh' m='2rem' gap='2rem' p='0'>
							<BackdropDark h='40vh' m='0' p='4rem'>
								<Flex color='none' p='0' m='0'>

									<Title size='2rem' color='white'>{data.title}</Title>
									<Para m='auto' font='Roboto'>{data.desc}</Para>
									<BtnBlack m='auto' bg='var(--accent)' bgH='var(--color)'>CONTACT US</BtnBlack>
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
