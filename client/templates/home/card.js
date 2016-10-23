// import { DragSource, DropTarget } from 'react-dnd'

// const types = {
//   Card: 'card',
// }

// //

// const dragEvents = {

//   beginDrag(props, monitor, component) {
//     return {
//       id: props.id,
//       originalIndex: props.findCard(props.id).index
//     }
//   },

//   endDrag(props, monitor) {
//     console.log(props)
//     // const { id: droppedId, originalIndex } = monitor.getItem()
//     // const didDrop = monitor.didDrop()

//     // if (!didDrop) {
//     //   props.moveCard(droppedId, originalIndex)
//     // }
//   }

// }

// const dragProps = function (connect, monitor) {
//   return {
//     connectDragSource: connect.dragSource(),
//     isDragging: monitor.isDragging(),
//   }
// }

// //

// const dropEvents = {

//   canDrop() {
//     return false
//   },

//   hover(props, monitor) {
//     const { id: draggedId } = monitor.getItem()
//     const { id: overId } = props

//     if (draggedId !== overId) {
//       const { index: overIndex } = props.findCard(overId)
//       props.moveCard(draggedId, overIndex)
//     }
//   }

// }

// const dropProps = function (connect, monitor) {
//   return {
//     connectDropTarget: connect.dropTarget(),
//   }
// }

// @DragSource(types.Card, dragEvents, dragProps)
// @DropTarget(types.Card, dropEvents, dropProps)
// export default class card extends Component {
//   render() {
//     const { connectDragSource, isDragging, connectDropTarget, text } = this.props
//     return connectDragSource(connectDropTarget(
//       <div style={{ opacity: (isDragging) ? 0.3 : 1 }}>
//         {text}
//       </div>
//     ))
//   }
// }
