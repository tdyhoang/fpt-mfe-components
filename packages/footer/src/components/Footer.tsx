import React from "react";
import { FOOTER_DATA } from "../data/footer.data";
import { IPv6Logo } from "./IPv6Logo";

interface FooterProps {
  variant: "consumer" | "enterprise";
}

const Footer: React.FC<FooterProps> = ({ variant }) => {
  const isEnterprise = variant === "enterprise";
  const data = isEnterprise ? FOOTER_DATA.enterprise : FOOTER_DATA.consumer;

  if (isEnterprise) {
    return (
      <footer className="footer footer-enterprise">
        <div className="container">
          <div className="col-xs-12 four-column-footer fix-pad">
            <div className="col-xs-12 col-sm-5">
              <div className="col-xs-12 col-sm-6 fix-pad">
                {data.columns[0].links.map((link, i) => (
                  <h4 className="title-footer-item" key={i}>
                    <a
                      href={link.url}
                      title={link.label}
                      className="title-footer-item"
                    >
                      {link.label}
                    </a>
                  </h4>
                ))}
              </div>
              <div className="col-xs-12 col-sm-6 fix-pad">
                <h4 className="title-footer-item">{data.columns[1].title}</h4>
                <ul>
                  {data.columns[1].links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} title={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-xs-12 col-sm-7">
              <div className="col-xs-12 col-sm-5 fix-pad">
                <p className="title-footer-item hidden-sm-down">&nbsp;</p>
                <ul className="enterprise-third-column">
                  {data.columns[2].links.map((link, i) => (
                    <li key={i}>
                      <a href={link.url} title={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-xs-12 col-sm-7 img-footer-1">
                <a href="https://fptjobs.com/" target="_blank" title="FPT Jobs">
                  <img
                    className="img-responsive pull-right"
                    src="https://fpt.vn/storage/upload/images/banners/associated/fptjobs_new.png"
                    alt="FPT Jobs"
                  />
                </a>
              </div>
            </div>
          </div>

          <div>
            <div className="col-xs-12 col-sm-5 wrap-follow">
              <p className="title-footer-item">Follow Us</p>
              <a
                href="https://www.facebook.com/FptTelecom/"
                className="inline-sm"
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className="icon"
                  src="https://fpt.vn/assets/frontend/img/icon/face.png"
                  alt=""
                  style={{ marginRight: 5 }}
                />
                <span className="hidden-xs">Find us on Facebook</span>
              </a>
            </div>

            <div className="col-xs-12 col-sm-7 enterprise-footer-block">
              <div className="col-xs-12 fix-pad">
                <div className="col-xs-12 col-sm-12 col-md-6 no-pad-l no-pad-l-r-767">
                  <p
                    style={{
                      color: "#686868",
                      fontSize: "12px",
                      fontFamily: "'Roboto-Regular'",
                      lineHeight: "18px",
                      marginBottom: "4px",
                    }}
                  >
                    {data.contactInfo.registration}
                  </p>
                  <p
                    style={{
                      color: "#686868",
                      fontSize: "12px",
                      fontFamily: "'Roboto-Regular'",
                      lineHeight: "18px",
                      marginBottom: "4px",
                    }}
                  >
                    {data.contactInfo.license}
                  </p>
                  <p
                    style={{
                      color: "#686868",
                      fontSize: "12px",
                      fontFamily: "'Roboto-Regular'",
                      lineHeight: "18px",
                      marginBottom: "12px",
                    }}
                  >
                    {data.contactInfo.companyName}
                    <br />
                    Địa chỉ trụ sở công ty: {data.contactInfo.headquarters}
                    <br />
                    Địa chỉ liên lạc: {data.contactInfo.contactAddress}
                    <br />
                    Thư điện tử:{" "}
                    <a
                      className="foot-hotline"
                      href={`mailto:${data.contactInfo.email}`}
                      style={{ fontWeight: 500, color: "#686868" }}
                    >
                      {data.contactInfo.email}
                    </a>
                    <br />
                    Số điện thoại liên hệ:{" "}
                    <a
                      className="foot-hotline"
                      href={`tel:${data.contactInfo.hotline.replace(
                        /\s/g,
                        ""
                      )}`}
                      style={{ fontWeight: 500, color: "#686868" }}
                    >
                      {data.contactInfo.hotline}
                    </a>
                    <br />
                    Tên người đại diện: Ông Hoàng Việt Anh
                  </p>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-3 no-pad-l no-pad-l-r-767">
                  <a href="http://online.gov.vn/HomePage/CustomWebsiteDisplay.aspx?DocId=35569">
                    <img
                      alt="FPT Telecom"
                      src="https://fpt.vn/storage/upload/images/blocks/20150827110756-dathongbao.png"
                      style={{ height: "50px" }}
                    />
                  </a>
                </div>

                <div className="col-xs-6 col-sm-6 col-md-3 no-pad-l no-pad-l-r-767">
                  <IPv6Logo />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="footer-menu hidden-xs">
          <div className="container text-center">
            <div className="col-xs-12 col-sm-5 menu-footer-last">
              <span>
                <a
                  href="https://fpt.vn/vi/khach-hang-doanh-nghiep"
                  title="Trang chủ"
                >
                  Trang chủ
                </a>
              </span>
              <span>
                <a
                  href="https://fpt.vn/vi/khach-hang-doanh-nghiep/ve-fpt-telecom-international.html"
                  title="Về FPT Telecom International"
                >
                  Về FPT Telecom International
                </a>
              </span>
              <span>
                <a href="https://fpt.vn/fti" title="FTI Member">
                  FTI Member
                </a>
              </span>
              <span>
                <a
                  href="https://fpt.vn/vi/khach-hang-doanh-nghiep/dich-vu/kenh-thue-rieng-va-truyen-tai-du-lieu.html"
                  title="Dịch vụ"
                >
                  Dịch vụ
                </a>
              </span>
              <span>
                <a
                  href="https://fpt.vn/vi/khach-hang-doanh-nghiep/tin-tuc"
                  title="Tin tức"
                >
                  Tin tức
                </a>
              </span>
              <span>
                <a
                  href="https://fpt.vn/vi/khach-hang-doanh-nghiep/ho-tro-khach-hang-doanh-nghiep.html"
                  title="Liên hệ"
                >
                  Liên hệ
                </a>
              </span>
            </div>
          </div>
        </div>

        <div className="logo-footer">
          <div className="container text-center">
            <a className="" href="https://fpt.vn">
              <img
                className=""
                src="https://fpt.vn/assets/images/fpt-logo.svg"
                alt="FPT Telecom"
              />
            </a>
            <span className="sub-footer">
              &copy; 2018 Bản quyền thuộc về FPT Telecom
            </span>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="footer">
      <div className="container link-footer-desktop">
        <div className="row row-fptlogo">
          <div className="col-sm-6">
            <span>
              <a href="https://fpt.vn">
                <img
                  src="https://fpt.vn/fontend_v2.0_2024/assets/images/fpt-logo.svg"
                  className="logo-style"
                  alt="FPT Telecom"
                />
              </a>
            </span>
          </div>
          <div className="col-sm-6">
            <ul className="foot-social">
              {FOOTER_DATA.consumer.socials.map((s, i) => (
                <li key={i}>
                  <a
                    href={s.url}
                    style={{ margin: 0 }}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img
                      className="icon"
                      src={`https://fpt.vn/storage/upload/images/menus/social-network/foot-${s.icon}.png`}
                      alt=""
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="row row-link-foot">
          <div className="col-sm-7 col-left">
            <p>{data.contactInfo.registration}</p>
            <p>{data.contactInfo.license}</p>
            <p className="space">
              <b>{data.contactInfo.companyName}</b>
            </p>
            <p>
              <img
                src="https://fpt.vn/fontend_v2.0_2024/assets/images/f-imap.svg"
                alt=""
              />{" "}
              {data.contactInfo.address}
            </p>
            <p>
              <img
                src="https://fpt.vn/fontend_v2.0_2024/assets/images/f-iemail.svg"
                alt=""
              />{" "}
              <a href={`mailto:${data.contactInfo.email}`}>
                {data.contactInfo.email}
              </a>
            </p>
            <p>
              <img
                src="https://fpt.vn/fontend_v2.0_2024/assets/images/f-iphone.svg"
                alt=""
              />{" "}
              <a href={`tel:${data.contactInfo.hotline.replace(/\s/g, "")}`}>
                {data.contactInfo.hotline}
              </a>
            </p>
            <p className="space">{data.contactInfo.representative}</p>
            <div className="online-gov-vn">
              <a
                href="http://online.gov.vn/Home/WebDetails/35561"
                target="_blank"
                className="img"
              >
                <img
                  alt="FPT Telecom"
                  src="https://fpt.vn/storage/upload/images/blocks/20150827110756-dathongbao.png"
                />
              </a>
            </div>
          </div>
          <div className="col-sm-5 col-right">
            {data.columns.map((col, i) => (
              <div className="col-sm-4" key={i}>
                <h4 className="foot-title">{col.title}</h4>
                <ul className="link-footer">
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <h4>
                        <a href={link.url} title={link.label}>
                          {link.label}
                        </a>
                      </h4>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="link-footer-mobile">
        <div>
          <a
            className="logo-fpt-footer"
            title="FPT Telecom"
            href="https://fpt.vn"
          >
            <img
              src="https://fpt.vn/fontend_v2.0_2024/assets/images/fpt-logo.svg"
              className="logo-style"
              alt="FPT Telecom"
            />
          </a>
        </div>
        <div className="license-text-mobile">
          <p>{data.contactInfo.registration}</p>
          <p>{data.contactInfo.license}</p>
          <p className="space">
            <p>{data.contactInfo.companyName}</p>
          </p>
          <p>
            <img
              src="https://fpt.vn/fontend_v2.0_2024/assets/images/f-imap.svg"
              alt=""
            />{" "}
            {data.contactInfo.address}
          </p>
          <p>
            <img
              src="https://fpt.vn/fontend_v2.0_2024/assets/images/f-iemail.svg"
              alt=""
            />{" "}
            <a href={`mailto:${data.contactInfo.email}`}>
              {data.contactInfo.email}
            </a>
          </p>
          <p>
            <img
              src="https://fpt.vn/fontend_v2.0_2024/assets/images/f-iphone.svg"
              alt=""
            />{" "}
            <a href={`tel:${data.contactInfo.hotline.replace(/\s/g, "")}`}>
              {data.contactInfo.hotline}
            </a>
          </p>
          <p className="space">{data.contactInfo.representative}</p>
        </div>

        <div className="accor-link-foot">
          {data.columns.map((col, i) => (
            <div className="tab" key={i}>
              <input
                type="checkbox"
                name="accordion-1"
                id={`cb${36 + i * 5}`}
                defaultChecked={i === 0}
              />
              <label htmlFor={`cb${36 + i * 5}`} className="tab__label">
                {col.title}
              </label>
              <div className="tab__content">
                <ul>
                  {col.links.map((link, idx) => (
                    <li key={idx}>
                      <a href={link.url} title={link.label}>
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div>
          <ul className="foot-social social-mobile">
            {FOOTER_DATA.consumer.socials.map((s, i) => (
              <li key={i}>
                <a
                  href={s.url}
                  style={{ margin: 0 }}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img
                    className="icon"
                    src={`https://fpt.vn/storage/upload/images/menus/social-network/foot-${s.icon}.png`}
                    alt=""
                  />
                </a>
              </li>
            ))}
          </ul>
          <div className="online-gov-vn">
            <a
              href="http://online.gov.vn/Home/WebDetails/35561"
              target="_blank"
              className="img"
            >
              <img
                alt="FPT Telecom"
                src="https://fpt.vn/storage/upload/images/blocks/20150827110756-dathongbao.png"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
