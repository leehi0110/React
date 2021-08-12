import { createAction, handleActions } from "redux-actions";
import {
  delay,
  put,
  takeEvery,
  takeLatest,
  select,
  throttle,
} from "redux-saga/effects";

const INCREASE = "counter/INCREASE";
const DECREASE = "couter/DECREASE";

const INCREASE_ASYNC = "counter/INCREASE_ASYNC";
const DECREASE_ASYNC = "counter/DECREASE_ASYNC";

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

export const increaseAsync = createAction(INCREASE_ASYNC, () => undefined);
export const decreaseAsync = createAction(DECREASE_ASYNC, () => undefined);

function* increaseSaga() {
  yield delay(1000);
  yield put(increase()); // put => 특정 액션을 디스패치

  const number = yield select((state) => state.counter);
  // saga 내부에서 현재 상태 조회
  console.log(number);
}

function* decreaseSaga() {
  yield delay(1000);
  yield put(decrease());
}

export function* counterSaga() {
  // yield takeEvery(INCREASE_ASYNC, increaseSaga);
  // 들어오는 모든 액션에 대한 작업을 처리

  yield throttle(3000, INCREASE_ASYNC, increaseSaga);
  // n초 동안 단 한 번만 호출되도록 설정

  yield takeLatest(DECREASE_ASYNC, decreaseSaga);
  // 기존에 진행 중이던 작업이 있다면 취소 처리 후
  // 가장 마지막으로 실행된 작업만 수행
}

const initialState = 0;

const counter = handleActions(
  {
    [INCREASE]: (state) => state + 1,
    [DECREASE]: (state) => state - 1,
  },
  initialState
);

export default counter;
