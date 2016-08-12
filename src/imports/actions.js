// action creators
export function addBlock(direction) {
  return {
    type: 'ADD_BLOCK',
    direction
  }
}

export function changeDirection() {
  return {
    type: 'CHANGE_DIRECTION'
  }
}

export function editColor(i, newColor) {
  return {
    type: 'EDIT_COLOR',
    i,
    newColor,
  }
}

export function moveBlock(dragIndex, hoverIndex) {
  return {
    type: 'MOVE_BLOCK',
    dragIndex,
    hoverIndex,
  }
}

export function removeBlock(direction) {
  return {
    type: 'REMOVE_BLOCK',
    direction
  }
}
