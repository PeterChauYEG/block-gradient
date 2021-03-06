import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { DragSource, DropTarget } from 'react-dnd'
import { flow } from 'lodash'
import { RIEInput } from 'riek'

// import styles
import './Block.css'

const blockSource = {
  beginDrag(props) {
    return {
      index: props.i
    }
  }
}

const blockTarget = {
  hover(props, monitor, component) {
    const dragIndex = monitor.getItem().index
    const hoverIndex = props.i

    // Don't replace items with themselves
    if (dragIndex === hoverIndex) {
      return
    }

    // Determine rectangle on screen
    const hoverBoundingRect = findDOMNode(component).getBoundingClientRect()

    // Get vertical middle
    const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2

    // Determine mouse position
    const clientOffset = monitor.getClientOffset()

    // Get pixels to the top
    const hoverClientY = clientOffset.y - hoverBoundingRect.top

    // Only perform the move when the mouse has crossed half of the items height
    // When dragging downwards, only move when the cursor is below 50%
    // When dragging upwards, only move when the cursor is above 50%

    // Dragging downwards
    if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
      return
    }

    // Dragging upwards
    if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
      return
    }

    // Time to actually perform the action
    props.moveBlock(dragIndex, hoverIndex)

    // Note: we're mutating the monitor item here!
    // Generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches.
    monitor.getItem().index = hoverIndex
  }
}

export default class Block extends Component {
  constructor(props) {
    super(props)
    this.handleChange = this.handleChange.bind(this)
  }

  static propTypes = {
    color: React.PropTypes.string.isRequired,
    connectDragSource: React.PropTypes.func.isRequired,
    connectDropTarget: React.PropTypes.func.isRequired,
    editColor: React.PropTypes.func.isRequired,
    i: React.PropTypes.number.isRequired,
    isDragging: React.PropTypes.bool.isRequired,
    moveBlock: React.PropTypes.func.isRequired
  }

  handleChange(change) {
    const { editColor, i } = this.props
    const newColor = change.color.trim()

    editColor(i, newColor)
  }

  render() {
    const { color, isDragging, connectDragSource, connectDropTarget } = this.props
    const style = {
      backgroundColor: color
    }
    const opacity = isDragging ? 0 : 1

    return connectDragSource(connectDropTarget(
      <div className="block" style={{ ...style, opacity }}>
        <RIEInput
          value={color}
          change={this.handleChange}
          propName="color"
          classEditing="editing"
          className="input"
        />
      </div>
    ))
  }
}

export default flow(
  DragSource('block', blockSource, (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  })),
  DropTarget('block', blockTarget, connect => ({
    connectDropTarget: connect.dropTarget()
  }))
)(Block)