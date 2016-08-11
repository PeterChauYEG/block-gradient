import React, { Component } from 'react'

// import styles
import './Gradient.css'

export default class Gradient extends Component {
  render() {
    const { gradient } = this.props

    return (
      <div className="gradient">
        <h1 className="h1">{gradient}</h1>
      </div>
    )
  }
}