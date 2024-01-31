import React from 'react';
import {BrowserRouter, Routes, Route} from 'react-router-dom';

import RootLayout from './pages/layouts/RootLayout';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const Facility = React.lazy(() => import('./pages/Facility'));
const News = React.lazy(() => import('./pages/News'));
const Contact = React.lazy(() => import('./pages/Contact'));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/facility" element={<Facility />} />
          <Route path="/news" element={<News />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1>Page Not Found</h1>} />
        </Route>
        <Route path="/testpage" element={<TestPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;

import TextAnimation from './components/Animations/TextAnimation';

const TestPage = () => {
  return (
    <>
      <TextAnimation text={['halo', 'dunia']} />
    </>
  );
};
