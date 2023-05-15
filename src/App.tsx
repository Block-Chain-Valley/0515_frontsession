import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { useRecoilValue } from "recoil";
import { useSetRecoilState } from "recoil";
import { isToggleAtom } from "./state/count";
import Toggle from "./Toggle";
import Count from "./Count";
import useInput from "./hooks/useInput";
import useKeyPress from "./hooks/useKeyPress";

function App() {
  const [count, setCount] = useState(0);
  const isToggle = useRecoilValue(isToggleAtom);
  const setToggleAtom = useSetRecoilState(isToggleAtom);
  const toggle = () => setToggleAtom((prev) => !prev);
  const nameInput = useInput({ initialValue: "" });
  const isEnterPressed = useKeyPress("Enter");

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>Toggle state at APP: {isToggle ? "true" : "false"}</div>
      <Toggle />
      <Count />
      <input
        type="text"
        value={nameInput.value}
        onChange={nameInput.onChange}
      />
      <button onClick={nameInput.reset}>초기화</button>

      <div>
        <p>
          Enter 키가 눌렸는지 여부: {isEnterPressed ? "눌렸음" : "눌리지 않음"}
        </p>
      </div>
    </>
  );
}

export default App;
