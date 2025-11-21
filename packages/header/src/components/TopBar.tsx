import React from "react";
import { useLocation } from "../hooks/useLocation";
import { useCustomerSegment } from "../hooks/useCustomerSegment";

const TopBar: React.FC = () => {
  const { displayLocation, openLocationPicker } = useLocation();
  const activeSegment = useCustomerSegment();

  return (
    <div className="header-top">
      <div className="head-top--contain">
        <div>
          <ul className="links-top">
            <li>
              <a
                href="/vi/khach-hang-ca-nhan"
                className={activeSegment === "consumer" ? "active" : ""}
              >
                Khách hàng cá nhân
              </a>
            </li>
            <li>
              <a
                href="/vi/khach-hang-doanh-nghiep"
                className={activeSegment === "enterprise" ? "active" : ""}
              >
                Khách hàng doanh nghiệp
              </a>
            </li>
          </ul>
        </div>
        <div className="col-head-login">
          <div className="login">
            <div className="choose-location-btn" onClick={openLocationPicker}>
              <img
                src="https://fpt.vn/assets/frontend/img/icon/location-des.svg"
                alt="Chọn vị trí"
              />
              <span className="locationname">{displayLocation}</span>
            </div>

            <a href="https://fpt.vn/login" title="Đăng nhập">
              <img
                src="https://fpt.vn/fontend_v2.0_2024/assets/images/profile-circle.svg"
                alt="Đăng nhập"
                className="icon-profile"
              />
              <span>Đăng nhập</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
