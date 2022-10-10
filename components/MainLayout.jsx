import React from "react";
import Header from "./Header";
import Footer from "./Footer";
/*UI*/
import UiMainLayout from "./ui/main-layout";

const MainLayout = ({ children }) => {
  return (
    <UiMainLayout>
      <UiMainLayout.Wrap>
        <Header />
        {children}
        <Footer />
      </UiMainLayout.Wrap>
    </UiMainLayout>
  );
};

export default MainLayout;
