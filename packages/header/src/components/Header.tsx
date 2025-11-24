import React from "react";
import TopBar from "./TopBar";
import MainNavbar from "./MainNavbar";
import ErrorBoundary from "./ErrorBoundary";

const Header: React.FC = () => {
  return (
    <ErrorBoundary>
      <header className={`header-menu header_area}`}>
        <ErrorBoundary>
          <TopBar />
        </ErrorBoundary>
        <ErrorBoundary>
          <MainNavbar />
        </ErrorBoundary>
      </header>
    </ErrorBoundary>
  );
};

export default Header;
