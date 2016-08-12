import React, { Component } from 'react'

// import styles
import './Controls.css'

// import components
import BlockButton from './BlockButton'

export default class Controls extends Component {
  static propTypes = {
    addBlock: React.PropTypes.func.isRequired,
    direction: React.PropTypes.string.isRequired,
    removeBlock: React.PropTypes.func.isRequired
  }

  render() {
    const { addBlock, direction, removeBlock } = this.props
    return (
      <div className="controls">
        {direction === 'top' ?
          <div>
            <BlockButton action={addBlock.bind(null, direction)} symbol='+' />
            <BlockButton action={removeBlock.bind(null, direction)} symbol='&#8209;' />
          </div> :
          <div>
            <BlockButton action={removeBlock.bind(null, direction)} symbol='&#8209;' />
            <BlockButton action={addBlock.bind(null, direction)} symbol='+' />
          </div>
        }
      </div>
    )
  }
}