import React, { useRef, useCallback, useReducer } from "react";
// import {useState} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from "./components/TodoInsert";
import TodoList from "./components/TodoList";

function createBulkTodos() {
  const arr = [];
  for (let i = 1; i <= 2500; i++) {
    arr.push({
      id: i,
      text: `할 일 ${i}`,
      checked: false,
    });
  }

  return arr;
} // 반복문을 통해 2500개의 할 일 데이터를 만들어주는 함수

function todoReducer(todos, action) {
  switch (action.type) {
    case "INSERT":
      // { type : 'INSERT' , todo : { id : 1, text: 'todo', checked: false } }
      return todos.concat(action.todo);
    case "REMOVE":
      // { type : 'REMOVE' , id : 1 }
      return todos.filter((todo) => todo.id !== action.id);
    case "TOGGLE":
      // { type : 'TOGGLE' , id : 1 }
      return todos.map((todo) =>
        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
      );
    default:
      return todos;
  }
}

const App = () => {
  // const [todos, setTodos] = useState(createBulkTodos);
  const [todos, dispatch] = useReducer(todoReducer, undefined, createBulkTodos);
  // useRe

  // const [todos, setTodos] = useState([
  //   {
  //     id: 1,
  //     text: "리액트의 기초 알아보기",
  //     checked: true,
  //   },
  //   {
  //     id: 2,
  //     text: "컴포넌트 스타일링해 보기",
  //     checked: true,
  //   },
  //   {
  //     id: 3,
  //     text: "일정 관리 앱 만들어 보기",
  //     checked: false,
  //   },
  // ]);

  const nextId = useRef(2501);

  const onInsert = useCallback(
    (text) => {
      const todo = {
        id: nextId.current,
        text,
        checked: false,
      };

      dispatch({ type: "INSERT", todo });

      // setTodos((todos) => todos.concat(todo));
      // useState 함수형 업데이트로 최적화

      // setTodos(todos.concat(todo));
      // 최적화 되지 않은 상태

      nextId.current += 1;
    },
    []
    // [todos]
  );

  const onRemove = useCallback(
    (id) => {
      dispatch({ type: "REMOVE", id });

      // setTodos((todos) => todos.filter((todo) => todo.id !== id));
      // useState 함수형 업데이트로 최적화

      // setTodos(todos.filter((todo) => todo.id !== id));
      // 최적화 되지 않은 상태
    },
    []
    // [todos]
  );

  const onToggle = useCallback(
    (id) => {
      dispatch({ type: "TOGGLE", id });

      // setTodos((todos) =>
      //   todos.map((todo) =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   )
      // );
      // useState 함수형 업데이트로 최적화

      // setTodos(
      //   todos.map((todo) =>
      //     todo.id === id ? { ...todo, checked: !todo.checked } : todo
      //   )
      // ); // 최적화 되지 않은 상태
    },
    // [todos]
    []
  );

  return (
    <TodoTemplate>
      <TodoInsert onInsert={onInsert} />
      <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
    </TodoTemplate>
  );
};

export default App;
