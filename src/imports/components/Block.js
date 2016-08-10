import React, { Component } from 'react'

// import styles
import './Block.css'

export default class Block extends Component {
    render() {
        const { color } = this.props
        const style = {
            backgroundColor: color
        }
        return (
            <div className="Block" style={style}>
            </div>
        )
    }
}