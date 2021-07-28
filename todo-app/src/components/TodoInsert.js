import React, { useState, useCallback } from "react";
import { MdAdd } from "react-icons/md";
import "./TodoInsert.scss";

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState("");

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);

  const onSubmit = useCallback(
    (e) => {
      onInsert(value);
      setValue("");

      e.preventDefault();
      // submit은 브라우저 새로고침을 유발하기 때문에 다음과 같은 새로고침을 방지하는 코드를 추가해야된다.
    },
    [onInsert, value]
  );

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
      {/* submit으로 작성할 경우 enter key를 눌러도 작동한다.
      만약 onClick으로 작성할 경우 keyPress 로직을 추가로 작성해줘야 한다. */}
    </form>
  );
};

export default TodoInsert;
