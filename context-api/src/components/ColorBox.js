import React, { useContext } from "react";
// import { ColorConsumer } from "../contexts/color";
import ColorContext from "../contexts/color";

const ColorBox = () => {
  const { state } = useContext(ColorContext);
  // useContext hook로 Context 사용하기
  return (
    <>
      <div style={{ width: "64px", height: "64px", background: state.color }} />
      <div
        style={{ width: "32px", height: "32px", background: state.subcolor }}
      />
    </>
    // <ColorConsumer>
    //   {({ state }) => (
    //     <>
    //       <div
    //         style={{
    //           width: "64px",
    //           height: "64px",
    //           background: state.color,
    //         }}
    //       />
    //       <div
    //         style={{
    //           width: "32px",
    //           height: "32px",
    //           background: state.subcolor,
    //         }}
    //       />
    //     </>
    //   )}
    //   {/* {(value) => (
    //     <div
    //       style={{
    //         width: "64px",
    //         height: "64px",
    //         background: value.color,
    //       }}
    //     />
    //   )} */}
    //   {/* 중괄호를 열어 그 안에 함수를 넣어준 이러한 패턴을 Function as a child 혹은 Render Props라고 지칭한다 */}
    //   {/* 컴포넌트의 children이 있어야 할 자리에 일반 JSX 혹은 문자열이 아닌 함수를 전달할 수 있다. */}
    // {/* </ColorConsumer> */}
  );
};

export default ColorBox;
