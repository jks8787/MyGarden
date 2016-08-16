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
