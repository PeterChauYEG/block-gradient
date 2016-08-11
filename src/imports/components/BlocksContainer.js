import React, { Component } from 'react'
import { DragDropContext } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { presets, TransitionMotion, spring } from 'react-motion'

// import styles
import './BlocksContainer.css'

// import component
import Block from './Block'

class BlocksContainer extends Component {
  static propTypes = {
    blocks: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
    editColor: React.PropTypes.func.isRequired,
    moveBlock: React.PropTypes.func.isRequired
  }

  getStyles() {
    const { blocks } = this.props
    return blocks.map((block, i) => {
      const { color } = block
      return {
        data: {
          color
        },
        key: i.toString(),
        style: {
          height: 100,
          opacity: spring(1, presets.stiff)
        }
      }
    })
  }

  willLeave() {
    return {
      height: spring(0, presets.stiff),
      opacity: spring(0, presets.stiff)
    }
  }

  render() {
    const { editColor, moveBlock } = this.props
    return (
      <TransitionMotion
        styles={this.getStyles()}
        willLeave={this.willLeave}
      >
        {styles =>
          <div className="blocks-container">
            {styles.map(({key, style: { height, opacity }, data: { color }}) => {
              return <Block
                opacity={opacity}
                color={color}
                editColor={editColor}
                height={height}
                i={Number(key)}
                key={key}
                moveBlock={moveBlock}
              />
            })}
          </div>
        }
      </TransitionMotion>
    )
  }
}

export default DragDropContext(HTML5Backend)(BlocksContainer)