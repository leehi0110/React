// import logo from "./logo.svg";
// import Counter from "./useState/counter";
// import Info from "./useState/info";
// import React, { useState } from "react";
// import Counter from "./useReducer/Counter";
// import Info from "./useReducer/Info";
// import Average from "./useMemo/Average";
// import Average from "./useCallback/Average";
// import Average from "./useRef/Average";
import "./App.css";
import Info from "./customHook/Info";

const App = () => {
  // return <Counter />;
  // // useState
  // return <Info />;
  // const [visible, setVisible] = useState(false);
  // return (
  //   <div>
  //     <button
  //       onClick={() => {
  //         setVisible(!visible);
  //       }}
  //     >
  //       {visible ? "숨기기" : "보이기"}
  //     </button>
  //     <hr />
  //     {visible && <Info />}
  //   </div>
  // );
  // // useEffect
  // return <Counter />;
  // return <Info />;
  // return <Average />;
  return <Info />;
};

export default App;
