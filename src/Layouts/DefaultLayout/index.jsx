import Header from "./Header/index";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";
import React from "react";
function DefaultLayout() {
  return (
    <>
      <Header />
      <React.Suspense fallback={<div>loading</div>}>
        <Outlet />
      </React.Suspense>
      <Footer />
    </>
  );
}

export default DefaultLayout;
