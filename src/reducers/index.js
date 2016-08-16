import { combineReducers } from 'redux';
import todos from './todos';
import visibilityFilter from './visibilityFilter';
import plantMaps from './plantMaps';

const todoApp = combineReducers({
  todos,
  visibilityFilter,
  plantMaps
})

export default todoApp
