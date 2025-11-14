import { useState } from "react";

const TopBar = ({ user }: { user: any }) => {
  const [activeLink, setActiveLink] = useState("personal");

  return (
    <div className="header-top">
      <div className="head-top--contain">
        <ul className="links-top">
          <li>
            <a
              href="/vi/khach-hang-ca-nhan"
              className={activeLink === "personal" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("personal");
              }}
            >
              Khách hàng cá nhân
            </a>
          </li>
          <li>
            <a
              href="/vi/khach-hang-doanh-nghiep"
              className={activeLink === "business" ? "active" : ""}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink("business");
              }}
            >
              Khách hàng doanh nghiệp
            </a>
          </li>
        </ul>

        <div className="col-head-login">
          <div className="login">
            <div className="choose-location-btn">
              <img
                src="https://fpt.vn/assets/frontend/img/icon/location-des.svg"
                alt="Chọn vị trí"
              />
              <span className="locationname">Chọn vị trí</span>
            </div>

            {user ? (
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginLeft: "32px",
                }}
              >
                <span style={{ color: "#DDE4FC", marginRight: "16px" }}>
                  Chào, {user.name}
                </span>
                <a href="https://fpt.vn/login" title="Đăng xuất">
                  <span>Đăng xuất</span>
                </a>
              </div>
            ) : (
              <a href="https://fpt.vn/login" title="Đăng nhập">
                <img
                  src="https://fpt.vn/fontend_v2.0_2024/assets/images/profile-circle.svg"
                  alt="Đăng nhập"
                  className="icon-profile"
                />
                <span>Đăng nhập</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
