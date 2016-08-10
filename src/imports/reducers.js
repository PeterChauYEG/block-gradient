import { combineReducers } from 'redux'
import { MOVE_BLOCK } from './actions'

function blocks(state = [], action) {
  switch (action.type) {
  case MOVE_BLOCK: 
    return state
  default:
    return state
  }
}

const rootReducer = combineReducers({
  blocks
})

export default rootReducer