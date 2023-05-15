import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import {
  countAtom,
  count2Atom,
  countSelector,
  addSelector,
} from "./state/count";
function Count() {
  const count = useRecoilValue(countAtom);
  const count2 = useRecoilValue(count2Atom);
  const countSelectorValue = useRecoilValue(countSelector);
  const addSelectorValue = useRecoilValue(addSelector);
  const setCountAtom = useSetRecoilState(countAtom);
  const setCount2Atom = useSetRecoilState(count2Atom);
  const addCount = () => setCountAtom((prev) => prev + 1);
  const addCount2 = () => setCount2Atom((prev) => prev + 1);

  return (
    <div>
      <div>Count: {count}</div>
      <div>Count2: {count2}</div>
      <div>Count Selector: {countSelectorValue}</div>
      <div>Add Selector: {addSelectorValue}</div>
      <button onClick={addCount}>Add Count</button>
      <button onClick={addCount2}>Add Count2</button>
    </div>
  );
}

export default Count;
