import React from "react";
import Header from "./Header";
import Footer from "./Footer";
/*UI*/
import UiMainLayout from "./ui/main-layout";

const MainLayout = ({ children }) => {
  return (
    <UiMainLayout>
      <Header />
      <UiMainLayout.Page>{children}</UiMainLayout.Page>
      <Footer />
    </UiMainLayout>
  );
};

export default MainLayout;
