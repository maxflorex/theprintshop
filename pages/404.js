import React from 'react';
import Error from './components/Error';
import Head from 'next/head'


const custom404 = () => {
    return <div>
                    <Head>
                <title>The Printshop - 404</title>
            </Head>
        <Error />
    </div>;
};

export default custom404;
