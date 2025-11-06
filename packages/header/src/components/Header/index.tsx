import React, { useEffect, useRef, useState } from "react";
import styles from "./Header.module.scss";
import cssString from "./Header.module.scss?inline";

const useViewport = () => {
  const [isDesktop, setDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => setDesktop(window.innerWidth > 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return { isDesktop };
};

const Header: React.FC = () => {
  const [openDesktopMenu, setOpenDesktopMenu] = useState<string | null>(null);
  const [openMobileSubMenus, setOpenMobileSubMenus] = useState<
    Record<string, boolean>
  >({});
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const { isDesktop } = useViewport();
  const headerRef = useRef<HTMLDivElement>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopMenu(null);
        setSearchOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "unset";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    if (isSearchOpen) {
      setTimeout(() => searchInputRef.current?.focus(), 100);
    }
  }, [isSearchOpen]);

  const handleMenuInteraction = (key: string, event?: React.MouseEvent) => {
    if (isDesktop) {
      setOpenDesktopMenu(key);
    } else {
      event?.preventDefault();
      setOpenMobileSubMenus((prev) => ({ ...prev, [key]: !prev[key] }));
    }
  };

  const handleMouseLeave = () => isDesktop && setOpenDesktopMenu(null);
  const handleMobileMenuToggle = () => setMobileMenuOpen((prev) => !prev);
  const handleSearchToggle = () => setSearchOpen(true);
  const closeSearch = () => setSearchOpen(false);

  const renderMenuItem = (
    key: string,
    title: string,
    children: React.ReactNode,
    isOtherLink = false
  ) => {
    const liClassName = `menu-item menu-item-lv-1 dropdown ${
      isOtherLink ? "other-link" : ""
    } ${openDesktopMenu === key ? "open" : ""} ${
      !!openMobileSubMenus[key] ? "open-mobile" : ""
    }`;

    return (
      <li
        className={liClassName}
        onMouseEnter={isDesktop ? () => handleMenuInteraction(key) : undefined}
        onMouseLeave={isDesktop ? handleMouseLeave : undefined}
      >
        <a
          href="#"
          className="dropdown-toggle"
          onClick={
            !isDesktop
              ? (e) => handleMenuInteraction(key, e)
              : (e) => e.preventDefault()
          }
        >
          {title}
          <span className="icon-dropdown-mn"></span>
        </a>
        {children}
      </li>
    );
  };

  return (
    <>
      <style>{cssString}</style>
      <header
        className={`${styles.headerWrapper} ${
          isSearchOpen && isDesktop ? styles.desktopSearchActive : ""
        } ${isSearchOpen && !isDesktop ? styles.mobileSearchActive : ""}`}
        ref={headerRef}
      >
        <div className="header-menu header_area">
          <div className="header-top">
            <div className="head-top--contain">
              <div>
                <ul className="links-top">
                  <li>
                    <a
                      data-sp-action="view_page"
                      data-sp-area="header"
                      data-sp-position="1"
                      data-sp-extra='{"area_id": 1, "element_name": "khach_hang_ca_nhan", "element_type": "link", "event_description": "Khách hàng cá nhân"}'
                      href="/vi/khach-hang-ca-nhan"
                      className="active"
                    >
                      Khách hàng cá nhân
                    </a>
                  </li>
                  <li>
                    <a
                      data-sp-action="view_page"
                      data-sp-area="header"
                      data-sp-position="2"
                      data-sp-extra='{"area_id": 1, "element_name": "khach_hang_doanh_nghiep", "element_type": "link", "event_description": "Trang khách hàng doanh nghiệp"}'
                      href="/vi/khach-hang-doanh-nghiep"
                    >
                      Khách hàng doanh nghiệp
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-head-login">
                <div className="login">
                  <div
                    className="choose-location-btn"
                    data-sp-action="click_form"
                    data-sp-area="header"
                    data-sp-position="3"
                    data-sp-extra='{"area_id": 1, "element_name": "chon_vi_tri", "element_type": "button", "event_description": "Nhập và gửi form"}'
                  >
                    <img
                      src="https://fpt.vn/assets/frontend/img/icon/location-des.svg"
                      alt="Chọn vị trí"
                    />
                    <span className="locationname">Chọn vị trí</span>
                  </div>
                  <a
                    href="https://fpt.vn/login"
                    data-sp-action="click_form"
                    data-sp-area="header"
                    data-sp-position="4"
                    data-sp-extra='{"area_id": 1, "element_name": "dang_nhap", "element_type": "button", "event_description": "Nhập và gửi form"}'
                    title="Đăng nhập"
                  >
                    <img
                      src="https://fpt.vn/fontend_v2.0_2024/assets/images/profile-circle.svg"
                      alt="Đăng nhập"
                      className="icon-profile"
                    />
                    <span>Đăng nhập</span>
                    <span
                      className="profile-idd"
                      style={{
                        position: "absolute",
                        opacity: 0,
                        visibility: "hidden",
                        display: "none",
                      }}
                    >
                      Unknown
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="navbar navbar-default navbar-static-top menu-head">
            <div className="headmenu-width">
              <div className="container menu-container">
                <div className="navbar-header nav-logofpt">
                  <div className="navbar-brand" title="FPT Telecom">
                    <a
                      href="https://fpt.vn/vi"
                      data-sp-action="view_page"
                      data-sp-area="header"
                      data-sp-position="5"
                      data-sp-extra='{"area_id": 1, "element_name": "home", "element_type": "link", "event_description": "Trang chủ"}'
                    >
                      <img
                        src="https://fpt.vn/fontend_v2.0_2024/assets/images/fpt-logo.svg"
                        alt="FPT Telecom"
                        title="FPT Telecom"
                      />
                    </a>
                  </div>
                  <button
                    type="button"
                    className={`navbar-toggle navbar-toggle-custom ${
                      !isMobileMenuOpen ? "collapsed" : ""
                    }`}
                    onClick={handleMobileMenuToggle}
                    aria-expanded={isMobileMenuOpen}
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
                  aria-expanded={isMobileMenuOpen}
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
                  <ul className="nav navbar-nav">
                    {renderMenuItem(
                      "products",
                      "Sản phẩm dịch vụ",
                      <ul className="dropdown-menu">
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="#"
                            className="title-product-mn"
                            title="Internet Cáp Quang"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/spdv/icon-internet-fpt.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Internet Cáp Quang
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/internet-ca-nhan"
                              >
                                Internet cá nhân
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/internet-gia-dinh"
                                target="_self"
                                title="Internet Cáp Quang"
                              >
                                Internet gia đình
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/internet-game-thu"
                                target="_self"
                                title="Internet Cáp Quang"
                              >
                                Internet game thủ
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/internet-doanh-nghiep"
                                target="_self"
                                title="Internet Cáp Quang"
                              >
                                Internet doanh nghiệp
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Truyền hình & Giải trí"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/spdv/icon-fptplay.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Truyền hình & Giải trí
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/truyen-hinh-fpt-play"
                                target="_self"
                                title="Truyền hình & Giải trí"
                              >
                                FPT Play
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Giám Sát Thông Minh"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/spdv/icon-smarthome.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Giám Sát Thông Minh
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/thiet-bi-camera"
                                target="_self"
                                title="Giám Sát Thông Minh"
                              >
                                FPT Camera
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/thiet-bi-smart-home"
                                target="_self"
                                title="Giám Sát Thông Minh"
                              >
                                FPT Smart Home
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Dịch vụ tiện ích"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/menu-head/462564079_881786490796767_4512469286751778495_n.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Dịch vụ tiện ích
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/bao-mat-f-safe"
                                target="_self"
                                title="Dịch vụ tiện ích"
                              >
                                F-Safe
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/bao-mat-f-safe-go"
                                target="_self"
                                title="Dịch vụ tiện ích"
                              >
                                F-Safe Go
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ultrafast"
                                target="_self"
                                title="Dịch vụ tiện ích"
                              >
                                Dịch vụ UltraFast
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/hyperfast"
                                target="_self"
                                title="Dịch vụ tiện ích"
                              >
                                Dịch vụ HyperFast
                                <span className="new-label">Mới ra mắt</span>
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Sức khỏe & Y tế"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/menu-head/icon-fpt-medicare.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Sức khỏe & Y tế
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/thiet-bi-medicare"
                                target="_self"
                                title="Sức khỏe & Y tế"
                              >
                                FPT MediCare
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    )}
                    <li className="menu-item menu-item-lv-1 dropdown other-link">
                      <a href="https://fpt.vn/tin-tuc">Tin tức & khuyến mãi</a>
                    </li>
                    {renderMenuItem(
                      "deals",
                      "Ưu đãi",
                      <ul className="dropdown-menu">
                        <li className="menu-item menu-item-lv-2">
                          <a
                            className="menu-item-link title-product-mn"
                            href="https://fpt.vn/khach-hang-than-thiet"
                          >
                            <span className="title-product">
                              Khách hàng thân thiết
                            </span>
                          </a>
                        </li>
                      </ul>,
                      true
                    )}
                    {renderMenuItem(
                      "support",
                      "Hỗ trợ",
                      <ul className="dropdown-menu">
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="https://fpt.vn/ho-tro"
                            target="_self"
                            className="title-product-mn"
                            title="Hỗ trợ thông tin"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/support-mn/icon-ho-tro-thong-tin.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Hỗ trợ thông tin
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/cau-hoi-thuong-gap"
                                target="_self"
                                title="Hỗ trợ thông tin"
                              >
                                Câu hỏi thường gặp
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/huong-dan-su-dung"
                                target="_self"
                                title="Hỗ trợ thông tin"
                              >
                                Hướng dẫn sử dụng
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/huong-dan-thu-tuc"
                                target="_self"
                                title="Hỗ trợ thông tin"
                              >
                                Chính sách và thủ tục
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/quan-ly-chat-luong-dich-vu"
                                target="_self"
                                title="Hỗ trợ thông tin"
                              >
                                Quản lý chất lượng dịch vụ
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/dieu-khoan-bao-mat"
                                target="_self"
                                title="Hỗ trợ thông tin"
                              >
                                Điều khoản bảo mật
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Hỗ trợ kỹ thuật"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/support-mn/icon-ho-tro-ky-thuat.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Hỗ trợ kỹ thuật
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/huong-dan-cai-dat"
                                target="_self"
                                title="Hỗ trợ kỹ thuật"
                              >
                                Hướng dẫn cài đặt
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/ho-tro/xu-ly-su-co"
                                target="_self"
                                title="Hỗ trợ kỹ thuật"
                              >
                                Xử lý sự cố
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Nhân viên hỗ trợ"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/support-mn/icon-lien-he-24-7.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Nhân viên hỗ trợ
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="tel:19006600"
                                target="_self"
                                title="Nhân viên hỗ trợ"
                              >
                                Tổng đài 19006600
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/hi-fpt"
                                target="_self"
                                title="Nhân viên hỗ trợ"
                              >
                                Ứng dụng Hi FPT
                              </a>
                            </li>
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://zalo.me/fpttelecom"
                                target="_blank"
                                rel="noopener noreferrer"
                                title="Nhân viên hỗ trợ"
                              >
                                Kênh Zalo OA
                              </a>
                            </li>
                          </ul>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            href="javascript:void(0)"
                            target="_self"
                            className="title-product-mn"
                            title="Phòng giao dịch"
                          >
                            <span className="icon-product">
                              <img
                                src="https://fpt.vn/storage/upload/images/menus/icons/support-mn/device-message.png"
                                alt=""
                              />
                            </span>
                            <span className="title-product">
                              Phòng giao dịch
                            </span>
                          </a>
                          <ul className="list-child-menu">
                            <li className="menu-item menu-item-lv-3">
                              <a
                                className="menu-item-link"
                                href="https://fpt.vn/vi/khach-hang-ca-nhan/ho-tro/lien-he-24-7/diem-giao-dich"
                                target="_self"
                                title="Phòng giao dịch"
                              >
                                Địa điểm
                              </a>
                            </li>
                          </ul>
                        </li>
                      </ul>
                    )}
                    {renderMenuItem(
                      "other",
                      "Khác",
                      <ul className="dropdown-menu">
                        <li className="menu-item menu-item-lv-2">
                          <a
                            className="menu-item-link title-product-mn"
                            href="https://fpt.vn/member"
                          >
                            <span className="title-product">Member FPT</span>
                          </a>
                        </li>
                        <li className="menu-item menu-item-lv-2">
                          <a
                            className="menu-item-link title-product-mn"
                            href="https://fpt.vn/pay/vi/auth"
                          >
                            <span className="title-product">
                              Thanh toán hoá đơn
                            </span>
                          </a>
                        </li>
                      </ul>,
                      true
                    )}
                    {/* 2 link cho mobile */}
                    <li className="second-link_mobile">
                      <a
                        href="/vi/khach-hang-ca-nhan"
                        title="Khách hàng cá nhân"
                      >
                        Khách hàng cá nhân
                      </a>
                    </li>
                    <li className="second-link_mobile">
                      <a
                        href="/vi/khach-hang-doanh-nghiep"
                        title="Khách hàng doanh nghiệp"
                      >
                        Khách hàng doanh nghiệp
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="nav--search-menu">
                  <button
                    id="toggle-search"
                    onClick={handleSearchToggle}
                  ></button>
                </div>
                <button id="toggle-search-close" onClick={closeSearch}></button>
                <form
                  action="https://fpt.vn/vi/tim-kiem"
                  id="searchBar"
                  className="search-bar"
                  style={{ display: isSearchOpen ? "block" : "none" }}
                >
                  <input
                    ref={searchInputRef}
                    type="text"
                    name="q"
                    className="text-search"
                    autoComplete="off"
                    placeholder="Tìm kiếm"
                    maxLength={100}
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div
        className={`${styles.overlay} ${
          isDesktop && openDesktopMenu !== null ? styles.isOpen : ""
        }`}
        onClick={handleMouseLeave}
      ></div>
    </>
  );
};

export default Header;
