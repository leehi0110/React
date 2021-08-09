# React + Redux

### 1. redux + react-redux

<br>

> npm install redux react-redux

<br>

### 2. Ducks Pattern

<br>

<img src="./src/Images/DucksImage.png" width="60%" height="100%" alt="RubberDuck"/>

<br>

> - 액션 타입, 액션 생성 함수, 리듀서 함수를 기능별로 한 파일에 몰아서 작성하는 방식
>   <br>
>
> [ 액션 타입 선언 ]
>
> ```
> const INCREASE = 'counter/INCREASE';
> const DECREASE = 'counter/DECREASE';
> ```
>
> [ 액션 생성 함수 ]
>
> ```
> export const increase = () => ({ type: INCREASE });
> export const decrease = () => ({ type: DECREASE });
> ```
>
> [ 리듀서 함수 ]
>
> ```
> const initialState = {
>  number: 0,
> };
> // initial state
>
> function counter(state = initialState, action) {
>  switch (action.type) {
>    case INCREASE:
>      return {
>        number: state.number + 1,
>      };
>    case DECREASE:
>      return {
>        number: state.number - 1,
>      };
>    default:
>      return state;
>  }
> }
>
> export default counter;
> ```
>
> <br>

<br>

### 3. combineReducer + bindActionCreators

<br>

> [ combineReducer ] > <br>
>
> ```
> const rootReducer = combineReducers({
>  counter,
>  todos,
> });
> ```
>
> [ bindActionCreators]
>
> ```
> export default connect(
>  state => ({
>    number: state.counter.number,
>  }),
>  dispatch => bindActionCreators(
>  {
>    increase,
>    decrease,
>  }, dispatch
>  )
> )(CounterContainer);
> ```
>
> [ connect의 두번째 파라미터를 이용한 또 다른 방법 ]
>
> ```
> export default connect(
>  state => ({
>    number: state.counter.number,
>  }),
>  {
>    increase,
>    decrease,
>  },
> )(CounterContainer);
> ```
>
> <br>
