import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import { LEGACY_CSS } from "./styles/legacy-css";

class FPTFooterElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const hostStyle = document.createElement("style");
    hostStyle.textContent = `
      :host {
        all: initial;
        display: block;
        width: 100vw;
        position: relative;
        left: 50%;
        right: 50%;
        margin-left: -50vw;
        margin-right: -50vw;
        contain: content;
      }
      :host * {
        box-sizing: border-box;
      }
    `;
    shadow.appendChild(hostStyle);

    const styleElement = document.createElement("style");
    styleElement.textContent = LEGACY_CSS;
    shadow.appendChild(styleElement);

    const mountPoint = document.createElement("div");
    mountPoint.id = "fpt-footer-root";
    shadow.appendChild(mountPoint);

    const variant = (this.getAttribute("variant") || "consumer") as
      | "consumer"
      | "enterprise";

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <Footer variant={variant} />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount();
  }
}

if (!customElements.get("fpt-footer")) {
  customElements.define("fpt-footer", FPTFooterElement);
}
