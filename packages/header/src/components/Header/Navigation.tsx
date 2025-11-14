import React, { useEffect, useState } from "react";
import { menuData, mobileOnlyLinks } from "./menuData";
import DropdownMenu from "./DropdownMenu";
import SimpleDropdownMenu from "./SimpleDropdownMenu";

const Navigation = ({ onNavigate }: { onNavigate: (path: string) => void }) => {
  const [activeDropdown, setActiveDropdown] = useState<number | null>(null);
  const [isDesktop, setIsDesktop] = useState(window.innerWidth > 991);

  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth > 991);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleLinkClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    item: any
  ) => {
    if (!isDesktop && item.hasDropdown) {
      e.preventDefault();
      setActiveDropdown((prev) => (prev === item.id ? null : item.id));
    } else if (item.href) {
      onNavigate(item.href);
    }
  };

  return (
    <ul className="nav navbar-nav">
      {menuData.map((item) => (
        <li
          key={item.id}
          className={`menu-item menu-item-lv-1 dropdown ${
            item.hasDropdown && item.type === "simple" ? "other-link" : ""
          } ${activeDropdown === item.id ? "open" : ""}`}
          onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.id)}
          onMouseLeave={() => item.hasDropdown && setActiveDropdown(null)}
        >
          <a
            href={item.href || "#"}
            className={item.hasDropdown ? "dropdown-toggle" : ""}
            data-toggle={item.hasDropdown ? "dropdown" : ""}
            onClick={(e) => handleLinkClick(e, item)}
          >
            {item.title}
            {item.hasDropdown && <span className="icon-dropdown-mn" />}
          </a>
          {item.hasDropdown &&
            activeDropdown === item.id &&
            item.type === "mega" && (
              <DropdownMenu
                columns={item.columns}
                handleLinkClick={handleLinkClick}
              />
            )}
          {item.hasDropdown &&
            activeDropdown === item.id &&
            item.type === "simple" && (
              <SimpleDropdownMenu links={item.links} onNavigate={onNavigate} />
            )}
        </li>
      ))}
      {mobileOnlyLinks.map((link) => (
        <li key={link.id} className="second-link_mobile">
          <a href={link.href} onClick={() => onNavigate(link.href)}>
            {link.title}
          </a>
        </li>
      ))}
    </ul>
  );
};
export default Navigation;
