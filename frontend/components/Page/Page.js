import React from "react";
import Footer from "../Footer/Footer";
import Nav from "../Nav/Nav";

const Page = ({ children }) => {
  return (
    <section className="container">
      <Nav />
      {children}
      <Footer />
    </section>
  );
};

export default Page;
