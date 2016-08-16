import * as actions from '../actions';
import { Map, Record } from 'immutable';

const PlantMap = Record({
  id: '',
  plantMapData: ''
});

const InitialState = Record({
  map: Map()
});
const initialState = new InitialState;

// Note how JSON from server is revived to immutable record.
const revive = ({ map }) => initialState.merge({
  map: Map(map).map(plantMap => new PlantMap(plantMap))
});

export default function plantMapReducer(state = initialState, action) {
  if (!(state instanceof InitialState)) return revive(state);

  switch (action.type) {

    case actions.ADD_PLANT_MAP: {
      const plantMap = new PlantMap(action.payload);
      return state
        .update('map', map => map.set(plantMap.id, plantMap));
    }

    case actions.DELETE_PLANT_MAP: {
      const { id } = action.payload;
      return state.update('map', map => map.delete(id));
    }

    case actions.CLEAR_ALL_PLANT_MAPS: {
      return state.update('map', map => map.clear());
    }

  }

  return state;
}
