import { useEffect } from "react";
import { useLocation } from "react-router-dom";

// go to new page + scroll to top
export function useLink( path ) {
  // auto scrolls to top of page after redirect
  function ScrollToTop() {
    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    return null;
  }

  return { to: path, onClick: () => ScrollToTop() };
}
