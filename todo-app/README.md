# Todo-app

## Components

> TodoTemplate : 화면의 가운데서 일정관리를 보여주며, Children으로 내부 JSX를 props로 받아와서 렌더링하는 컴포넌트

> TodoInsert : 새로운 항목을 입력하고 추가할 수 있는 컴포넌트.
> <br>
> state를 통해 인풋의 상태를 관리한다.

> TodoList : todos 배열을 props로 받아 온 후, map 함수를 사용해 여러개의 TodoListItem 컴포넌트로 변환하여 보여주는 컴포넌트

> TodoListItem : 각 할 일 항목에 대한 정보를 보여주는 컴포넌트
> <br>
> todo 객체를 props로 받아와서 상태에 따라 다른 UI를 보여준다.

<br>

## 기능

> onInsert : 새로운 할 일을 추가하는 함수
> <br>
> onRemove : 등록한 할 일을 삭제하는 함수
> <br>
> onToggle : 할 일의 완료 여부를 변경하는 함수

<br>

<img src="./src/Img/completeImg.png" width="80%" height="30%" title="px(픽셀) 크기 설정" alt="completeImg"></img>
<br>

## 성능 최적화

> useState()의 기본값에 가상의 할 일 데이터를 만들어주는 함수를 호출한다.
> <br> > <br>
> 이때, useState(createBulkTodos())로 작성하면 리렌더링 될 때마다 함수가 호출된다.
> <br> > <br>
> 하지만, useState(createBulkTodos)처럼 파라미터를 함수형태로 넣어주면 컴포넌트가 처음 렌더링 될때만 함수가 실행된다.

```
function createBulkTodos() {
  const arr = [];
  for(let i=1;i<=2500;i++) {
    arr.push({
      id: i,
      test: `할 일 ${i}`,
      checked: false,
    });
  }

  return arr;
}

...............
const [todos, setTodos] = useState(createBulkTodos);
```

### 1. React.Memo 사용한 컴포넌트 성능 최적화

<br>

> 1. '할 일'을 클릭할 경우 App 컴포넌트의 state가 변경되면서 App 컴포넌트가 리렌더링 된다.
>    <br> > <br>
> 2. 부모 컴포넌트가 리렌더링 됨에 따라 자식 컴포넌트인 TodoList 컴포넌트가 리렌더링 되고 그 아래의 아이템 컴포넌트들도 리렌더링 된다.
>    <br> > <br>
> 3. 체크한 항목을 제외한 항목들은 리렌더링 할 필요가 없고 이를 처리하기 위해 React.memo를 사용한다.
>    > React.memo 함수는 컴포넌트 Props가 바뀌지 않았다면, 리렌더링 하지 않도록 설정합니다.

```
export default React.memo(TodoListItem);
..........................................
export default React.memo(TodoList);
```

### 2.useState의 함수형 업데이트 사용

<br>

> setState 함수를 사용할 때 새로운 상태를 파라미터로 넣는 것이 아니라, 상태 업데이트를 어떻게 할 지 정의해 주는 업데이트 함수를 넣을 수 있다.

> #Example Code
>
> ```
> const[number, setNumber] = useState(0);
> // prevNumber는 현재 number 값을 가리킨다.
> const onIncrease = useCallback(
>   () => setNumber(prevNumber => prevNumber + 1),
>   [],
> );
> ```
>
> setNumber(number+1)이 아니라 어떻게 업데이트할지 정의해 주는 업데이트 함수를 넣는다.
> <br> > <br>
> 이렇게 할 경우 useCallback()을 사용할 때 두 번째 파라미터로 넣는 배열에 number를 넣지 않아도 된다.

> #onToggle()에서 함수형 업데이트 사용
>
> ```
> const onToggle = useCallback(
>   (id) => {
>     setTodos((todos) =>
>       todos.map((todo) =>
>         todo.id === id ? { ...todo, checked: !todo.checked } : todo
>       )
>     );
>   }, []
> );
> ```
>
> <br>

<br>

### 3. useReducer를 사용한 최적화

<br>

> useState의 함수형 업데이트를 사용하는 대신, useReducer를 사용해 onTogglerhk onRemove가 계속 새로워지는 문제를 해결할 수 있다.
> <br>

> useReducer를 위한 reducer 함수
>
> ```
> function todoReducer(todos, action) {
>  switch (action.type) {
>    case "INSERT":
>      // { type : 'INSERT' , todo : { id : 1, text: 'todo', checked: false } }
>      return todos.concat(action.todo);
>    case "REMOVE":
>      // { type : 'REMOVE' , id : 1 }
>      return todos.filter((todo) => todo.id !== action.id);
>    case "TOGGLE":
>      // { type : 'TOGGLE' , id : 1 }
>      return todos.map((todo) =>
>        todo.id === action.id ? { ...todo, checked: !todo.checked } : todo
>      );
>    default:
>      return todos;
>  }
> ```
>
> <br>
> useReducer를 사용해 onInsert, onToggle, onRemove 최적화

> ```
> const onInsert = useCallback(
>   (text) => {
>     const todo = {
>       id: nextId.current,
>       text,
>       checked: false,
>     };
>
>     dispatch({ type: "INSERT", todo });
>     nextId.current += 1;
>   }, []
> );
>
> const onRemove = useCallback(
>   (id) => {
>     dispatch({ type: "REMOVE", id });
>   }, []
> );
>
> const onToggle = useCallback(
>   (id) => {
>     dispatch({ type: "TOGGLE", id });
>   }, []
> );
> ```
>
> <br>
> useReducer를 사용할 경우 기존의 코드를 많이 수정해야 되지만, 상태를 업데이트하는 로직을 모아 컴포넌트 바까에 둘 수 있는 장점이 있다.

<br>

### 4. react-virtualized를 사용한 렌더링 최적화

<br>

> react-virtualized를 사용하면 리스트 컴포넌트에서 스크롤되기 전에 보이지 않는 컴포넌트는 렌더링하지 않고 크기만 차지하게 만들 수 있다.
> <br> > <br>
> 이를 통해 낭비되는 자원을 아낄 수 있다.
>
> ```
> const rowRenderer = useCallback(
>  ({ index, key, style }) => {
>    const todo = todos[index];
>    return (
>      <TodoListItem
>        todo={todo}
>        key={key}
>        onRemove={onRemove}
>        onToggle={onToggle}
>        style={style}
>      />
>    );
>  },
>  [onRemove, onToggle, todos]
> );
>
> return (
>  <List
>    className="TodoList"
>    width={512}
>    height={513}
>    rowCount={todos.length}
>    rowHeight={57}
>    rowRenderer={rowRenderer}
>    list={todos}
>    style={{ outline: "none" }}
>  />
> );
> ```
>
> width: 전체 크기 / height: 전체 높이 / rowCnt: 항목개수
> rowHeight: 항목 높이 / rowRenderer : 항목을 렌더링할 때 쓰이는 함수
> list : 배열
> 각 아이템 컴포넌트의 최상단을 다음으로 감싸서 사용한다.
>
> ```
> <div className="TodoListItem-virtualized" style={style}>
> ```
>
> 부모컴포넌트로 받은 스타일을 여기에 적용한다,

<hr>

## React 개발 사용 아이콘

<br>

> react-icon : [react-icon](https://react-icons.netlify.com/, "react-icon")
