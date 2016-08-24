import { combineReducers } from 'redux';
import layouts from './layouts';
import visibilityFilter from './visibilityFilter';
import staticPieCharts from './staticPieCharts';

const gardenApp = combineReducers({
  layouts,
  visibilityFilter,
  staticPieCharts
})

export default gardenApp;
