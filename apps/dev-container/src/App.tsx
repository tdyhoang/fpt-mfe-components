import { useEffect } from "react";
import { BrowserRouter, useLocation } from "react-router";

import "./App.css";

const loadMFEScript = (id: string, src: string) => {
  if (document.getElementById(id)) return;
  const script = document.createElement("script");
  script.id = id;
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
    loadMFEScript("fpt-header", "http://localhost:5001/fpt-header.js");
    loadMFEScript("fpt-footer", "http://localhost:5002/fpt-footer.js");
  }, []);

  return (
    <BrowserRouter>
      <AppLayout />
    </BrowserRouter>
  );
}

export default App;

declare global {
  namespace JSX {
    interface IntrinsicElements {
      "fpt-header": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;

      "fpt-footer": React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      > & {
        variant?: "consumer" | "enterprise";
      };
    }
  }
}
