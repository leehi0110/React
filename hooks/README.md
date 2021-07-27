# useState

> 가장 기본적인 Hook, 함수형 컴포넌트에서도 가변적인 상태를 지닐 수 있도록 한다.

```
const [name, setName] = useState('');
const [nickname, setNickname] = useState('');
```

# useEffect

> 리액트 컴포넌트가 렌더링 될 때마다 특정 작업을 수행하도록 설정할 수 있는 Hook

```
useEffect(() => {
    console.log('렌더링 완료');
    console.log({
      name,
      nickname
    });
  });
  // 렌더링 되거나 업데이트 될 경우에 실행

  useEffect(()=> {
    console.log('마운트될 때만 실행')
  },[]);
  // 함수의 두번째에 빈 배열을 파라미터로 넣을 경우 컴포넌트가 처음 렌더링 될 경우만 실행되고, 업데이트 될 때는 실행되지 않는다.

  useEffect(() => {
    console.log(name);
  },[name]);
  // 변화가 일어나는 값을 배열에 넣어 함수의 두번째 파라미터로 보내는 경우 해당 값이 변화할 때 특정 작업을 수행한다.
```

> 클래스형 컴포넌트의 componentDidMount와 ComponentDidUpdate를 합친 형태

> cleanup 함수를 컴포넌트가 언마운트 혹은 업데이트 되기 직전에 작업을 수행할 수 있다.

```
useEffect(() => {
  console.log('effect');
  console.log(name);
  return () => {
    console.log('cleanup');
    console.log(name);
  };
},[]);
```

# useReducer

> 컴포넌트 상황에 따라 다양한 상태를 다른 값으로 업데이트 할 때 사용하는 hook으로 useState보다 활용성이 높다.

> 현재 상태, 업데이트를 위해 필요한 정보를 담은 Action 값을 전달받아 새로운 상태를 반환하는 함수.

> 리듀서 함수에서 새로운 상태를 만들경우 반드시 불변성을 지켜야 한다.

```
const [state, dispatch] = useReducer(reducer, {value: 0});
// useReducer() 첫번째 파라미터는 리듀서 함수, 두번째 파라미터는 해당 리듀서의 기본값을 넣어준다.

// state는 현재 가리키고 있는 상태
// dispatch는 액션을 발생시크는 함수
```

# useMemo

> 함수형 컴포넌트 내부에서 발생하는 연산을 최적화 하는 hook

> 렌더링 과정에서 특정 값이 바뀌었을 때만 연산을 실행한다. 원하는 값이 바뀌지 않았다면 이전에 연산했던 결과를 다시 사용한다.

```
const avg = useMemo(() => getAverage(list), [list]);

// 연산을 하는 getAverage() 를 useMemo로 감쌌다.
```

# useCallback

> 렌더링 성능을 최적화해야 하는 상황에서 사용한다.

> 해당 hook을 사용하면 만들어 놨던 함수를 재사용할 수 있다.

```
const onChange = useCallback(e => {
  setNumber(e.target.value);
}, []);
// 두 번째 파라미터에 빈배열이 들어갈 경우는 컴포넌트가 처음 렌더링될 때만 함수를 생성하고 재사용한다.
```

> 함수 내부에서 상태 값에 의존해야 할 때는 그 값을 두번째 파라미터 안에 포함시켜줘야 한다.

```
const onInsert = useCallback(() => {
  const nextList = list.concat(parseInt(number));
  setList(nextList);
  setNumber('');
},[number, list]);
// 두 번째 파라미터 안 배열에 값을 넣어줄 경우 해당 값이 변경될 때마다 함수 생성 => number or list가 변경될 때마다 함수 생성
```

# useRef

> 함수형 컴포넌에서 ref를 사용할 수 있도록 해주는 hook

> 특정 DOM을 선택할 수 있도록 해준다.

```
<input value={number} onChange={onChange} ref={inputEl} />

// 이 경우 inputEl.current는 해당 input 엘리먼트를 가리킨다.
```

# customHooks

> 여러 컴포넌트에서 비슷한 기능을 공유할 경우, hook을 만들어 사용이 가능하다.

function reducer(state, action) {
return {
...state,
[action.name]: action.value,
};
}

```
export default function useInputs(initialForm) {
  const [state, dispatch] = useReducer(reducer, initialForm);

  const onChange = (e) => {
    dispatch(e.target);
  };

  return [state, onChange];
}
```
