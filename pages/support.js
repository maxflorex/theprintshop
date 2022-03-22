import { dataFaq } from './api/dataFaq';
import { Column, Flex, Grid } from './components/Styled/divs/Styled';
import { Title } from './components/Styled/fonts/Styled'
import Carousel from './components/Carousel'

import Faq from './components/Faq';

const bg = 'https://images.unsplash.com/photo-1514454923228-7ef54f9251c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=988&q=80'


const support = () => {


	return <section>
		<Grid mt='0' gap='0' ac='start'>
			<Column img={bg} imgMd={bg} h='100%' hMd='40vh' hMax='80vh' mt='0' />
			<Column mt='0' mb='0' gap='0'>
				<Title size='4rem' mb='2rem'>Frequently Asked Questions</Title>
				{dataFaq.map((data, index) => (
					<div key={index}>
						<Faq
							answers={data.answer}
							question={data.question}
							link={data.link}
							img={data.img}
						/>
					</div>
				))}
			</Column>
		</Grid>
		<div style={{margin: '6rem 0'}}>
			<Carousel />
		</div>

	</section>;
};

export default support;

255