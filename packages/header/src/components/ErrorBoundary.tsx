import { Component, type ErrorInfo, type ReactNode } from "react";

interface Props {
  children: ReactNode;
  fallback?: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  public static getDerivedStateFromError(error: Error): State {
    console.warn("Critical Error caught:", error);
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("[FPT-HEADER CRITICAL ERROR]:", error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        return this.props.fallback;
      }

      return (
        <div
          className="navbar navbar-default navbar-static-top menu-head"
          style={{ minHeight: "70px", background: "#fff" }}
        >
          <div
            className="container"
            style={{ display: "flex", alignItems: "center", height: "70px" }}
          >
            <a href="https://fpt.vn" style={{ marginRight: "auto" }}>
              <img
                src="https://fpt.vn/fontend_v2.0_2024/assets/images/fpt-logo.svg"
                alt="FPT Telecom"
                height="36"
              />
            </a>
            <span
              style={{ color: "red", fontSize: "12px", fontWeight: "bold" }}
            >
              System Maintenance Mode
            </span>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
