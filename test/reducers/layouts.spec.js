import expect from 'expect'
import layouts from '../../src/reducers/layouts'

describe('layouts reducer', () => {
  it('should handle initial state', () => {
    expect(
      layouts(undefined, {})
    ).toEqual([])
  })

  it('should handle ADD_LAYOUT', () => {
    expect(
      layouts([], {
        type: 'ADD_LAYOUT',
        text: '100, 100',
        id: 0
      })
    ).toEqual([
      {
        text: '100, 100',
        completed: false,
        id: 0
      }
    ])

    expect(
      layouts([
        {
          text: '100, 100',
          completed: false,
          id: 0
        }
      ], {
        type: 'ADD_LAYOUT',
        text: '100, 100',
        id: 1
      })
    ).toEqual([
      {
        text: '100, 100',
        completed: false,
        id: 0
      }, {
        text: '100, 100',
        completed: false,
        id: 1
      }
    ])

    expect(
      layouts([
        {
          text: '100, 100',
          completed: false,
          id: 0
        }, {
          text: '100, 100',
          completed: false,
          id: 1
        }
      ], {
        type: 'ADD_LAYOUT',
        text: '200, 200',
        id: 2
      })
    ).toEqual([
      {
        text: '100, 100',
        completed: false,
        id: 0
      }, {
        text: '100, 100',
        completed: false,
        id: 1
      }, {
        text: '200, 200',
        completed: false,
        id: 2
      }
    ])
  })

  it('should handle TOGGLE_LAYOUT', () => {
    expect(
      layouts([
        {
          text: '300, 250',
          completed: false,
          id: 1
        }, {
          text: '100, 150',
          completed: false,
          id: 0
        }
      ], {
        type: 'TOGGLE_LAYOUT',
        id: 1
      })
    ).toEqual([
      {
        text: '300, 250',
        completed: true,
        id: 1
      }, {
        text: '100, 150',
        completed: false,
        id: 0
      }
    ])
  })

})
