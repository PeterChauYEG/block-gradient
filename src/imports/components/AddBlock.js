import React, { Component } from 'react'

// import styles
import './AddBlock.css'

export default class AddBlock extends Component {
  render() {
    const { addBlock } = this.props

    return (
      <div className="add-block" onClick={addBlock}>
        <h1 className="add">+</h1>
      </div>
    )
  }
}