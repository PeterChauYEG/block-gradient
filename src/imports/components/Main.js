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
    const { blocks } = this.props
    
    // calculate gradient
    const gradient = blocks.reduce((prev, current, i, array) => {
      if (i < array.length - 1) {
        return prev + current.color + ', '
      }
      return prev + current.color + ')'
    }, 'linear-gradient(')
    
    const style = {
      background: gradient
    }
    
    return (
      <div className="Main" style={style}>
        <BlocksContainer {...this.props} />
      </div>
    )
  }
}

export default Main
