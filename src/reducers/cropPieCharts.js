import * as actions from '../actions';
import CropPieChart from './CropPieChart';
import { Map, Record } from 'immutable';

const CropPieChart = Record({
  id: '',
  cropPieChartData: ''
});

const InitialState = Record({
  map: Map()
});
const initialState = new InitialState;

// Note how JSON from server is revived to immutable record.
const revive = ({ map }) => initialState.merge({
  map: Map(map).map(cropPieChart => new CropPieChart(cropPieChart))
});

export default function cropPieChartReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ADD_CROP_PIE_CHART: {
      const cropPieChart = new CropPieChart(action.payload);
      return state
        .update('map', map => map.set(cropPieChart.id, cropPieChart));
    }

    case actions.DELETE_CROP_PIE_CHART: {
      const { id } = action.payload;
      return state.update('map', map => map.delete(id));
    }

    case actions.CLEAR_ALL_CROP_PIE_CHARTS: {
      return state.update('map', map => map.clear());
    }

  }

  return state;
}
