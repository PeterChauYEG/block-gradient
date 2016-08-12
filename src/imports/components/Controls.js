import React, { Component } from 'react'

// import styles
import './Controls.css'
require('font-awesome-loader')

// import components
import BlockButton from './BlockButton'

export default class Controls extends Component {
  static propTypes = {
    addBlock: React.PropTypes.func.isRequired,
    changeDirection: React.PropTypes.func.isRequired,
    direction: React.PropTypes.string.isRequired,
    removeBlock: React.PropTypes.func.isRequired
  }

  render() {
    const {
      addBlock,
      changeDirection,
      direction,
      removeBlock
    } = this.props
    return (
      direction === 'top' ?
        <div className="controls">
          <div className="direction-control">
            <BlockButton action={changeDirection} symbol='fa fa-long-arrow-up' />
          </div>
          <div className="block-controls">
            <BlockButton action={addBlock.bind(null, direction)} symbol='fa fa-plus' />
            <BlockButton action={removeBlock.bind(null, direction)} symbol='fa fa-minus' />
          </div>
        </div> :
        <div className="controls">
          <div className="direction-control">
            <BlockButton action={changeDirection} symbol='fa fa-long-arrow-down' />
          </div>
          <div className="block-controls">
            <BlockButton action={removeBlock.bind(null, direction)} symbol='fa fa-minus' />
            <BlockButton action={addBlock.bind(null, direction)} symbol='fa fa-plus' />
          </div>
        </div>
    )
  }
}