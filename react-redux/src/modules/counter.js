// Ducks pattern

const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';
// Define action type

export const increase = () => ({ type: INCREASE });
export const decrease = () => ({ type: DECREASE });
// Define action create function

const initialState = {
  number: 0,
};
// initial state

function counter(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        number: state.number + 1,
      };
    case DECREASE:
      return {
        number: state.number - 1,
      };
    default:
      return state;
  }
}
// Create reducer function

export default counter;
