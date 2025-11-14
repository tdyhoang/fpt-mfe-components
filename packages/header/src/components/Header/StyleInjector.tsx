import normalizeStyles from "./normalize.min.css?raw";
import bootstrapStyles from "./bootstrap.min.css?raw";
import bootstrapThemeStyles from "./bootstrap-theme.min.css?raw";

import layoutMinStyles from "./layout.min.css?raw";
import layoutStyles from "./layout_v1.3.css?raw";
import navbarStyles from "./navbar.css?raw";

import customStyles from "./custom.css?raw";
import responsiveStyles from "./responsive_v1.3.css?raw";
import layoutCustome2025Styles from "./layout_custome_2025.css?raw";

const allStyles = `
  ${normalizeStyles}
  ${bootstrapStyles}
  ${bootstrapThemeStyles}
  ${layoutMinStyles}
  ${layoutStyles}
  ${navbarStyles}
  ${customStyles}
  ${responsiveStyles}
  ${layoutCustome2025Styles}
`;

const StyleInjector = () => {
  return <style>{allStyles}</style>;
};

export default StyleInjector;
