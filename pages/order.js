import Head from 'next/head';
import React from 'react';
import Account from './components/Account';



const order = () => {
	return (
		<>
			<Head>
				<title>The Printshop - Orders</title>
			</Head>
			<Account />
		</>
	)
}

export default order
