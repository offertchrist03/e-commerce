import React from "react";
import Header from "../partials/Header";
import Footer from "../partials/Footer";

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
