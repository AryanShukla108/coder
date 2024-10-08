"use client";

import React, { Suspense } from "react";
import "./App.css";
import "./css/index.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, useLocation } from "react-router-dom";
import { PrimeReactProvider } from "primereact/api";
import { Helmet } from "react-helmet";
import { getTitleFromRoute } from "./utils/docTile";
import { router } from "./route";
import { NavBar } from "./components/NavBar";
import Faq from "./components/faq/Faq";
import Footer from "./components/footer/Footer";
import { Float } from "./components/floater/Float";

export default function App() {
  const location = useLocation();
  const pathname = location.pathname;

  return (
    <PrimeReactProvider>
      <Helmet>
        <title>{getTitleFromRoute(location.pathname)}</title>
      </Helmet>
      <Suspense fallback={<div>Loading...</div>}>
        {pathname === "/hire" || pathname === "/job" ? "" : <Float />}
        {pathname === "/hire" || pathname === "/job" ? "" : <NavBar />}
        <Routes>
          {router.map((route) => (
            <Route key={route.path} path={route.path} element={route.element} />
          ))}
        </Routes>
        {pathname === "/hire" || pathname === "/job" ? "" : <Faq />}
        {pathname === "/hire" || pathname === "/job" ? "" : <Footer />}

      </Suspense>
    </PrimeReactProvider>
  );
}
