import { combineReducers } from 'redux'
import update from 'react/lib/update'
import tinycolor from 'tinycolor2'

function blocks(state = [], action) {
  const { dragIndex, direction, hoverIndex, i, newColor } = action
  const dragBlock = state[dragIndex]
  const length = state.length
  let color

  switch (action.type) {
  case 'ADD_BLOCK':
    switch(direction) {
    case 'top':
      // generate new color
      color = state[0] ?
        tinycolor(state[0].color).lighten(10).toHexString().toUpperCase() :
        '#16A9C7'

      return [
        {
          color,
        },
        ...state
      ]

    case 'bottom':
      // generate new color
      color = length > 0 ?
        tinycolor(state[length - 1].color).darken(10).toHexString().toUpperCase() :
        '#16A9C7'

      return [
        ...state,
        {
          color,
        },
      ]

    default:
      return state
    }

  case 'EDIT_COLOR':
    // handle no color
    if (newColor === '') {
      return [
        ...state.slice(0, i),
        ...state.slice(i + 1)
      ]
    }

    // convert color to hex
    const validColor = tinycolor(newColor).toHexString().toUpperCase()

    return [
      ...state.slice(0, i),
      { ...state[i], color: validColor },
      ...state.slice(i + 1)
    ]

  case 'MOVE_BLOCK':
    return update(state, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragBlock]
      ]
    })

  case 'REMOVE_BLOCK':
    switch(direction) {
    case 'top':
      return [
        ...state.slice(1)
      ]
    case 'bottom':
      return [
        ...state.slice(0, -1)
      ]
    default:
      return state
    }

  default:
    return state
  }
}

function controls(state = [], action) {
  switch(action.type) {
  case 'CHANGE_DIRECTION':
    const { direction: prevDirection } = state
    const direction = prevDirection === 'top' ? 'bottom' : 'top'
    return {
      ...state,
      direction,
    }
  default:
    return state
  }
}

const rootReducer = combineReducers({
  blocks,
  controls
})

export default rootReducer