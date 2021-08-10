import React, { useCallback } from 'react';
// import { bindActionCreators } from 'redux';
// import { connect } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { increase, decrease } from '../modules/counter';

const CounterContainer = () => {
  const number = useSelector((state) => state.counter.number);
  // useSelector hook을 이용해 리덕스의 상태를 조회할 수 있다.
  const dispatch = useDispatch();
  // useDispatch hook을 이용해 컴포넌트 내부에서 스터어의 내장함수 dispatch를 사용할 수 있다,

  const onIncrease = useCallback(() => dispatch(increase()), [dispatch]);
  const onDecrease = useCallback(() => dispatch(decrease()), [dispatch]);
  // useCallback hook을 사용해 컴포넌트의 성능 최적화

  return (
    // <Counter number={number} onIncrease={increase} onDecrease={decrease} />
    <Counter number={number} onIncrease={onIncrease} onDecrease={onDecrease} />
  );
};

export default CounterContainer;

// 익명 함수 형태로 선언
// export default connect(
//   (state) => ({
//     number: state.counter.number,
//   }),
//   // // 1번 - basic
//   // dispatch => ({
//   //   increase: () => dispatch(increase()),
//   //   decrease: () => dispatch(decrease()),
//   // }),
//   // // 2번 - bindActinoCreators
//   // // bindActionCreators를 이용해 action을 dispatch
//   // dispatch => bindActionCreators(
//   //   {
//   //     increase,
//   //     decrease,
//   //   },dispatch
//   // ),
//   // 3번 - 액션 생성 함수로 이루어진 객체를 두번째 파라미터로 넣는 방법
//   {
//     increase,
//     decrease,
//   },
// )(CounterContainer);

// // mapStateProps와 mapDispatchToProps를 이용한 connect
// const mapStateProps = state => ({
//   number: state.counter.number,
// });
// // 리덕스 스토어 안의 상태를 컴포넌트의 props로 넘겨주기 위해 설정하는 함수

// const mapDispatchToProps = dispatch => ({
//   increase: () => {
//     dispatch(increase());
//   },
//   decrease: () => {
//     dispatch(decrease());
//   },
// });
// // 액션 생성 함수를 컴포넌트의 props로 넘겨주기 위해 사용하는 함수

// export default connect(
//   mapStateProps,
//   mapDispatchToProps,
// )(CounterContainer);
