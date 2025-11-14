import type { MenuColumn } from "./menuData";

interface DropdownMenuProps {
  columns?: MenuColumn[];
  handleLinkClick: (e: React.MouseEvent<HTMLAnchorElement>, item: any) => void;
}

const DropdownMenu = ({ columns, handleLinkClick }: DropdownMenuProps) => {
  return (
    <ul className="dropdown-menu">
      {columns?.map((column) => (
        <li key={column.id} className="menu-item menu-item-lv-2">
          <a
            href="#"
            className="title-product-mn"
            onClick={(e) => handleLinkClick(e, column)}
          >
            {column.icon && (
              <span className="icon-product">
                <img src={column.icon} alt={column.title} />
              </span>
            )}
            <span className="title-product">{column.title}</span>
          </a>
          {column.links && (
            <ul className="list-child-menu">
              {column.links.map((link) => (
                <li key={link.id} className="menu-item menu-item-lv-3">
                  <a href={link.href} onClick={(e) => handleLinkClick(e, link)}>
                    {link.text}
                    {link.new && <span className="new-label">Mới ra mắt</span>}
                  </a>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default DropdownMenu;
