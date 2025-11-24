import React from "react";
import ReactDOM from "react-dom/client";

declare global {
  interface Window {
    React: typeof React;
    ReactDOM: typeof ReactDOM;
  }
}

if (typeof window !== "undefined") {
  window.React = React;
  window.ReactDOM = ReactDOM;
}

console.log("FPT Vendor: React 19 Runtime Loaded");
