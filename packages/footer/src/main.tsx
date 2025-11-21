import React from "react";
import ReactDOM from "react-dom/client";
import Footer from "./components/Footer";
import { LEGACY_CSS } from "./styles/legacy-css";

class FPTFooterElement extends HTMLElement {
  private root: ReactDOM.Root | null = null;
  private mountPoint: HTMLDivElement;
  private resizeObserver: ResizeObserver | null = null;
  private mutationObserver: MutationObserver | null = null;

  static get observedAttributes() {
    return ["variant"];
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.mountPoint = document.createElement("div");
  }

  connectedCallback() {
    if (!this.shadowRoot) return;

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
    this.shadowRoot.appendChild(hostStyle);

    const styleElement = document.createElement("style");
    styleElement.textContent = LEGACY_CSS;
    this.shadowRoot.appendChild(styleElement);

    this.shadowRoot.appendChild(this.mountPoint);

    this.mountPoint.className = "footer-wrapper-root";

    this.renderReactApp();

    this.bypassParentPadding();
  }

  private bypassParentPadding() {
    const applyCorrection = () => {
      if (!this.isConnected) return;

      let totalOffset = 0;
      let currentElement = this.parentElement;

      while (
        currentElement &&
        currentElement.tagName !== "BODY" &&
        currentElement.tagName !== "HTML"
      ) {
        const style = window.getComputedStyle(currentElement);

        const pBottom = parseFloat(style.paddingBottom) || 0;

        const mBottom = parseFloat(style.marginBottom) || 0;

        const bBottom = parseFloat(style.borderBottomWidth) || 0;

        totalOffset += pBottom + mBottom + bBottom;

        currentElement = currentElement.parentElement;
      }

      if (totalOffset > 0) {
        this.style.marginBottom = `-${totalOffset}px`;
      } else {
        this.style.marginBottom = "0px";
      }
    };

    requestAnimationFrame(applyCorrection);

    window.addEventListener("resize", applyCorrection);

    this.resizeObserver = new ResizeObserver(() => {
      requestAnimationFrame(applyCorrection);
    });
    this.resizeObserver.observe(document.body);

    this.mutationObserver = new MutationObserver(() => {
      requestAnimationFrame(applyCorrection);
    });
    this.mutationObserver.observe(document.body, {
      attributes: true,
      subtree: true,
      attributeFilter: ["style", "class"],
    });
  }

  attributeChangedCallback(oldValue: string, newValue: string) {
    if (oldValue !== newValue && this.root) {
      this.renderReactApp();
    }
  }

  disconnectedCallback() {
    if (this.root) this.root.unmount();
    if (this.resizeObserver) this.resizeObserver.disconnect();
    if (this.mutationObserver) this.mutationObserver.disconnect();
    window.removeEventListener("resize", () => {});
  }

  private renderReactApp() {
    const variant = (this.getAttribute("variant") || "consumer") as
      | "consumer"
      | "enterprise";

    if (!this.root) {
      this.root = ReactDOM.createRoot(this.mountPoint);
    }

    this.root.render(
      <React.StrictMode>
        <Footer variant={variant} />
      </React.StrictMode>
    );
  }
}

if (!customElements.get("fpt-footer")) {
  customElements.define("fpt-footer", FPTFooterElement);
}
