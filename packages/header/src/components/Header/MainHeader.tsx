import { useState, useEffect } from "react";
import Navigation from "./Navigation";
import SearchBar from "./SearchBar";

interface MainHeaderProps {
  onSearchToggle: () => void;
  isSearchOpen: boolean;
  onNavigate: (path: string) => void;
}

const MainHeader = ({
  onSearchToggle,
  isSearchOpen,
  onNavigate,
}: MainHeaderProps) => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMobileMenuOpen]);

  const handleToggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="navbar navbar-default navbar-static-top menu-head">
      <div className="headmenu-width">
        <div className="container menu-container">
          <div className="navbar-header nav-logofpt">
            <div className="navbar-brand">
              <a href="https://fpt.vn/vi">
                <img
                  src="https://fpt.vn/fontend_v2.0_2024/assets/images/fpt-logo.svg"
                  alt="FPT Telecom"
                />
              </a>
            </div>
            <button
              type="button"
              className={`navbar-toggle navbar-toggle-custom ${
                !isMobileMenuOpen ? "collapsed" : ""
              }`}
              onClick={handleToggleMobileMenu}
            >
              <span
                className="icon-bar icon-hamburger"
                style={{ display: isMobileMenuOpen ? "none" : "block" }}
              ></span>
              <span
                className="icon-bar icon-close"
                style={{ display: isMobileMenuOpen ? "block" : "none" }}
              ></span>
            </button>
          </div>
          <div className="wrap-location">
            <div className="choose-location-btn">
              <img
                src="https://fpt.vn/assets/frontend/img/icon/location.svg"
                alt="Chọn vị trí"
              />
              <span className="locationname">Chọn vị trí</span>
            </div>
          </div>

          <div
            id="btnCollapse"
            className={`collapse navbar-collapse custom-menu-links ${
              isMobileMenuOpen ? "in" : ""
            }`}
          >
            <div className="login-mobiles">
              <a href="https://fpt.vn/login" className="login">
                <img
                  src="https://fpt.vn/fontend_v2.0_2024/assets/images/profile-circle-black.svg"
                  alt="Đăng nhập"
                />
                <span>Đăng nhập</span>
              </a>
            </div>
            <Navigation onNavigate={onNavigate} />
          </div>
          <div className="nav--search-menu">
            <button
              id="toggle-search"
              className={isSearchOpen ? "btn-search-close" : ""}
              onClick={onSearchToggle}
            />
          </div>

          {isSearchOpen && (
            <SearchBar isOpen={isSearchOpen} onClose={onSearchToggle} />
          )}
        </div>
      </div>
    </div>
  );
};

export default MainHeader;
