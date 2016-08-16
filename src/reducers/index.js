import { combineReducers } from 'redux'
import layouts from './layouts'
import visibilityFilter from './visibilityFilter'

const gardenApp = combineReducers({
  layouts,
  visibilityFilter
})

export default gardenApp;
