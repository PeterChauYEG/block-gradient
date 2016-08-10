import { combineReducers } from 'redux'
import update from 'react/lib/update'

function blocks(state = [], action) {
  switch (action.type) {
  case 'EDIT_COLOR':
    const { i, newColor } = action
    return [
      ...state.slice(0, i),
      { ...state[i], color: newColor },
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