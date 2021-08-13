import React, { useState, Suspense } from "react";
import logo from "./logo.svg";
import "./App.css";
import loadable from "@loadable/component";
// const SplitMe = React.lazy(() => import("./SplitMe"));
const SplitMe = loadable(() => import("./SplitMe"), {
  fallback: <div>loading...</div>,
});

function App() {
  const [visible, setVisible] = useState(Boolean);

  const onClick = () => {
    setVisible(true);
  };
  const onMouseOver = () => {
    SplitMe.preload();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p onClick={onClick} onMouseOver={onMouseOver}>
          Hello React
        </p>
        {/* <Suspense fallback={<div>loadding...</div>}>
          {visible && <SplitMe />}
        </Suspense> */}
        {/* React.laze() 와 Suspense를 사용한 방법 */}
        {visible && <SplitMe />}
      </header>
    </div>
  );
}

export default App;
