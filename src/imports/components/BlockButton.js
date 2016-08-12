import React, { Component } from 'react'

// import styles
import './BlockButton.css'

export default class BlockButton extends Component {
  static propTypes = {
    action: React.PropTypes.func.isRequired,
    symbol: React.PropTypes.string.isRequired
  }

  render() {
    const { action, symbol } = this.props

    return (
      <div className="block-button" onClick={action}>
        <h1 className="symbol">{symbol}</h1>
      </div>
    )
  }
}