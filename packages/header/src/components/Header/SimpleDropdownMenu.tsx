import type { MenuItem } from "./menuData";

interface SimpleDropdownMenuProps {
  links?: MenuItem[];
  onNavigate: (path: string) => void;
}

const SimpleDropdownMenu = ({ links, onNavigate }: SimpleDropdownMenuProps) => {
  return (
    <ul className="dropdown-menu">
      {links?.map((link) => (
        <li key={link.id} className="menu-item menu-item-lv-2">
          <a
            href={link.href}
            className="menu-item-link title-product-mn"
            onClick={() => onNavigate(link.href)}
          >
            <span className="title-product">{link.text}</span>
          </a>
        </li>
      ))}
    </ul>
  );
};

export default SimpleDropdownMenu;
