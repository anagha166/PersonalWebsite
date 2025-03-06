import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

interface ScrollToTopProps {
  children?: React.ReactNode;
}

const ScrollToTop = ({ children }: ScrollToTopProps) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return <>{children}</>;
};

export default ScrollToTop;
