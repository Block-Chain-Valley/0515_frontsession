import { useState, useEffect } from "react";

const useKeyPress = (targetKey: string): boolean => {
  const [isKeyPressed, setIsKeyPressed] = useState(false);

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      setIsKeyPressed(true);
    }
  };

  const handleKeyUp = (event: KeyboardEvent) => {
    if (event.key === targetKey) {
      setIsKeyPressed(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
};

export default useKeyPress;
