import React, { useState } from 'react';
import { Column, Items3, Flex, BackdropDark } from './components/Styled/divs/Styled';
import { Para, Title, Title2 } from './components/Styled/fonts/Styled';
import { slides } from './api/dataOtherServices';
import { BiRightArrow } from "react-icons/bi";
import ServicesSlider from './components/servicesSlider';
import { BtnBlack } from './components/Styled/buttons/Styled'

const services = () => {

	const link = 'https://images.unsplash.com/photo-1580824469841-49c0f1401393?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80'

	const [onHover, setOnHover] = useState(null)

	return <>
		<section>
			<Items3 m='0' p='0'>

				{slides.map((data, index) => (


					<Column m='0' p='0' key={index} onMouseEnter={() => setOnHover(data.title)} onMouseLeave={() => setOnHover(null)}>
						{onHover !== data.title ? (
							(<Column img={data.img} h='40vh'>
								<Title size='2rem'>{data.title}</Title>
							</Column>)
						) : (<Column img={link} h='40vh' p='4rem' gap='2rem'>
							<Title size='2rem' color='white'>{data.title}</Title>
							<Para m='auto'>{data.desc}</Para>
							<BtnBlack m='auto'>Contact Us</BtnBlack>
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
