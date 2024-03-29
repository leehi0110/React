import { createAction, handleActions } from 'redux-actions';

// Ducks pattern

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// Define action type

const initialState = {
  number: 0,
};
// initial state

// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });
// Define action create function

// function counter(state = initialState, action) {
//   switch (action.type) {
//     case INCREASE:
//       return {
//         number: state.number + 1,
//       };
//     case DECREASE:
//       return {
//         number: state.number - 1,
//       };
//     default:
//       return state;
//   }
// }
// Create reducer function

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);
// action create function using createAction

const counter = handleActions(
  {
    [INCREASE]: (state, action) => ({ number: state.number + 1 }),
    [DECREASE]: (state, action) => ({ number: state.number - 1 }),
  },
  initialState,
);
// Create reducer function using handleActions

export default counter;
