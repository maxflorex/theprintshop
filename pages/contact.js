import React, { useEffect, useState } from 'react'
import { Column, Flex, Row } from './components/Styled/divs/Styled'
import { Para, Title } from './components/Styled/fonts/Styled'
import { SButton, SForm, SInput, STextArea } from './components/Styled/forms/Styled'
import { colMessages } from '../firebase/config'
import { addDoc, serverTimestamp } from 'firebase/firestore'
import { BtnBlack, Button } from './components/Styled/buttons/Styled'
import { FiPhone, FiMail } from 'react-icons/fi'

const Contact = () => {

		const [isName, setIsName] = useState('')
		const [isEmail, setIsEmail] = useState('')
		const [isMessage, setIsMessage] = useState('')

		// ON SUBMIT EVENT
		const handleSubmit = (e) => {
			addDoc(colMessages, {
				name: isName,
				email: isEmail,
				message: isMessage,
				createdAt: serverTimestamp(),
			}).then(() => {
				alert('Message sent!');
				setIsName(null)
				setIsEmail(null)
				setIsMessage(null)
			});
		};

		// USE EFFECT

		useEffect(() => {
			console.log(isName, isEmail, isMessage)

		});


		const link = '/aluminum/_MX82849.jpg'
		const link2 = 'https://images.unsplash.com/photo-1607181240431-707412228ed3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80'

		return (
			<section>

				<Row p='0' align='center'>
					<Column m='0' p='0' hMd='60vh'>
						<Title size='4rem' mb='2rem'>Get In Touch</Title>
						<SForm>
							<Column m='0' p='0' gap='1rem'>
								<SInput type='text' required placeholder='Enter your name...' onChange={(e) => setIsName(e.target.value)} />
								<SInput type='email' required placeholder='Enter your email...' onChange={(e) => setIsEmail(e.target.value)} />
								<STextArea placeholder='Send us a message' rows="8" cols="1000" onChange={(e) => setIsMessage(e.target.value)} />
								<BtnBlack onClick={handleSubmit}>Send Message</BtnBlack>
							</Column>
						</SForm>
					</Column>
					<Column img={link2} imgMd={link2} h='80vh' hMd='60vh' align='start'>
						<Title size='2rem'>The Printshop</Title>
						<Para color='black' font='Roboto' m='auto'>By Art Cayman Co.</Para>

						<div style={{ margin: 'auto', padding: '2rem' }}>
							<Column m='auto' color='white' p='2rem'>
								<Para color='black' font='Roboto' m='auto'>West Bay, Grand Cayman</Para>
								<Para color='black' font='Roboto' m='auto' weight='600'>Cayman Islands</Para>
							</Column>
						</div>

						<Flex justify='center' m='auto' color='none' p='0'>
							<FiPhone style={{ margin: 'auto' }} />
							<Para color='black' font='Roboto' m='auto'>+(345) 923-2222</Para>
						</Flex>
						<Flex justify='center' m='auto' color='none' p='0'>
							<FiMail style={{ margin: 'auto' }} />
							<Para color='black' font='Roboto' m='auto'>prints@artcaymanco.com</Para>
						</Flex>
					</Column>
				</Row>
			</section>
		)
	}

export default Contact
