# Context API

## Provider / Consumer / useContext hook

<br>

### 1. createContext

<br>

> createContext를 사용해 context 객체를 생성할 수 있으며, createContext는 Provider와 Consumer 컴포넌트를 반환한다.
> <br>
>
> ```
> const ColorContext = createContext({
>  state: { color: 'black', subcolor: 'red'},
>  actions: {
>    setColor: () => {},
>    setSubcolor: () => {},
>  }
> });
> ```
>
> <br>

<br>

### 2. Provider

<br>

> <br>
> Provider는 정의한 context를 하위 컴포넌트에 전달하는 역할을 한다.
> <br> <br>
> Provider 하위의 context를 가진 component는 provider의 value로 가진 state가 변화할 때 마다 리렌더링 된다.
> <br>
>
> ```
> const ColorProvider = ({children}) => {
>  const [color, setColor] = useState('black');
>  const [subcolor, setSubcolor] = useState('red');
>
>  const value = {
>    state : {color, subcolor},
>    actions: {setColor, setSubcolor}
>  };
>
>  return (
>    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
>  );
> };
> ```
>
> <br>

<br>

### 3. Consumer

<br>

> <br>
> Context의 변화를 구독하는 컴포넌트이다.
> <br> <br>
> context의 자식은 함수형 컴포넌트여야 한다
> <br> <br>
> 컴포넌트가 가지는 context는 가장 가까운 provider이다.
> <br> <br>
> 상위 provider가 없다면 createContext에서 정의한 defaultValue를 가진다.
> <br>
>
> ```
> <ColorConsumer>
>  {({ actions}) => (
>   // 객체 비구조화 할당을 사용
>    <div style={{display: "flex"}}>
>      {colors.map(color => (
>        <div
>          key={color}
>          style={{background: color, width: "24px", height: '24px', cursor: 'pointer'}}
>          onClick={() => actions.setColor(color)}
>          onContextMenu={e => { // 오른쪽 버튼 클릭 이벤트
>            e.preventDefault(); // 오른쪽 버튼 클릭 시 메뉴가 뜨는 것을 방지
>            actions.setSubcolor(color);
>          }}
>        />
>      ))}
>    </div>
>  )}
> </ColorConsumer>
> ```
>
> <br>

<br>

### 4. useContext hook 사용

<br>

> <br>
> Consumer가 아닌 userContext hook을 사용해 context의 값을 사용할 수 있다.
> <br> <br>
>
> ```
> const { state } = useContext(ColorContext);
>  return (
>    <>
>      <div
>        style={{width: '64px', height: '64px', background: state.color}}
>      />
>      <div
>        style={{width: '32px', height: '32px', background: state.subcolor}}
>      />
>    </>
>  )
> ```
>
> <br>
