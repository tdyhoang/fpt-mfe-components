import { useState, useEffect } from "react";

type CustomerSegment = "consumer" | "enterprise";

export const useCustomerSegment = () => {
  const [activeSegment, setActiveSegment] =
    useState<CustomerSegment>("consumer");

  useEffect(() => {
    const checkSegment = () => {
      const path = window.location.pathname;
      if (path.includes("/khach-hang-doanh-nghiep")) {
        setActiveSegment("enterprise");
      } else {
        setActiveSegment("consumer");
      }
    };

    checkSegment();

    window.addEventListener("popstate", checkSegment);
    return () => window.removeEventListener("popstate", checkSegment);
  }, []);

  return activeSegment;
};
