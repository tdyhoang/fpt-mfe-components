import React from "react";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";

const Header: React.FC = () => {
  return (
    <>
      <header className={`header-menu header_area}`}>
        <TopBar />
        <MainNavbar />
      </header>
    </>
  );
};

export default Header;
