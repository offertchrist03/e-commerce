import React from "react";
import Footer from "../partials/Footer";
import Header from "../partials/header/Header";

function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header></Header>

      {children}

      <Footer></Footer>
    </>
  );
}

export default MainLayout;
