import { createStore, compose } from 'redux'

// import rootReducer
import rootReducer from './reducers'

// import default data
import blocks from './data/blocks'

// create object for default data 
const defaultState = {
  blocks,
}

// enable redux devtools... can this be done with webpack?
const enhancers = compose(
  window.devToolsExtension ? window.devToolsExtension() : f => f
)

// create store
const store = createStore(rootReducer, defaultState, enhancers)

export default store