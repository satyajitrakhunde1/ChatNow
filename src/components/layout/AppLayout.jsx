import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const AppLayout = () => (Wrappedcomponent) => {
  return (props) => {
    return (
      <div>
        <Header/>
        <Wrappedcomponent {...props} />
        <Footer/>
      </div>
    );
  };
};

export default AppLayout;
