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
    const blocks = [{
      color: '#777777'
    }, {
      color: '#555555'
    }, {
      color: '#222222'
    }, ]

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
