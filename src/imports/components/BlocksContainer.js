import React, {
  Component
}
from 'react'

// import styles
import './BlocksContainer.css'

// import component
import Block from './Block'

export default class BlocksContainer extends Component {
  render() {
    const { blocks } = this.props
    return (
      <div className="BlocksContainer">
        {
          blocks.map((block, i) => {
            const { color } = block
            return <Block 
              color={color} 
              i={i} 
              key={i} 
            />
          })
        }
      </div>
    )
  }
}
