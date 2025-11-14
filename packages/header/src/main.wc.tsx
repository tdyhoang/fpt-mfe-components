import r2wc from "@r2wc/react-to-web-component";

import HeaderWebComponent from "./HeaderWebComponent";

const FptHeaderWC = r2wc(HeaderWebComponent);

customElements.define("fpt-header", FptHeaderWC);
