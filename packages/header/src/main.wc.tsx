import r2wc from "@r2wc/react-to-web-component";

import Header from "./components/Header";
import "./index.css";

const FptHeaderWC = r2wc(Header);

customElements.define("fpt-header", FptHeaderWC);
