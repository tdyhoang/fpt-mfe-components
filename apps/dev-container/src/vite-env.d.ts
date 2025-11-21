import React from "react";

declare module "react" {
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
