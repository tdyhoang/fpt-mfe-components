import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router";

import "./App.css";

const loadMFEScript = (src: string) => {
  if (document.querySelector(`script[src="${src}"]`)) return;
  const script = document.createElement("script");
  script.src = src;
  script.async = true;
  document.body.appendChild(script);
};

const AppLayout = () => {
  const location = useLocation();

  const footerVariant = location.pathname.includes("khach-hang-doanh-nghiep")
    ? "enterprise"
    : "consumer";

  return (
    <div>
      <fpt-header />

      <main className="content">
        <h1>React Container</h1>
        <p>Main content</p>
      </main>

      <fpt-footer variant={footerVariant} />
    </div>
  );
};

function App() {
  useEffect(() => {
    loadMFEScript("http://localhost:5005/latest/fpt-header.js");
    loadMFEScript("http://localhost:5005/latest/fpt-footer.js");
  }, []);

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;
