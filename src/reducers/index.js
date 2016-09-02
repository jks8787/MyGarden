import { combineReducers } from 'redux';
import layouts from './layouts';
import visibilityFilter from './visibilityFilter';
import pieCharts from './pieCharts';

const gardenApp = combineReducers({
  layouts,
  visibilityFilter,
  pieCharts
})

export default gardenApp;
