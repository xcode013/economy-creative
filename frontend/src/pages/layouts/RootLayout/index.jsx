/* eslint-disable react/prop-types */
import style from './rootLayoutStyle.module.css';

import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';

function RootLayout({children}) {
  return (
    <>
      <Navbar />
      <main className={style.main}>{children}</main>
      <Footer />
    </>
  );
}

export default RootLayout;
