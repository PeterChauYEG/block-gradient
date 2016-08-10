import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as actionCreators from './imports/actions'

// import component
import Main from './imports/components/Main'

function mapStateToProps(state) {
  return {
    blocks: state.blocks
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actionCreators, dispatch)
}

const App = connect(mapStateToProps, mapDispatchToProps)(Main)

export default App