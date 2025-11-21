// src/main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import { LEGACY_CSS } from "./styles/legacy-css";

class FPTHeaderElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;

  connectedCallback() {
    const shadow = this.attachShadow({ mode: "open" });

    const hostStyle = document.createElement("style");
    hostStyle.textContent = `
      :host {
        all: initial;
        display: block;
      }
      :host * {
        box-sizing: border-box;
      }
      .header-menu {
        top: 0;
        left: 0;
      }
    `;
    shadow.appendChild(hostStyle);

    const styleElement = document.createElement("style");
    styleElement.textContent = LEGACY_CSS;
    shadow.appendChild(styleElement);

    const mountPoint = document.createElement("div");
    mountPoint.id = "fpt-header-root";
    shadow.appendChild(mountPoint);

    this.root = ReactDOM.createRoot(mountPoint);
    this.root.render(
      <React.StrictMode>
        <Header />
      </React.StrictMode>
    );
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount();
  }
}

if (!customElements.get("fpt-header")) {
  customElements.define("fpt-header", FPTHeaderElement);
}
