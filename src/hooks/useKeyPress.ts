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

  const [blockInfo, setBlockInfo] = useState({
    blockNumber: 0,
    blockHash: "",
    blockTransactions: [],
    blockTimestamp: 0,
    blockMiner: "",
  });

  useEffect(() => {
    //블록체인에서 정보를 받아오는 함수
    const block = {
      blockNumber: 1,
      blockHash: "",
      blockTransactions: [],
      blockTimestamp: 0,
      blockMiner: "",
    };
    setBlockInfo(block);
  }, []);

  function animateCutebear() {
    // ..곰돌이 그려줌
  }

  useEffect(() => {
    animateCutebear();
  }, [blockInfo]);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    window.addEventListener("keyup", handleKeyUp);

    return () => {
      console.log("removeEventListener");
      window.removeEventListener("keydown", handleKeyDown);
      window.removeEventListener("keyup", handleKeyUp);
    };
  }, [targetKey]);

  return isKeyPressed;
};

export default useKeyPress;
