import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// import styles
import './BlocksContainer.css'

// import component
import Block from './Block'

class BlocksContainer extends Component {
  static propTypes = {
    blocks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    editColor: React.PropTypes.func.isRequired,
    moveBlock: React.PropTypes.func.isRequired
  }

  render() {
    const { blocks, editColor, moveBlock } = this.props
    return (
      <div className="blocks-container">
        {
          blocks.map((block, i) => {
            const { color } = block
            return <Block
              color={color}
              editColor={editColor}
              i={i}
              key={i}
              moveBlock={moveBlock}
            />
          })
        }
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(BlocksContainer)