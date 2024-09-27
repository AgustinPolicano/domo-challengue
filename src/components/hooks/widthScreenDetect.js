import { useState, useEffect } from "react";

const useScreenWidth = (width) => {
  const [isWidthMatch, setIsWidthMatch] = useState(window.innerWidth <= width);

  useEffect(() => {
    const handleResize = () => {
      setIsWidthMatch(window.innerWidth <= width);
    };

    window.addEventListener("resize", handleResize);

    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, [width]);

  return isWidthMatch;
};

export default useScreenWidth;
