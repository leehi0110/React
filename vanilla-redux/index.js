import { createStore } from "redux";

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncreass = document.querySelector("#increase");
const btnDecrease = document.querySelector("#decrease");

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECRESE = "DECREASE";
// Define action names

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = (difference) => ({ type: INCREASE, difference });
const decrease = () => ({ type: DECRESE });
// action create function

const initialState = {
  toggle: false,
  counter: 0,
};
// initial state

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

const store = createStore(reducer);

const render = () => {
  const state = store.getState();

  if (state.toggle) {
    divToggle.classList.add("active");
  } else {
    divToggle.classList.remove("active");
  }

  counter.innerText = state.counter;
};

render();

store.subscribe(render);

divToggle.onclick = () => {
  store.dispatch(toggleSwitch());
};

btnIncreass.onclick = () => {
  store.dispatch(increase(1));
};

btnDecrease.onclick = () => {
  store.dispatch(decrease());
};
