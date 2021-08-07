# VanillaJS + Redux

## Parcel

> npm install -g parcel-bundler

## Redux

> npm install redux
> <br> <br>
> redux를 이용한 상태관리
> <br>

1. Define action type

```
const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECRESE = "DECREASE";
```

2. Define action create function

```
const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECRESE });
```

3. Set initailState

```
const initialState = {
  toggle: false,
  counter: 0,
};
```

4. Define Reducer function

```
function reducer(state = initialState, action) {
  // action type에 따라 처리
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state,
        toggle: !state.toggle,
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference,
      };
    case DECRESE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    default:
      return state;
  }
}
```

5. create Store

```
const store = createStore(reducer);
```

6. subscribe function

```
store.subscribe(render);
```

7. dispatch(action)

```
divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncreass.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
```

### 리덕스 사용 규칙

> <br>
>
> - 단일 스토어
>   > 하나의 애플리케이션 안에는 하나의 스토어를 사용한다.
> - 읽기 전용 상태
>   > 리덕스 상태는 읽기 전용으로, 상태를 업데이트 하기 위해서는 기존의 객체는 건드리지 않고 새로운 객체를 생성해야 된다,
>   > <br> <br>
>   > 리덕스에서 불변성을 유지해야 되는 이유는 내부적으로 데이터가 변경되는 것을 감지하기 위해 얕은 비교를 검사하기 때문이다.
> - 리듀서는 순수한 함수
>   > 1.  리듀서 함수는 이전 상태와 액션 객체를 파라미터로 받는다.
>   > 2.  파라미터 외의 값에는 의존하면 안된다,
>   > 3.  이전 상태는 건드리지 않고, 변화를 준 새로운 상태 객체를 만들어서 반환한다.
>
> <br>
