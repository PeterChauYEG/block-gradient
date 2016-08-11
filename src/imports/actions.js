// action creators
export function addBlock() {
  return {
    type: 'ADD_BLOCK'
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