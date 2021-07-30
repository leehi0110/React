# Immer (불변성 유지)

## immer 사용법

```
import produce from 'immer';

const nextState = produce(originalState, draft => {
  // 바꾸고 싶은 값 바꾸기
  draft.somewhere.deep.inside = 5;
})
```

## produce 함수는 두 가지 파라미터를 받는다.

> 1. 첫 번쨰 파라미터는 수정하고 싶은 상태
>
> 2. 두 번째 파라미터는 상태를 어떻게 업데이트 할 지 정의하는 함수
>
> 3. 두 번째 파라미터로 전달되는 함수 내부에서 원하는 값을 변경하면 produce 함수가 불변성 유지를 대신해 주면서 새로운 상태를 생성한다.
>    <br> <br>

## produce 함수를 이용한 불변성 유지 예제

> <br> <br>
>
> ```
> import produce from "immer";
>
> const originalState = [
>  {
>    id: 1,
>    todo: "전개 연산자와 배열 내장 함수로 불변성 유지하기",
>    checked: true,
>  },
>  {
>    id: 2,
>    todo: "immer로 불변성 유지하기",
>    checked: false,
>  },
> ];
>
> const nextState = produce(originalState, (draft) => {
>  // id가 2인 항목의 checked 값을 true로 설정
>  const todo = draft.find((t) => t.id === 2);
>  todo.checked = true;
>
>  // 배열에 새로운 데이터 추가
>  draft.push({
>    id: 3,
>    todo: "일정 관리 앱에 immer 적용하기",
>    checked: false,
>  });
>
>  // id = 1인 항목을 제거하기
>  draft.splice(
>    draft.findIndex((t) => t.id === 1),
>    1
>  );
> });
> ```

## useState의 함수형 업데이트와 immer 함께 사용

> produce 함수를 호출할 때, 첫 번째 파라미터가 함수 형태라면 업데이트 함수를 반환한다.

```
const updata = produce(draft => {
  draft.value = 2;
});

const originalState = {
  value: 1,
  foo: 'bar',
};

const nextState = update(originalState);
```
