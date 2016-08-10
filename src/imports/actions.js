// action creators
export function moveBlock(dragIndex, hoverIndex) {
  return {
    type: 'MOVE_BLOCK',
    dragIndex,
    hoverIndex,
  }
}