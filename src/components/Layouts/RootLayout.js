import { Breadcrumb, Layout, Menu, theme } from 'antd';
import Link from 'next/link';
const { Header, Content, Footer } = Layout;
import React from 'react';

const RootLayout = ({ children }) => {
    const {
        token: { colorBgContainer },
    } = theme.useToken();
    return (
        <div>
            <Layout className="layout">
                <Header
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                    }}
                >
                    <div className="demo-logo" />
                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}>
                        <Link href='/'>Home </Link>
                        <Link href='/about'>About </Link>
                        <Link href='/contact'>Contact </Link>
                        <Link href='/admin'>Dashboard </Link>
                        <Link href='/products'>Product </Link>
                    </Menu>
                </Header>
                <Content
                   
                >

                    <div
                        className="site-layout-content"
                        style={{
                            background: colorBgContainer,
                            minHeight: 'calc(100vh - 84px)', // Header height is
                        }}
                    >
                        {children}
                    </div>
                </Content>
                <Footer
                    style={{
                        textAlign: 'center',
                    }}
                >
                    Ant Design ©2023 Created by Ant UED
                </Footer>
            </Layout>
        </div>
    );
};

export default RootLayout;