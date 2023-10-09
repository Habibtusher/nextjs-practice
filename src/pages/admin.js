import React from 'react';
import AdminLayouts from '@/components/Layouts/AdminLayouts';
import Head from 'next/head';
import RootLayout from '@/components/Layouts/RootLayout';

const Admin = () => {
  return (
    <div>
      <Head>
        <title>Admin</title>
      </Head>
      <h1>This is admin sdsdsdsdsdsds dsdsd sdsdsdsdsdsdsdsdsdsdsd</h1>
    </div>
  );
};

export default Admin;
Admin.getLayout = function getLayout(page) {
  return (
    <RootLayout>
      <AdminLayouts>
        {page}
      </AdminLayouts>
    </RootLayout>

  )
}