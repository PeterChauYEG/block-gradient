import React, {
  Component
}
from 'react'

// import styles
import './Main.css'

// import components
import BlocksContainer from './BlocksContainer'

class Main extends Component {
  render() {
    return (
      <div className="Main">
        <BlocksContainer {...this.props} />
      </div>
    )
  }
}

export default Main
