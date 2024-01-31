/* eslint-disable react/prop-types */
import style from './rootLayoutStyle.module.css';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

import React from 'react';
import {Outlet} from 'react-router-dom';

function RootLayout() {
  return (
    <>
      <Navbar />
      <main className={`${style['layout-main-content']}`}>
        <React.Suspense fallback={<h1>Loading dulu mas bro....</h1>}>
          <Outlet />
        </React.Suspense>
      </main>
      <Footer />
    </>
  );
}

export default RootLayout;
