import React from "react";
import Head from "next/head"; //same as head in html
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <Head>
        <title>Ecommerce store</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="main-container">{children}</main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
};

export default Layout;
