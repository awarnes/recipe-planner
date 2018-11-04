import React, { Component } from 'react'
import { DropTarget } from 'react-dnd'
import { Types } from './constants'

const style = {
	height: '12rem',
	width: '12rem',
	marginRight: '1.5rem',
	marginBottom: '1.5rem',
	color: 'white',
	padding: '1rem',
	textAlign: 'center',
	fontSize: '1rem',
	lineHeight: 'normal',
	float: 'left',
}

const mealTarget = {
  drop({type}) {
    return {
      name: type
    }
  }
}

class Meal extends Component {
  render () {
    const { canDrop, isOver, connectDropTarget, type } = this.props

    const isActive = canDrop && isOver

		let backgroundColor = '#222'
		if (isActive) {
			backgroundColor = 'darkgreen'
		} else if (canDrop) {
			backgroundColor = 'darkkhaki'
		}

    return (
      connectDropTarget && connectDropTarget(
        <div style={{...style, backgroundColor}}>
          {type}
          <br />
          <br />
          {isActive ? 'Release to drop' : 'Drag a box here'}
        </div>
      )
    )
  }
}

export default DropTarget(Types.RECIPE, mealTarget, (connect, monitor) => ({
  connectDropTarget: connect.dropTarget(),
  isOver: monitor.isOver(),
  canDrop: monitor.canDrop()
}))(Meal)