/* TODOS */

let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  };
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  };
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  };
}

/* PLANT MAPS */

export const ADD_PLANT_MAP = 'ADD_PLANT_MAP';
export const DELETE_PLANT_MAP = 'DELETE_PLANT_MAP';
export const CLEAR_ALL_PLANT_MAPS = 'CLEAR_ALL_PLANT_MAPS';

let nextMapId = 0
export function addPlantMap(plantMapData) {
  return {
    type: ADD_PLANT_MAP,
    payload: {
      id: nextMapId++,
      plantMapData: plantMapData.trim()
    }
  };
}

export function deletePlantMap(id) {
  return {
    type: DELETE_PLANT_MAP,
    payload: { id }
  };
}

export function clearAllPlantMaps() {
  return {
    type: CLEAR_ALL_PLANT_MAPS
  };
}
/* CROP PIE CHARTS */

export const ADD_CROP_PIE_CHART = 'ADD_CROP_PIE_CHART';
export const DELETE_CROP_PIE_CHART = 'DELETE_CROP_PIE_CHART';
export const CLEAR_ALL_CROP_PIE_CHARTS = 'CLEAR_ALL_CROP_PIE_CHARTS';

let nextCropPieChartId = 0
export function addCropPieChart(cropPieChartData) {
  return ({ getUid, now }) => ({
    type: ADD_CROP_PIE_CHART,
    payload: {
      id: nextCropPieChartId++,
      cropPieChartData: cropPieChartData.trim()
    }
  });
}

export function deleteCropPieChart(id) {
  return {
    type: DELETE_CROP_PIE_CHART,
    payload: { id }
  };
}

export function clearAllCropPieCharts() {
  return {
    type: CLEAR_ALL_CROP_PIE_CHARTS
  };
}
