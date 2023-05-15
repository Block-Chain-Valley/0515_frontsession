import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { isToggleAtom } from "./state/count";

function Toggle() {
  const isToggle = useRecoilValue(isToggleAtom);
  const setToggleAtom = useSetRecoilState(isToggleAtom);
  const toggle = () => setToggleAtom((prev) => !prev);
  return (
    <>
      <div>Toggle state at Toggle: {isToggle ? "true" : "false"}</div>
      <button onClick={toggle}>Toggle Mode</button>
    </>
  );
}

export default Toggle;
