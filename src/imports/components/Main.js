import React, { Component } from 'react'

// import styles
import './Main.css'

// import components
import AddBlock from './AddBlock'
import BlocksContainer from './BlocksContainer'
import Gradient from './Gradient'

class Main extends Component {
  render() {
    const {
      addBlock,
      blocks,
      editColor,
      moveBlock
    } = this.props
    let gradient

    // calculate gradient
    if (blocks.length === 1) {
      gradient = blocks[0].color
    } else if (blocks.length === 0) {
      gradient = '#16a9c7'
    } else {
      gradient = blocks.reduce((prev, current, i, array) => {
        const { color } = current
        const { length } = array

        if (i === 0 && i === length - 1) {
          return prev + color + ')'
        } else if (i === 0) {
          return prev + color
        } else if (i < length - 1) {
          return prev  + ', ' + color
        } else {
          return prev + ', ' + color + ')'
        }

      }, 'linear-gradient(')
    }

    const style = {
      background: gradient
    }

    return (
      <div className="main" style={style}>
        <BlocksContainer
          blocks={blocks}
          editColor={editColor}
          moveBlock={moveBlock}
        />
        <Gradient gradient={gradient} />
        <AddBlock addBlock={addBlock} />
      </div>
    )
  }
}

export default Main
