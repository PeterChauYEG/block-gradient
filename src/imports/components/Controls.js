import React, { Component } from 'react'

// import styles
import './Controls.css'

// import components
import BlockButton from './BlockButton'

export default class Controls extends Component {
  static propTypes = {
    addBlock: React.PropTypes.func.isRequired,
    removeBlock: React.PropTypes.func.isRequired
  }

  render() {
    const { addBlock, removeBlock } = this.props

    return (
      <div className="controls">
        <BlockButton action={removeBlock} symbol='&#8209;' />
        <BlockButton action={addBlock} symbol='+' />
      </div>
    )
  }
}