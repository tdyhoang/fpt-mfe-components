import { useState } from "react";

export const IPv6Logo = () => {
  const [dateString] = useState(() => {
    const date = new Date();
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${day}-${month}`;
  });

  return (
    <div data-align="center" id="ipv6_enabled_www_test_logo">
      <div
        style={{
          clear: "both",
          backgroundImage:
            "url(https://fpt.vn/images/ipv6/small_logo_background_right.png)",
          padding: "0px",
          backgroundPosition: "right",
          backgroundRepeat: "no-repeat",
          width: "148px",
          height: "49px",
          margin: "0px auto",
        }}
      >
        <div
          style={{
            color: "#000",
            fontSize: "9px",
            height: "49px",
            width: "145px",
            backgroundRepeat: "repeat-y",
            backgroundImage:
              "url(https://fpt.vn/images/ipv6/small_logo_backgroud_main.png)",
            margin: "0",
            padding: "0",
          }}
        >
          <div style={{ float: "left", margin: "0", padding: "0" }}>
            <img
              src="https://fpt.vn/images/ipv6/small_logo_background_left.png"
              alt="IPv6"
            />
          </div>
          <div
            style={{
              paddingRight: "0",
              paddingBottom: "0",
              paddingTop: "6px",
              paddingLeft: "43px",
              wordBreak: "normal",
              whiteSpace: "nowrap",
              lineHeight: "100%",
              fontSize: "10px",
              textAlign: "left",
            }}
          >
            <span
              style={{
                lineHeight: "100%",
                fontWeight: "bold",
                fontFamily: "arial,sans-serif",
                color: "#fff",
                fontSize: "9px",
                margin: "0",
                padding: "0",
              }}
            >
              Status:
            </span>
            <span
              style={{
                lineHeight: "100%",
                fontStyle: "italic",
                fontFamily: "arial,sans-serif",
                color: "#7df227",
                fontSize: "9px",
                margin: "0",
                padding: "0",
              }}
            >
              <a
                href="https://www.ipv6forum.com/ipv6_enabled/approval_list.php"
                style={{
                  color: "#7df227",
                  textDecoration: "none",
                  background: "transparent",
                  fontStyle: "italic",
                  fontFamily: "arial,sans-serif",
                  fontSize: "9px",
                }}
              >
                {" "}
                IPv6-ON
              </a>
              <br />
            </span>
            <span
              style={{
                lineHeight: "100%",
                fontWeight: "bold",
                fontFamily: "arial,sans-serif",
                color: "#fff",
                fontSize: "9px",
                margin: "0",
                padding: "0",
              }}
            >
              Last:{" "}
            </span>
            <span
              style={{
                lineHeight: "100%",
                fontStyle: "italic",
                fontFamily: "arial,sans-serif",
                color: "#7df227",
                fontSize: "9px",
                margin: "0",
                padding: "0",
              }}
            >
              {dateString}
              <br />
            </span>
            <span
              style={{
                lineHeight: "100%",
                fontWeight: "bold",
                fontFamily: "arial,sans-serif",
                color: "#50001E",
                fontSize: "9px",
              }}
            >
              {" "}
              VIA IPv4 NOW{" "}
            </span>
            <span
              style={{
                lineHeight: "100%",
                fontWeight: "bold",
                fontFamily: "arial,sans-serif",
                color: "#50001E",
                fontSize: "9px",
              }}
            ></span>
          </div>
        </div>
      </div>
    </div>
  );
};
