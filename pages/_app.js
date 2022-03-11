import '../styles/globals.css'
import Layout from './components/Layout'
import tryContexWrapper from './components/Contexts/tryContext'

export default function MyApp({ Component, pageProps }) {
	return (
		<tryContexWrapper>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</tryContexWrapper>

	)
}