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
