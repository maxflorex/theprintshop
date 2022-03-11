import React, { useState } from 'react';
import Form from './components/Form';
import Account from './components/Account';



const order = () => {
	const [isAuth, setIsAuth] = useState(null)

	return (<section>
		<Account setIsAuth={setIsAuth} />
		{isAuth === null ? '' : <Form />}
	</section>
	)
}

export default order
