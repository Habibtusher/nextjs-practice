import React from 'react';
import { Breadcrumb, Button, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
import RootLayout from '@/components/Layouts/RootLayout';
import Head from 'next/head';
const { Header, Content, Footer } = Layout;
const Homepage = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta name='home page' description="this is home page" />
      </Head>
      <h1>home</h1>
    </div>
  );
};
export default Homepage;

Homepage.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      {page}
    </RootLayout>
  )
}