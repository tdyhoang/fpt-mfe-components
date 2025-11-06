import r2wc from "@r2wc/react-to-web-component";

import Footer from "./components/Footer";
import "./index.css";

const FptFooterWC = r2wc(Footer);

customElements.define("fpt-footer", FptFooterWC);
