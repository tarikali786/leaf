import React from "react";
import { Outlet } from "react-router-dom";
import { Header, Footer } from "../component";

export const HomeLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};
