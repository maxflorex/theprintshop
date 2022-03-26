import Head from 'next/head'
import '../styles/globals.css'
import Layout from './components/Layout'


export default function MyApp({ Component, pageProps }) {
	return (
		<>
			<Head>
				<meta name="description" content="By Art Cayman Co" />
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<title>The Printshop</title>
			</Head>
			<Layout>
				<Component {...pageProps} />
			</Layout>
		</>

	)
}