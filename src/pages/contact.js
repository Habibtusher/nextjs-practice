import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const Contact = () => {

    return (
        <div>
            <Head>
                <title>Contact</title>
            </Head>
            <h1>This is contact</h1>
        </div>
    );
};

export default Contact;
Contact.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}