import { useState, useEffect } from "react";

function getDeviceType() {
  const width = window.innerWidth;
  const height = window.innerHeight;

  return {
    isMobile: width <= 480, // phones
    isTabletPortrait: width <= 768 && height > width, // tablet portrait
    isTabletLandscape: width <= 1024 && width > height, // tablet landscape
    isLaptopOrDesktop: width > 1024, // laptop or desktop
    isPortrait: height > width,
    isLandscape: width > height,
  };
}

export function useDeviceType() {
  const [device, setDevice] = useState(getDeviceType());

  useEffect(() => {
    function handleResize() {
      setDevice(getDeviceType());
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("orientationchange", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("orientationchange", handleResize);
    };
  }, []);

  return device;
}
