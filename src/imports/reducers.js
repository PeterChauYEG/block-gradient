import { combineReducers } from 'redux'
import update from 'react/lib/update'

function blocks(state = [], action) {
  switch (action.type) {
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