import { useEffect, useState } from "react";

export function useNavbarShadow(threshold = 10) {
  const [showShadow, setShowShadow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowShadow(window.scrollY > threshold);
    };

    handleScroll(); // run once on mount

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [threshold]);

  return showShadow;
}
