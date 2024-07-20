'use client';

import React, { Suspense } from 'react';
import './App.css';
import './css/index.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { PrimeReactProvider } from 'primereact/api';
import { Helmet } from 'react-helmet';
import { getTitleFromRoute } from './utils/docTile';
import { router } from './route';
import App from './App';
import { NavBar } from './components/NavBar';
import Faq from './components/faq/Faq';
import Footer from './components/footer/Footer';

export default function AppContainer() {
  const location = useLocation();
  console.log(router, "aryannsnndnwj")
  return (
    <PrimeReactProvider>
      <Helmet>
        <title>{getTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        <App>
          <NavBar />
          <Routes>
            {router.map((route) => (
              <Route key={route.path} path={route.path} element={route.element} />
            ))}
          </Routes>
          <Faq />
          <Footer />
        </App>
      </Suspense>
    </PrimeReactProvider>
  );
}
