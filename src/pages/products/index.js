import React from 'react';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';

const ProductsHomePage = () => {
    return (
        <div>
             <Head>
                <title>Products</title>
            </Head>
            <h1>This is products page</h1>
            
        </div>
    );
};

export default ProductsHomePage;
ProductsHomePage.getLayout = function getLayout(page) {
    return (
        <RootLayout>
            {page}
        </RootLayout>
    )
}