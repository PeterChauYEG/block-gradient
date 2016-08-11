import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// import styles
import './BlocksContainer.css'

// import component
import Block from './Block'

class BlocksContainer extends Component {
  render() {
    const { blocks } = this.props
    return (
      <div className="blocks-container">
        {
          blocks.map((block, i) => {
            const { color } = block
            return <Block
              {...this.props}
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

export default DragDropContext(HTML5Backend)(BlocksContainer)