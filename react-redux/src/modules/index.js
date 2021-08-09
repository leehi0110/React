import { combineReducers } from 'redux';
import counter from './counter';
import todos from './todos';

const rootReducer = combineReducers({
  counter,
  todos,
});
// store를 만들때 사용하는 리듀서를 하나만 사용해야 되기 때문에 combineReducers를 이용해 하나의 rootReducer를 만든다.

export default rootReducer;
