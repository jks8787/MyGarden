import expect from 'expect'
import * as actions from '../../src/actions'


describe('layout actions', () => {
  it('addLayout should create ADD_LAYOUT action', () => {
    expect(actions.addLayout('100, 100')).toEqual({
      type: 'ADD_LAYOUT',
      id: 0,
      text: '100, 100'
    })
  })

  it('setVisibilityFilter should create SET_VISIBILITY_FILTER action', () => {
    expect(actions.setVisibilityFilter('active')).toEqual({
      type: 'SET_VISIBILITY_FILTER',
      filter: 'active'
    })
  })

  it('toogleTodo should create TOGGLE_LAYOUT action', () => {
    expect(actions.toggleLayout(1)).toEqual({
      type: 'TOGGLE_LAYOUT',
      id: 1
    })
  })
})
