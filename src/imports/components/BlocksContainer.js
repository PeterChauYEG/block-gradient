import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'

// import styles
import './BlocksContainer.css'

// import component
import Block from './Block'

class BlocksContainer extends Component {
  constructor(props) {
    super(props)
    this.moveCard = this.moveCard.bind(this)
  }
  
  moveCard(dragIndex, hoverIndex) {
    const { moveBlock } = this.props
    moveBlock(dragIndex, hoverIndex)
  }
  
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
              moveCard={this.moveCard}
            />
          })
        }
      </div>
    )
  }
}

export default DragDropContext(HTML5Backend)(BlocksContainer)