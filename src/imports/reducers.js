import { combineReducers } from 'redux'
import update from 'react/lib/update'
import tinycolor from 'tinycolor2'

function blocks(state = [], action) {
  switch (action.type) {
  case 'ADD_BLOCK':
    const length = state.length

    // generate new color
    const color = length === 0 ?
      '16A9C7' :
      tinycolor(state[length-1].color).darken(10).toHexString().toUpperCase()

    return [
      ...state,
      {
        color,
      }
    ]
  case 'EDIT_COLOR':
    const { i, newColor } = action

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
    const { dragIndex, hoverIndex } = action
    const dragBlock = state[dragIndex]

    return update(state, {
      $splice: [
        [dragIndex, 1],
        [hoverIndex, 0, dragBlock]
      ]
    })
  default:
    return state
  }
}

const rootReducer = combineReducers({
  blocks
})

export default rootReducer