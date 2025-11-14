import { useState } from "react";

// Import css ở đây là để render trong dev environment và Storybook, không ảnh hưởng đến Web Component
import "./normalize.min.css";
import "./bootstrap.min.css";
import "./bootstrap-theme.min.css";

import "./layout.min.css";
import "./layout_v1.3.css";
import "./navbar.css";

import "./custom.css";
import "./responsive_v1.3.css";
import "./layout_custome_2025.css";
// Kết thúc phần import css

import TopBar from "./TopBar";
import MainHeader from "./MainHeader";

interface HeaderProps {
  onNavigate?: (path: string) => void;
  userData?: string;
}

const Header = ({ onNavigate, userData }: HeaderProps) => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const parsedUserData = userData ? JSON.parse(userData) : null;

  const handleNavigation = (path: string) => {
    const event = new CustomEvent("navigate", { detail: { path } });
    window.dispatchEvent(event);
  };

  const positioningStyles = `
    .header-menu {
      top: 0;
      left: 0;
    },
  `;

  return (
    <>
      <style>{positioningStyles}</style>
      <header className="header-menu header_area">
        <TopBar user={parsedUserData} />
        <MainHeader
          onSearchToggle={() => setIsSearchOpen(!isSearchOpen)}
          isSearchOpen={isSearchOpen}
          onNavigate={onNavigate || handleNavigation}
        />
      </header>
    </>
  );
};

export default Header;
