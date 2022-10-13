import React from "react";
import Header from "./Header";
import Footer from "./Footer";
/*UI*/


const MainLayout = ({ children }) => {
  return (
   
    <div className="content">
      <Header />
      {children}
      <Footer />
    </div>

  );
};

export default MainLayout;
