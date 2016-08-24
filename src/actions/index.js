let nextLayoutId = 0
export const addLayout = (text) => {
  return {
    type: 'ADD_LAYOUT',
    id: nextLayoutId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleLayout = (id) => {
  return {
    type: 'TOGGLE_LAYOUT',
    id
  }
}
// Static Pie Chart
import firebase from 'firebase';
import config from '../config/environment';

const staticPieChartData = firebase.initializeApp(config.firebase);

export const fetchStaticPieChartData = () => {
  return dispatch => {
    staticPieChartData.database().ref('/chart').on('value', snapshot => {
      dispatch({
        type: 'FETCH_STATIC_PIE_CHART_DATA',
        payload: snapshot.val(),
      });
    });
  };
}
