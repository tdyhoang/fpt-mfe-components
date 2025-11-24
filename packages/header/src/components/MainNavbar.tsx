import React, { useState } from "react";
import SearchBox from "./SearchBox";
import { MAIN_MENU, type MenuItem } from "../data/menu.data";
import { useRemoteConfig } from "../hooks/useRemoteConfig";
import { useLocation } from "../hooks/useLocation";
import { useCustomerSegment } from "../hooks/useCustomerSegment";

interface HeaderConfig {
  mainMenu: MenuItem[];
}

const MainNavbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [mobileOpenId, setMobileOpenId] = useState<number | null>(null);
  const activeSegment = useCustomerSegment();

  const { displayLocation, openLocationPicker } = useLocation();

  const config = useRemoteConfig<HeaderConfig>("header", {
    mainMenu: MAIN_MENU,
  });
  const menuItems = config.mainMenu;

  const renderSubLinks = (links: any[]) => (
    <ul className="list-child-menu">
      {links.map((link, idx) => (
        <li key={idx} className="menu-item menu-item-lv-3">
          <a href={link.url} className="menu-item-link">
            {link.label}
            {link.isNew && <span className="new-label">Mới ra mắt</span>}
          </a>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="navbar navbar-default navbar-static-top menu-head">
      <div className="headmenu-width">
        <div className="container menu-container">
          <div className="navbar-header nav-logofpt">
            <div className="navbar-brand">
              <a href="https://fpt.vn/vi">
                <img
                  src="https://fpt.vn/fontend_v2.0_2024/assets/images/fpt-logo.svg"
                  alt="FPT"
                />
              </a>
            </div>
            <button
              className={`navbar-toggle navbar-toggle-custom collapsed ${
                isMobileMenuOpen ? "menu-open" : ""
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
            <div className="choose-location-btn" onClick={openLocationPicker}>
              <img
                src="https://fpt.vn/assets/frontend/img/icon/location.svg"
                alt=""
              />
              <span className="locationname">{displayLocation}</span>
            </div>
          </div>

          <div
            className={`collapse navbar-collapse custom-menu-links ${
              isMobileMenuOpen ? "in" : ""
            }`}
          >
            <div className="login-mobiles">
              <a href="https://fpt.vn/login" className="login">
                <img
                  src="https://fpt.vn/fontend_v2.0_2024/assets/images/profile-circle-black.svg"
                  alt=""
                />
                <span>Đăng nhập</span>
              </a>
            </div>

            <ul className="nav navbar-nav">
              {menuItems.map((item) => (
                <li
                  key={item.id}
                  className={`menu-item menu-item-lv-1 dropdown ${
                    item.type !== "link" ? "" : ""
                  } ${
                    activeDropdown === item.id || mobileOpenId === item.id
                      ? "open"
                      : ""
                  } ${item.type === "dropdown" ? "other-link" : ""}`}
                  onMouseEnter={() =>
                    window.innerWidth > 991 && setActiveDropdown(item.id)
                  }
                  onMouseLeave={() =>
                    window.innerWidth > 991 && setActiveDropdown(null)
                  }
                >
                  <a
                    href={item.url}
                    className={item.type !== "link" ? "dropdown-toggle" : ""}
                    onClick={(e) => {
                      if (item.type !== "link" && window.innerWidth <= 991) {
                        e.preventDefault();
                        setMobileOpenId(
                          mobileOpenId === item.id ? null : item.id
                        );
                      }
                    }}
                  >
                    {item.title}
                    {item.icon && <span className="icon-dropdown-mn"></span>}
                  </a>

                  {item.children && (
                    <ul className="dropdown-menu">
                      {item.children.map((group, gIdx) => (
                        <li key={gIdx} className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            className="title-product-mn"
                          >
                            <span className="icon-product">
                              <img src={group.iconUrl} alt="" />
                            </span>
                            <span className="title-product">{group.title}</span>
                          </a>
                          {renderSubLinks(group.links)}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.subLinks && (
                    <ul className="dropdown-menu">
                      {item.subLinks.map((link, sIdx) => (
                        <li key={sIdx} className="menu-item menu-item-lv-2">
                          <a
                            href={link.url}
                            className="menu-item-link title-product-mn"
                          >
                            <span className="title-product">{link.label}</span>
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}

              <li className="second-link_mobile">
                <a
                  href="/vi/khach-hang-ca-nhan"
                  className={activeSegment === "consumer" ? "active" : ""}
                >
                  Khách hàng cá nhân
                </a>
              </li>
              <li className="second-link_mobile">
                <a
                  href="/vi/khach-hang-doanh-nghiep"
                  className={activeSegment === "enterprise" ? "active" : ""}
                >
                  Khách hàng doanh nghiệp
                </a>
              </li>
            </ul>
          </div>

          <div className="nav--search-menu">
            <button
              id="toggle-search"
              className={isSearchOpen ? "btn-search-close" : ""}
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            ></button>
          </div>
          <SearchBox isOpen={isSearchOpen} />
        </div>
      </div>
    </div>
  );
};

export default MainNavbar;
